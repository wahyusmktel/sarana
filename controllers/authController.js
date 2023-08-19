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

    // Ambil role user dari database
    const userRole = await db('user_roles')
      .join('roles', 'user_roles.role_id', 'roles.id')
      .where('user_roles.user_id', user.id)
      .select('roles.name as role')
      .first();
    
    const token = generateToken(user, userRole.role);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err });
  }
}

module.exports = {
  loginUser
};
