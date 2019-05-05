import React from 'react';
import {Text} from 'react-native';

const MyText = ({textStyle, isBold, children}) => (
    <Text style={{fontFamily: isBold ? 'raleway-bold' : 'raleway-light', ...textStyle}}>{children}</Text>
);

export default MyText;