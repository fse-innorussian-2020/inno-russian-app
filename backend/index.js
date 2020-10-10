import express from 'express';
import sequelizePkg from 'sequelize';
const { Sequelize } = sequelizePkg;

import { loadModels } from './src/models.js';

const DB_FILE = 'dev.db';



(async () => {
  const sequelize = new Sequelize(`sqlite:${DB_FILE}`);
  loadModels(sequelize);
  await sequelize.sync();

  const jane = await sequelize.models.User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });

  console.log(jane.toJSON());
})();




const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
