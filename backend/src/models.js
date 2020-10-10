import sequelizePkg from 'sequelize';
const { DataTypes } = sequelizePkg;

function loadModels(sequelize) {
  // More about model definition:
  // https://sequelize.org/master/manual/model-basics.html
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  });

  const Card = sequelize.define('Card', {
  });

  const Section = sequelize.define('Section', {
    englishText: DataTypes.STRING,
    russianText: DataTypes.STRING,
    phoneticText: DataTypes.STRING,
  });

  // Can read more about associations here:
  // https://sequelize.org/master/manual/assocs.html
  Section.belongsTo(Card);
  Card.hasMany(Section);
  // single card must have a category
  Card.belongsTo(Category);
  // category might be a subcategory
  Category.belongsTo(Category, { foreignKey: 'parentCategoryId' });
}

export {
  loadModels
};
