import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Circle from './circle';

class CircleUser extends Model {}

CircleUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE', // Delete association if user is deleted
      onUpdate: 'CASCADE',
    },
    circle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'circles',
        key: 'id',
      },
      onDelete: 'CASCADE', // Delete association if circle is deleted
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'CircleUser',
    tableName: 'circle_users',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }



);

//Define association b.w the circleuser to circle.
  CircleUser.belongsTo(Circle, {
    foreignKey: 'circle_id',
    as: 'circle',
  });


export default CircleUser;
