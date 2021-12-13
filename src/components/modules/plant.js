/* eslint-disable import/no-cycle */
import { Container } from 'pixi.js';
import { OFFSET } from '../constants/constants';
import { fadeIn, dropDown } from './animations';
import createSprite from '../helpers/createSprite';

const plantInit = () => {
  const container = new Container();

  const plant = createSprite('plant-2.png');
  plant.position.set(1130, 445 - OFFSET);
  plant.alpha = 0;

  setTimeout(() => {
    fadeIn(plant);
    dropDown(plant, 445);
  }, 200);

  container.addChild(plant);

  return container;
};

export default plantInit;
