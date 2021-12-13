import createSprite from '../helpers/createSprite';
import { LOGO_POSITION_X, LOGO_POSITION_Y } from '../constants/constants';

const logoInit = () => {
  const logo = createSprite('logo.png');
  logo.position.set(LOGO_POSITION_X, LOGO_POSITION_Y);

  return logo;
};

export default logoInit;
