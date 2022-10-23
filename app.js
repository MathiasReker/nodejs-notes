'use strict'

import express from "express";
import mustacheExpress from "mustache-express";
import path from 'path';
import showdown from "showdown";
import {JSDOM} from "jsdom";
import DOMPurify from "dompurify";
import fs from "fs";
import authRouter from "./routers/authRouter.js";
import prettify from "showdown-prettify"

const app = express(),
    mustache = mustacheExpress(),
    PORT = process.env.PORT || 8080;

let currentPageId,
    posts,
    pages;

mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache')
app.set('views', `${path.resolve()}/views/pages`);
app.use(express.static('public'));
app.use(express.json());
app.use(authRouter);

const cookieToObject = (cookie) => {
    if (cookie === undefined) {
        return {};
    }

    // hacky ...
    let arr = [],
        res = '{';
    cookie.replace(/([^\s,=]+)=([^,]+)(?=,|$)/g, ($0, key, value) => {
        arr.push('"' + key + '":"' + value + '"');
    });
    res += arr.join(",") + "}";

    return JSON.parse(res);
}

const copyright = `© ${new Date().getFullYear()}`

app.get('/', (req, res) => {
    const cookie = cookieToObject(req.headers.cookie);

    if (cookie.auth !== 'true') {
        return res.render('signin', {
            "title": "Login",
            "css": "../assets/css/signin.css",
            "copyright": copyright,
        });
    }

    res.render('home', {
        "css": "../assets/css/dashboard.css",
        "nav": pages
    });
});

app.get('/:page', (req, res) => {
    const slug = req.params.page;

    const cookie = cookieToObject(req.headers.cookie);

    if (cookie.auth !== 'true') {
        return res.render('signin', {
            "title": "Login",
            "css": "../assets/css/signin.css",
            "copyright": copyright,
        });
    }

    pages.forEach(page => {
        page.active = false;
        if ("/" + slug === page.slug) {
            currentPageId = page.id;
            page.active = true;
        }
    })

    if (currentPageId !== undefined) {
        const post = posts.find(el => el.id === currentPageId)

        const converter = new showdown.Converter({extensions: prettify});

        const window = new JSDOM('').window;
        const purify = DOMPurify(window);

        post.html = purify.sanitize(converter.makeHtml(post.md));

        res.render('dashboard', {
            "css": "../assets/css/dashboard.css",
            "data": post,
            "nav": pages,
        });
    } else {
        res
            .status(404)
            .render('404', {
                "css": "../assets/css/dashboard.css",
                "data": [{"title": "Page not found"}],
                "nav": pages,
            });
    }
});

app.get("/api/pages", (req, res) => {
    initState();

    res.send({
        data: {
            pages
        }
    });
});

app.post("/api/posts", (req, res) => {
    posts.find(el => el.id === +req.body.id).md = req.body.md

    res.send({
        data: {
            posts
        }
    });
});

app.post("/api/pages", (req, res) => {
    const body = req.body;
    const nextId = pages.sort((a, b) => a.id - b.id).at(-1).id + 1;

    pages.push({
        id: nextId,
        title: body.title,
        slug: '/' + body.slug,
    })

    posts.push({
        id: nextId,
        title: body.title,
        md: ''
    })

    res.send({
        data: {
            pages
        }
    });
});

app.put("/api/pages/:id", (req, res) => {
    const page = pages.find(el => el.id === +req.params.id)

    page.slug = `/${req.body.slug}`
    page.title = req.body.pageTitle

    const post = posts.find(el => el.id === +req.params.id)
    post.title = req.body.postTitle

    res.send({
        data: {
            page
        }
    });
});

app.delete("/api/pages/:id", (req, res) => {
    pages = pages.filter(obj => obj.id !== +req.params.id);
    posts = posts.filter(obj => obj.id !== +req.params.id)

    res.send({
        data: {
            pages
        }
    });
});

app.listen(process.env.PORT, () => {
    initState();

    console.log('Listening on port', PORT);
});

const initState = () => {
    posts = [{
        "id": 1, "title": "Basics", "md": fs.readFileSync('views/md/basics.md').toString(),
    }, {
        "id": 2, "title": "Strings", "md": fs.readFileSync('views/md/strings.md').toString(),
    }, {
        "id": 3, "title": "Objects", "md": fs.readFileSync('views/md/objects.md').toString(),
    }, {
        "id": 4, "title": "Arrays", "md": fs.readFileSync('views/md/arrays.md').toString(),
    }, {
        "id": 5, "title": "Functions", "md": fs.readFileSync('views/md/functions.md').toString(),
    }, {
        "id": 6, "title": "Type coercion", "md": fs.readFileSync('views/md/type-coercion.md').toString(),
    }, {
        "id": 7, "title": "Variables", "md": fs.readFileSync('views/md/variables.md').toString(),
    }, {
        "id": 8, "title": "Array functions", "md": fs.readFileSync('views/md/array-functions.md').toString(),
    }, {
        "id": 9, "title": "Array functions", "md": fs.readFileSync('views/md/tools.md').toString()
    }, {
        "id": 10, "title": "REST API", "md": fs.readFileSync('views/md/rest-api.md').toString()
    }];

    pages = [{
        "id": 1, "title": "Basics", "slug": "/basics",
    }, {
        "id": 2, "title": "Strings", "slug": "/strings",
    }, {
        "id": 3, "title": "Objects", "slug": "/objects",
    }, {
        "id": 4, "title": "Arrays", "slug": "/arrays",
    }, {
        "id": 5, "title": "Functions", "slug": "/functions",
    }, {
        "id": 6, "title": "Type coercion", "slug": "/type-coercion",
    }, {
        "id": 7, "title": "Variables", "slug": "/variables",
    }, {
        "id": 8, "title": "Array functions", "slug": "/array-functions",
    }, {
        "id": 9, "title": "Tools", "slug": "/tools",
    }, {
        "id": 10, "title": "REST API", "slug": "/rest-api",
    }];
}