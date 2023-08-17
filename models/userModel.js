const knex = require('../knexfile');
const db = require('knex')(knex.development);
const bcrypt = require('bcryptjs');

class User {
  
  static async create(data, roleId) {
    const status = true;
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    // Prepare the user data
    const newUser = {
      nama: data.nama,
      email: data.email,
      password: hashedPassword,
      status,
    };
    
    // Use a transaction to ensure that the user and the role association are created atomically
    return db.transaction(async trx => {
      const [user] = await trx('users').insert(newUser).returning('*');
      const userRole = {
        user_id: user.id,
        role_id: roleId
      };
      
      await trx('user_roles').insert(userRole);
      
      return user;
    });
  }

}

module.exports = User;
