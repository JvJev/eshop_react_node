import { JsonWebTokenError } from 'jsonwebtoken';

export const generateToken = (user) => {
  return JsonWebTokenError.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
