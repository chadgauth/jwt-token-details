import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { decodeToken } from './jwtHelper.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

app.get('/tokenDetails', (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(400).send({ auth: false, message: 'No token provided.' });
    }

    res.status(200).send(decodeToken(token));
});

app.get('/verifyToken', (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(400).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }

        res.status(200).send({ auth: true, message: 'Token is valid.' });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});

export default app;