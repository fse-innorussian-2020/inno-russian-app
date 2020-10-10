import sequelizePkg from 'sequelize';
const { DataTypes } = sequelizePkg;

function loadModels(sequelize) {
  sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {
  });
}

export {
  loadModels
};
