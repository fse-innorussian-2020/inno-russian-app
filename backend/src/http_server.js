import express from 'express';
import bodyParser from 'body-parser';

import { HTTP_PORT } from './config.js';

// TODO: better to rewrite function to use async/await
// API for ExpressJS, for consistency
export default function startHttpServer(sequelize) {
  const app = express();
  app.use(bodyParser());

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

  // can be tested from console this way:
  // curl -X POST -H "Content-Type: application/json" -d '{"sections": [{"russianText": "Меня зовут…","phoneticText": "[minya zavoot]","englishText": "My name is…"},{"russianText": "Как вас зовут?","phoneticText": "[kak vas zavoot]","englishText": "What is your name? (formal, when speaking to an older person)"}]}' http://localhost:3000/cards.json
  app.post('/cards.json', async (req, res) => {
    const card = await sequelize.models.Card.create({});
    const { sections } = req.body;

    for (const section of sections) {
      const { englishText, phoneticText, russianText } = section;
      await sequelize.models.Section.create({
        englishText,
        russianText,
        phoneticText,
        CardId: card.id,
      });
    }

    res.send(JSON.stringify({ id: card.id }));
  });

  app.listen(HTTP_PORT, () => {
    console.log(`InnoRussian app is listening at http://localhost:${HTTP_PORT}`);
  });
}
