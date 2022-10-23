import {Router} from "express";

const router = Router();

router.post("/api/auth/signin", (req, res) => {
    const body = req.body;
    const auth = body.email.endsWith('@kea.dk');

    const response = {
        auth: auth,
    }

    res.send(response);
});

export default router;
