import sequelizePkg from 'sequelize';

import { DB_FILE } from './src/config.js';
import { loadModels } from './src/models.js';
import startHttpServer from './src/http_server.js';

const { Sequelize } = sequelizePkg;

async function setupDB() {
  const sequelize = new Sequelize(`sqlite:${DB_FILE}`);
  loadModels(sequelize);
  await sequelize.sync();
  return sequelize;
}

// async function loadTestData(sequelize) {
//   // first level categories
//   // no parent categoryId is specified
//   await sequelize.models.Category.create({
//     name: 'Bus station',
//   });
//   await sequelize.models.Category.create({
//     name: 'Medical Center',
//   });
//   const rest = await sequelize.models.Category.create({
//     name: 'Restaurant',
//   });
//
//   const payForFood = await sequelize.models.Category.create({
//     name: 'Pay for food',
//     ParentCategoryId: rest.id,
//   });
//
//   const card = await sequelize.models.Card.create({
//     CategoryId: payForFood.id,
//   });
//
//   await sequelize.models.Section.create({
//     englishText: 'Can I get a check?',
//     russianText: 'Могу я получить чек?',
//     phoneticText: 'mogu ya poluchit\' check?',
//     CardId: card.id,
//   });
//   await sequelize.models.Section.create({
//     englishText: 'Sure, do you want anything for takeaway?',
//     russianText: 'Конечно, хотите что-нибудь на вынос?',
//     phoneticText: 'Konechno, khotite chto-nibud\' na vynos?',
//     CardId: card.id,
//   });
// }

async function main() {
  const sequelize = await setupDB();
  // await loadTestData(sequelize);
  startHttpServer(sequelize);
}

main();
