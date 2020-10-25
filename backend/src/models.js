import sequelizePkg from 'sequelize';
const { DataTypes, Model } = sequelizePkg;

class Category extends Model {}
class Card extends Model {
  async toJSON() {
    const sections0 = await this.getSections();
    const sections1 = sections0.map(({ id, englishText, russianText, phoneticText }) => ({
      id, englishText, russianText, phoneticText
    }));


    const categories = [];
    const category0 = await this.getCategory();
    if (category0) {
      const { name: categoryName, id: categoryId } = category0;
      categories.push({ name: categoryName, id: categoryId });

      const parentCategory0 = await category0.getCategory();
      if (parentCategory0) {
        const { name: parentCategoryName, id: parentCategoryId } = parentCategory0;
        categories.push({ name: parentCategoryName, id: parentCategoryId });
      }
    }


    return {
      id: this.id,
      categories,
      sections: sections1,
    };
  }
}
class Section extends Model {}

function loadModels(sequelize) {
  // More about model definition:
  // https://sequelize.org/master/manual/model-basics.html
  Category.init({
    name: DataTypes.STRING,
  }, { sequelize });

  Card.init({}, { sequelize });

  Section.init({
    englishText: DataTypes.STRING,
    russianText: DataTypes.STRING,
    phoneticText: DataTypes.STRING,
  }, { sequelize });

  // Can read more about associations here:
  // https://sequelize.org/master/manual/assocs.html
  Section.belongsTo(Card);
  Card.hasMany(Section);
  // single card must have a category
  Card.belongsTo(Category);
  // category might be a subcategory
  Category.belongsTo(Category, { foreignKey: 'ParentCategoryId' });
}

export {
  loadModels
};
