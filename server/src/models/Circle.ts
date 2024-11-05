import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import CircleUser from './CircleUser';


class Circle extends Model {}

Circle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  
      
    },
  
  {
    sequelize,
    modelName: 'Circle',
    tableName: 'circles',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }

  

);



export default Circle;
