import jwt from "jsonwebtoken";

const secret = "jwt-key";

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, secret, {
      expiresIn: expiration,
    });
  },
  verifyToken: (token: string, callbackFn: jwt.VerifyCallback) => {
    jwt.verify(token, secret, callbackFn);
  },
};
