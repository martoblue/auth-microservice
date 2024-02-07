import User, { IUser } from '../models/User';
import { sign, verify } from 'jsonwebtoken';
import * as argon2 from 'argon2';

export default class AuthService {
  // registrar
  async register(username: string, password: string, role: string): Promise<IUser> {
    const user = new User({ username, password, role });
    await user.save();
    return user;
  }

  // authenticate

  // generate token

  generateToken(user: IUser): string {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET env variable not set');
    }
    return sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  }

  // verifytoken
}
