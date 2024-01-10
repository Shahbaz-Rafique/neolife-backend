const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
    var token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'hsjkdhaskdhajsdhsdhaskdhakjdhjsmnb4nm5b3247236ehga', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'failed' });
        } else {
            return res.status(200).json({ message: 'succeed' });
        }
    });
}

module.exports = { 
    validateToken, 
};


