import createSprite from '../helpers/createSprite';

const logoInit = () => {
  const logo = createSprite('logo.png');
  logo.position.set(40, 10);

  return logo;
};

export default logoInit;
