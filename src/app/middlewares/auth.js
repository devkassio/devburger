import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

function authMiddleware(req, res, next) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    const token = authToken.split(' ').at(1);

    try {
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                throw new Error('Token invalid');
            }
            req.userId = decoded.id;
            req.userName = decoded.name;

            return next();

        });
        // eslint-disable-next-line no-unused-vars
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });

    }
}

export default authMiddleware;