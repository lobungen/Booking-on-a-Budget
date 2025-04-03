import { DataTypes, Model } from 'sequelize';
import sequelize from './db';

class Excursion extends Model {
  public id!: number;
  public title!: string;
  public location!: string;
  public description!: string;
  public price!: number;
}

Excursion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Excursion',
    tableName: 'excursions',
  }
);

export default Excursion;