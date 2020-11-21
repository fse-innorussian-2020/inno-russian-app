import fs from 'fs';

import {} from './models.js';

async function ensureCategory(sequelize, categories) {
  let parentId = null;
  const items = categories.slice().reverse();
  for (const { name } of items) {
    const category = await sequelize.models.Category.findOne({ where: { name, ParentCategoryId: parentId } });
    if (category == null) {
      console.log("category is absent, create", { name, parentId });
      const category1 = await sequelize.models.Category.create({ name, ParentCategoryId: parentId });
      parentId = category1.id;
    } else {
      console.log("category exists", { name, parentId });
      parentId = category.id;
    }
  }
  return parentId;
}

async function loadCategories(sequelize, cards) {
  const result = {};
  for (const { categories } of cards) {
    const id = await ensureCategory(sequelize, categories);
    result[[categories[0].name]] = id;
  }
  return result;
}

export default async function loadTestData(sequelize) {
  const data = fs.readFileSync('./data/testdata.json');
  const cards = JSON.parse(data);

  // {"name": id}
  const catIds = await loadCategories(sequelize, cards);

  for (const { categories, sections } of cards) {
    const categoryId = catIds[categories[0].name];
    const card = await sequelize.models.Card.create({ CategoryId: categoryId });

    for (const section of sections) {
      const { englishText, phoneticText, russianText } = section;
      await sequelize.models.Section.create({
        englishText,
        russianText,
        phoneticText,
        CardId: card.id,
      });
    }
  }

}



// export default async function loadTestData(sequelize) {
//   const data = fs.readFileSync('./data/testdata.json');
//   const sections = JSON.parse(data);
//
//   const card = await sequelize.models.Card.create({});
//
//   for (const section of sections) {
//     const { englishText, phoneticText, russianText } = section;
//     await sequelize.models.Section.create({
//       englishText,
//       russianText,
//       phoneticText,
//       CardId: card.id,
//     });
//   }
// }
