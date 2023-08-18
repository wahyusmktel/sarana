// roleMiddleware.js
module.exports = function(roles) {
    return function(req, res, next) {
      const { user } = req;
      
      if (roles.includes(user.role)) {
        next();
      } else {
        res.status(403).json({ message: 'Forbidden: You do not have permission' });
      }
    }
  }
  