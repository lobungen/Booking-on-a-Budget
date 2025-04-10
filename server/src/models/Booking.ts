import { DataTypes, Model } from 'sequelize';
import sequelize from './db';
import { truncate } from 'fs';

class Booking extends Model {
  public id!: number;
  public userId!: number;
  public userName!: string;
  public userEmail!: string;
  public spotName!: string;
  public reservationDate!: string;
  public bookingDate!: string;
  public spending!: string;
  public excursionId!: number; // New foreign key to excursions
}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spotName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reservationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    bookingDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    spending: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    excursionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'excursions',
        key: 'id',
      },
      onDelete: 'CASCADE',  // If the excursion is deleted, bookings with this excursionId will be deleted too
    },
  },
  {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
    timestamps: false, // Turn off timestamps if not needed
  }
);

export default Booking;
