import jwt from 'jsonwebtoken';

const { sign } = jwt;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

function generateToken(user){

    return sign({data: user}, PRIVATE_KEY, {expiresIn: '1h'});

}

export default generateToken;