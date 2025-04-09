// src/controllers/authController.ts
import { RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export const register: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      res.status(400).json({ error: 'Name, email, and password are required' });
      return;
    }

    const existingUser = await User.findOne({ where: { email } });
    console.log('Existing user:', existingUser);
    if (existingUser) {
      res.status(409).json({ error: 'Email already in use' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '2h' });

    res.status(201).json({
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
      token,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Register error:', error.message, error.stack);
    } else {
      console.error('Register error:', error);
    }
    res.status(500).json({ error: 'Server error' });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '2h' });

    res.status(200).json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
    return;
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
    return;
    res.status(500).json({ error: 'Server error' });
  }
};
