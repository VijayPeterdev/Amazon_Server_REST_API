const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWTKEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid! ✖️ ");

      req.user = user;

      next();
    });
  } else {
    return res.status(401).json("You are not Authenticated ! 🛡️ ");
  }
};


// Both User and Admin Verification Check

const verifyandAuthCheck = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not Allowed to Do that !❌");
    }
  });
};


// admin Verification check

const verifyAdminCheck = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not Allowed to Do that !❌");
      }
    });
  };

module.exports = { verifyToken, verifyandAuthCheck ,verifyAdminCheck};
