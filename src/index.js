/* eslint-disable import/no-cycle */
import * as PIXI from 'pixi.js';
import { SETUP } from './components/constants/constants';
import { stairsInit } from './components/modules/stairs';
import { finalStageInit } from './components/modules/finalStage';
import { fadeIn } from './components/modules/animations';
import createSprite from './components/helpers/createSprite';
import decorationsInit from './components/modules/decorations';
import plantInit from './components/modules/plant';
import buttonsInit from './components/modules/buttons';
import logoInit from './components/modules/logo';

// eslint-disable-next-line import/prefer-default-export
export const app = new PIXI.Application(SETUP);

document.body.appendChild(app.view);

app.stage.alpha = 0;
app.stage.addChild(createSprite('bg.jpg'));
app.stage.addChild(decorationsInit());
app.stage.addChild(stairsInit());
app.stage.addChild(plantInit());
app.stage.addChild(buttonsInit());
app.stage.addChild(finalStageInit());
app.stage.addChild(logoInit());

fadeIn(app.stage);
