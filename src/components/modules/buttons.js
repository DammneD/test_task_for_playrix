/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { Container } from 'pixi.js';
import { getContainer } from './finalStage';
import { createStairsButton, resetActive, setActive } from './stairsButtons';
import { animationJumping, fadeIn } from './animations';
import { newStairs, oldStairs } from './stairs';
import createSprite from '../helpers/createSprite';
import {
  OFFSET,
  STAIRS_POSITION_Y,
  STAIRS_BUTTON_POSITION_Y,
  STAIRS_BUTTON_LENGTH,
} from '../constants/constants';

let buttonX = 830;
let timeCounter = 0;

const buttonsInit = () => {
  const container = new Container();
  const okButton = createSprite('ok-button.png');
  const hammerButton = createSprite('hammer.png');
  const stairsButtons = [
    createStairsButton('stairsBtn-1.png'),
    createStairsButton('stairsBtn-2.png'),
    createStairsButton('stairsBtn-3.png'),
  ];
  let selectedIndex = null;

  const setStairsDefault = (index) => {
    const activeStairs = newStairs[index];

    activeStairs.y = STAIRS_POSITION_Y - OFFSET;
    activeStairs.alpha = 0;
    activeStairs.visible = true;
  };

  const setOkButtonPosition = (stairsButton) => {
    const {
      x,
      y,
      width,
      height,
    } = stairsButton;

    okButton.x = x - ((okButton.width - width) / 2);
    okButton.y = y + height - 25;
    okButton.alpha = 0;
    okButton.visible = true;
  };

  const resetStairsButton = (button) => {
    container.removeChild(button);
  };

  const handleClickOkButton = () => {
    const finalStage = getContainer();
    finalStage.alpha = 0;
    finalStage.visible = true;
    okButton.visible = false;
    stairsButtons.forEach(resetStairsButton);
    hammerButton.visible = true;
    buttonX = 830;
    timeCounter = 0;
  };

  const okButtonInit = () => {
    okButton.interactive = true;
    okButton.buttonMode = true;
    okButton.visible = false;

    okButton.on('pointerdown', () => handleClickOkButton());
    fadeIn(okButton);

    container.addChild(okButton);
  };

  const handleClickStairsButton = (stairsButton, index) => {
    if (selectedIndex !== index) {
      selectedIndex = index;

      stairsButtons.forEach(resetActive);
      setActive(stairsButton);

      newStairs.forEach((stairs) => {
        stairs.visible = false;
      });
      oldStairs.visible = false;

      okButtonInit();
      setStairsDefault(index);
      setOkButtonPosition(stairsButton);
    }
  };

  const initStairsButton = (button, index) => {
    button.position.set(buttonX, STAIRS_BUTTON_POSITION_Y);

    timeCounter += 100;
    buttonX += STAIRS_BUTTON_LENGTH;
    button.on('pointerdown', () => handleClickStairsButton(button, index));

    setTimeout(() => {
      button.alpha = 0;
      container.addChild(button);
    }, timeCounter);
  };

  const hammerButtonInit = () => {
    hammerButton.position.set(1100, 300);
    hammerButton.alpha = 0;
    hammerButton.interactive = true;
    hammerButton.buttonMode = true;

    hammerButton.on('pointerdown', () => {
      stairsButtons.forEach(initStairsButton);
      hammerButton.visible = false;
    });

    animationJumping(hammerButton);
    fadeIn(hammerButton);

    container.addChild(hammerButton);
  };

  setTimeout(() => {
    hammerButtonInit();
  }, 2000);

  return container;
};

export default buttonsInit;
