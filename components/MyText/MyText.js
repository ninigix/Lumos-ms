import React from 'react';
import {Text} from 'react-native';

const MyText = ({textStyle, children}) => (
    <Text style={{fontFamily: 'raleway-light', ...textStyle}}>{children}</Text>
);

export default MyText;