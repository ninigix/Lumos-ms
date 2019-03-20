import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {Button} from "react-native-elements";


const TestComponent = ({lightSwitches, getLightSwitches}) => (
    <View><Text>test component {lightSwitches}</Text>
    <Button onPress={getLightSwitches}/>
    </View>
);

export default TestComponent;