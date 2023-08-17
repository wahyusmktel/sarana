const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    } else {
      req.user = decoded;
      next();
    }
  });
}

module.exports = {
  authenticate
};
