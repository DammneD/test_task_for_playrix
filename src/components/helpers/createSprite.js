import * as PIXI from 'pixi.js';
import { PATH } from '../constants/constants';

class Sprite extends PIXI.Sprite {
  constructor(texture, id) {
    super(texture);
    this.id = id;
  }
}

const createSprite = (imageName, id = null) => new Sprite(PIXI.Texture.from(`${PATH}${imageName}`), id);

export default createSprite;
