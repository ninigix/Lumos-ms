import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import MyText from "../MyText/MyText";
import {Button} from "react-native-elements";
import {RkButton, RkChoice} from "react-native-ui-kitten";

// TODO: add icon
const SimulationComponent = ({date,  hour, roomName, isLightOn}) => {
    return (
        <View style={styles.dateComponentWrapper}>
            <View style={styles.dateComponentGrey}>
                <MyText isBold> {roomName} {isLightOn ? "Light on" : "Light off"}</MyText>
            </View>
            <View style={styles.dateComponentSideButton}>
                <MyText>{date}</MyText>
                <MyText>{hour}</MyText>
            </View>
        </View>)
};

export default SimulationComponent;

const styles = StyleSheet.create({
    dateComponentGrey: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    dateComponentSideButton: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: 'grey',
        minWidth: '15%',
    },
    dateComponentWrapper: {
        display: 'flex',
        height: 50,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
        margin: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});