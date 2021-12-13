/* eslint-disable import/no-cycle */
import { Container } from 'pixi.js';
import { DECOR, OFFSET } from '../constants/constants';
import { fadeIn, dropDown } from './animations';
import createSprite from '../helpers/createSprite';

let timeCounter = 200;

const decorationsInit = () => {
  const decorContainer = new Container();

  Object.values(DECOR).forEach((item) => {
    const decor = createSprite(item.name);
    decor.position.set(item.x, item.y - OFFSET);
    decor.alpha = 0;

    setTimeout(() => {
      fadeIn(decor);
      dropDown(decor, item.y);
    }, timeCounter);

    timeCounter += 100;

    decorContainer.addChild(decor);
  });

  return decorContainer;
};

export default decorationsInit;
