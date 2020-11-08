import express from 'express';

import { HTTP_PORT } from './config.js';

// TODO: better to rewrite function to use async/await
// API for ExpressJS, for consistency
export default function startHttpServer(sequelize) {
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
    console.log(`InnoRussian app is listening at http://localhost:${HTTP_PORT}`);
  });
}
