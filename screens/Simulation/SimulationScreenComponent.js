import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Button} from "react-native-elements";

import MyText from '../../components/MyText/MyText';

export default class SimulationScreenComponent extends React.Component {
    render() {
        return <View style={styles.container}>
            <Text style={styles.title}>Start simulation</Text>
            <MyText textStyle={{textAlign: 'justify'}}>Here you can choose dates when you want to simulate presence in the house. You can see the results
            and if you like them, just press a button to start simulation! Be careful - when the simulation is running
                you can't switch light via Lumos app.
            </MyText>
            <Button
                title="Clear button"
                type="clear"
            />
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16
    },
    title: {
        fontSize: 32,
        color: '#3B3B39',
        fontFamily: 'raleway-bold',
        textAlign: 'center',
        margin: 10
    },
});

