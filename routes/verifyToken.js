// import jwt from "jsonwebtoken";

// const verifyToken = (req, res, next) => {
//   const authHeaders = req.headers.token;

//   if (authHeaders) {
//     const token = authHeaders.split(" ")[1];
//     jwt.verify(token, process.env.JWT_KEY, (err, user) => {
//       if (err) res.status(403).json("token is not valid");
//       res.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json("authentication failed");
//   }
// };

// export default verifyToken;
