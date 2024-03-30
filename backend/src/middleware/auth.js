const jwt = require('jsonwebtoken');

const authenticate = (req,res,next) =>{
    
    const token = req.header('Authorization');
    console.log(token);

    if(!token){
        
        console.log('test');
        return res.status(401).send('Authentication failed:invalid token ')
    }
    try {
        console.log(token);
        const tokenData = token.split(' ')[1];
        console.log("testing ",tokenData);
        const decodedToken = jwt.verify(tokenData,process.env.JWT_SECRET);
        req.userId=decodedToken._id;
        console.log(req.userId);
        next();
    } catch (error) {
        return res.status(401).send('Authentication failed:invalid token ')

    }
}
module.exports = authenticate;