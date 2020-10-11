import express from 'express';
import sequelizePkg from 'sequelize';
const { Sequelize } = sequelizePkg;

import { loadModels } from './src/models.js';

const DB_FILE = 'dev.db';
const HTTP_PORT = 3000;



async function setupDB() {
  const sequelize = new Sequelize(`sqlite:${DB_FILE}`);
  loadModels(sequelize);
  await sequelize.sync();
  return sequelize;
}

async function loadTestData(sequelize) {
  // first level categories
  // no parent categoryId is specified
  await sequelize.models.Category.create({
    name: 'Bus station',
  });
  await sequelize.models.Category.create({
    name: 'Medical Center',
  });
  const rest = await sequelize.models.Category.create({
    name: 'Restaurant',
  });

  const payForFood = await sequelize.models.Category.create({
    name: 'Pay for food',
    ParentCategoryId: rest.id,
  });

  const card = await sequelize.models.Card.create({
    CategoryId: payForFood.id
  });

  await sequelize.models.Section.create({
    englishText: 'Can I get a check?',
    russianText: 'Могу я получить чек?',
    phoneticText: 'mogu ya poluchit\' check?',
    CardId: card.id,
  });
  await sequelize.models.Section.create({
    englishText: 'Sure, do you want anything for takeaway?',
    russianText: 'Конечно, хотите что-нибудь на вынос?',
    phoneticText: 'Konechno, khotite chto-nibud\' na vynos?',
    CardId: card.id,
  });
}

// TODO: better to rewrite function to use async/await
// API for ExpressJS, for consistency
function startHttpServer(sequelize) {
  const app = express();

  // this request returns all cards that we have in database
  app.get('/cards.json', async (req, res) => {
    const cards = await sequelize.models.Card.findAll({});
    const jsonCards = [];
    for (const i in cards) {
      const json = await cards[i].toJSON();
      jsonCards.push(json);
    }
    // console.log(JSON.stringify(jsonCards));
    res.type('json');
    res.send(JSON.stringify(jsonCards));
  });

  app.listen(HTTP_PORT, () => {
    console.log(`InnoRussian app is listening at http://localhost:${HTTP_PORT}`)
  });
}

async function main() {
  const sequelize = await setupDB();
  await loadTestData(sequelize);
  startHttpServer(sequelize);
}

main();
