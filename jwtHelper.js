import jwt from 'jsonwebtoken';

const sanitizeToken = (token) => {
    const bearer = 'Bearer ';
    if (token.startsWith(bearer)) {
        return token.slice(bearer.length);
    }
    return token;
};

const decodeToken = (token) => {
    token = sanitizeToken(token);
    try {
        const decoded = jwt.decode(token, { complete: true });
        return decoded;
    } catch (err) {
        console.error('Error decoding token', err);
        return null;
    }
};

const verifySignature = (token, secret) => {
    token = sanitizeToken(token);
    try {
        const verified = jwt.verify(token, secret);
        return verified;
    } catch (err) {
        console.error('Error verifying token', err);
        return false;
    }
};

export { decodeToken, verifySignature };