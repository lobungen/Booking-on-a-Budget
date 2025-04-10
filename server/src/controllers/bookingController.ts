import Booking from '../models/Booking';
import { Request, Response } from 'express';

interface BookingRequest {
  userId: string;
  userName: string;
  userEmail: string;
  spotName: string;
  reservationDate: string | Date;
  spending: number;
  excursionId: string;
}

export const createBooking = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { userId, userName, userEmail, spotName, reservationDate, spending, excursionId } = req.body;

    if (!userId || !spotName || !reservationDate || !spending || !excursionId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBooking = await Booking.create({
      userId,
      userName,
      userEmail,
      spotName,
      reservationDate,
      spending,
      excursionId,
    });

    return res.status(201).json(newBooking);
  } catch (err) {
    console.error('Booking error:', err);
    return res.status(500).json({ message: 'Server error creating booking' });
  }
};

export const getBookingsByUser = async (req: Request, res: Response): Promise<Response> => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const bookings = await Booking.findAll({
      where: { userId },
      order: [['reservationDate', 'DESC']],
    });

    return res.json(bookings);
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ message: 'Failed to fetch bookings' });
  }
};
