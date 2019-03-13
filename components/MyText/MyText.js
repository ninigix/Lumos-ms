import React from 'react';
import {Text} from 'react-native';

const MyText = ({textStyle, text}) => (
    <Text style={{...textStyle, fontFamily: 'raleway-light'}}>{text}</Text>
);

export default MyText;