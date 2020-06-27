import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const SIDE_MARGINS = 21;
const GRAY_BOX_DIMENSIONS = SCREEN_WIDTH / 4;

export {SCREEN_WIDTH, SCREEN_HEIGHT, SIDE_MARGINS, GRAY_BOX_DIMENSIONS};
