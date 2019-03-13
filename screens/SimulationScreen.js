import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Button} from "react-native-elements";

export default class SimulationScreen extends React.Component {
    render() {
        return <View style={styles.container}>
            <Text>Here you will be able to start simulating presence in your house/flat etc.</Text>

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
    }
});

