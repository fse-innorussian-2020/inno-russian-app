#!/bin/env node
import sequelizePkg from 'sequelize';

import { DB_FILE } from '../src/config.js';
import { loadModels } from '../src/models.js';

import loadTestData from '../testdata.js';

const { Sequelize } = sequelizePkg;

async function setupDB() {
  const sequelize = new Sequelize(`sqlite:${DB_FILE}`);
  loadModels(sequelize);
  await sequelize.sync();
  return sequelize;
}

async function main() {
  const sequelize = await setupDB();
  await loadTestData(sequelize);
}

main();
