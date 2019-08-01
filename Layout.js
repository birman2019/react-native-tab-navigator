'use strict';

import { Dimensions, Platform, PixelRatio } from 'react-native';
import { bottomTabBarHeight } from "../../app/utils/Scale";

export default {
  pixel: 1 / PixelRatio.get(),
  tabBarHeight:  bottomTabBarHeight,
};
