/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { app } from '../../index';

export const fadeIn = (element) => {
  app.ticker.add(() => {
    if (element.alpha < 1) {
      element.alpha += 0.1;
    }
  });
};

export const dropDown = (element, endPoint) => {
  if (!endPoint) {
    endPoint = element.y;
  }

  app.ticker.add(() => {
    if (element.y < endPoint) {
      element.y += 5;
    }
  });
};

export const animationJumping = (element) => {
  let animationSpeed = 0;

  app.ticker.add(() => {
    element.y += Math.sin(animationSpeed) * 0.5;
    animationSpeed += 0.15;
  });
};

export const animationScale = (element) => {
  let animationSpeed = 0;

  app.ticker.add(() => {
    element.scale.x += Math.sin(animationSpeed) * 0.005;
    element.scale.y += Math.sin(animationSpeed) * 0.005;
    animationSpeed += 0.15;
  });
};
