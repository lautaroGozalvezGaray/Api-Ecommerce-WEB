import jwt from 'jsonwebtoken';
const { verify } = jwt;

export function auth(req, res, next) {

  const authHeader = req.session.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: 'not authenticated'
    });
  }
  
  const token = authHeader

  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  
  verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        error: 'not authorized'
      });
    }
    req.user = decoded.data;
    next();
  });
};

export function authChat(req, res, next) {

  const authHeader = req.session.authorization;

  if (!authHeader) {
    return res.render("../views/partials/errorLogin.hbs")
  }
  
  const token = authHeader

  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  
  verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.render("../views/partials/errorLogin.hbs")

    }
    req.user = decoded.data;
    next();
  });
};
   

export default {auth, authChat};