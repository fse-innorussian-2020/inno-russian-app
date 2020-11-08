import fs from 'fs';

import {} from './models.js';

export default async function loadTestData(sequelize) {
  const data = fs.readFileSync('./data/testdata.json');
  const sections = JSON.parse(data);

  const card = await sequelize.models.Card.create({});

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
