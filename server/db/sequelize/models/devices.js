export default (sequelize, DataTypes) =>
  sequelize.define('Device', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    os: DataTypes.STRING,
    version: DataTypes.STRING,
    bookedBy:DataTypes.STRING,
    available: DataTypes.Boolean,
    date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
    }
  }, {
    timestamps: false
  });
