const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    id: user.id,
    name: user.nama,
    email: user.email
  };
  
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: '1h' };
  
  return jwt.sign(payload, secret, options);
}

module.exports = {
  generateToken
};
