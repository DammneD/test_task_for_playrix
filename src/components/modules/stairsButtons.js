/* eslint-disable import/no-cycle */
import { Container } from 'pixi.js';
import createSprite from '../helpers/createSprite';
import { fadeIn } from './animations';

export const createStairsButton = (image) => {
  const button = new Container();
  const normalButton = createSprite('normal-button.png', 'normal');
  const activeButton = createSprite('active-button.png', 'active');
  const stairsTexture = createSprite(image, 'stairs');

  button.addChild(normalButton);
  button.addChild(activeButton);
  button.addChild(stairsTexture);
  button.interactive = true;
  button.buttonMode = true;
  activeButton.visible = false;

  fadeIn(button);

  return button;
};

export const resetActive = (container) => {
  const normalButton = container.children.find((item) => item.id === 'normal');
  const activeButton = container.children.find((item) => item.id === 'active');

  normalButton.visible = true;
  activeButton.visible = false;
};

export const setActive = (container) => {
  const activeButton = container.children.find((item) => item.id === 'active');

  activeButton.visible = true;
};
