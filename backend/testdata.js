import fs from 'fs';

import {} from './src/models.js';

export default async function loadTestData(sequelize) {
  const data = fs.readFileSync('testdata.json');
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
