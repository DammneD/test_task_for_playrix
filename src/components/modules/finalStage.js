/* eslint-disable import/no-cycle */
import { Container, Graphics } from 'pixi.js';
import createSprite from '../helpers/createSprite';
import { animationScale, fadeIn } from './animations';
import {
  WIDTH,
  HEIGHT,
  BANNER_POSITION_Y,
  CONTINUE_BUTTON_POSITION_Y,
} from '../constants/constants';

let container;

export const finalStageInit = () => {
  container = new Container();
  container.interactive = true;
  container.visible = false;

  const createOverlay = () => {
    const overlay = new Graphics();
    overlay.beginFill(0x909090);
    overlay.drawRect(0, 0, WIDTH, HEIGHT);
    overlay.alpha = 0.3;
    overlay.endFill();
    container.addChild(overlay);
  };

  const createBanner = () => {
    const banner = createSprite('banner.png');
    banner.x = WIDTH / 2;
    banner.y = BANNER_POSITION_Y;
    banner.anchor.set(0.5, 0);

    container.addChild(banner);
  };

  const createContinueButton = () => {
    const continueButton = createSprite('continue-button.png');
    continueButton.x = WIDTH / 2;
    continueButton.y = CONTINUE_BUTTON_POSITION_Y;
    continueButton.anchor.set(0.5, 0);
    continueButton.interactive = true;
    continueButton.buttonMode = true;

    continueButton.on('pointerdown', () => {
      window.open('https://play.google.com/store/apps/details?id=com.playrix.gardenscapes&hl=ru&gl=US', '_blank');
      container.visible = false;
    });

    animationScale(continueButton);

    container.addChild(continueButton);
  };

  createOverlay();
  createBanner();
  createContinueButton();
  fadeIn(container);

  return container;
};

export const getContainer = () => container;
