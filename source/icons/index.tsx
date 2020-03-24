/**
 * Icon icon set component.
 * Usage: <Icon name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/dist/lib/create-icon-set';
const glyphMap = {};

const iconSet = createIconSet(glyphMap, 'remixicon', '../../node_modules/remixicon/fonts/remixicon.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

