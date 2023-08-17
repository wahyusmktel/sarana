const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');
const knex = require('../knexfile');
const db = require('knex')(knex.development);

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await db('users').where({ email }).first();
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err });
  }
}

module.exports = {
  loginUser
};
