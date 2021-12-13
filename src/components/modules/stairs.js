/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { Container } from 'pixi.js';
import { OFFSET, STAIRS_POSITION_X, STAIRS_POSITION_Y } from '../constants/constants';
import { fadeIn, dropDown } from './animations';
import createSprite from '../helpers/createSprite';

export const oldStairs = createSprite('stairs/stairs-0.png');
export const newStairs = [
  createSprite('stairs/stairs-1.png'),
  createSprite('stairs/stairs-2.png'),
  createSprite('stairs/stairs-3.png'),
];

export const stairsInit = () => {
  const container = new Container();
  oldStairs.position.set(835, 55 - OFFSET);
  container.addChild(oldStairs);

  dropDown(oldStairs, 55);

  const init = (stairs) => {
    stairs.position.set(STAIRS_POSITION_X, STAIRS_POSITION_Y);
    stairs.visible = false;
    container.addChild(stairs);

    fadeIn(stairs);
    dropDown(stairs, STAIRS_POSITION_Y);
  };

  newStairs.forEach(init);

  return container;
};
