import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import MyText from "../MyText/MyText";
import {Button} from "react-native-elements";
import {RkButton} from "react-native-ui-kitten";

// TODO: add icon
const HourChoiceButton = ({chosenDay, chosenHour, handleHourSelect}) => {
    const formattedDate = chosenDay && new Date(chosenDay);
    const stringMonth = chosenDay && formattedDate.toLocaleString('en-us', {month: 'short'});
    const numberDay = chosenDay && formattedDate.getDate();
    const renderDate = () => (
        <MyText isBold>
            {stringMonth} {numberDay}{chosenHour && `, ${chosenHour}`}
        </MyText>
    );

    return (
        <View style={styles.dateComponentWrapper}>
            <View style={styles.dateComponentGrey}>
                {renderDate()}
            </View>
            <View style={styles.dateComponentButton}>
                <TouchableOpacity style={styles.dateComponentSideButton} onPress={handleHourSelect}><MyText
                    isBold> {chosenHour ? "Edit" : "Choose hour"}</MyText></TouchableOpacity>
            </View>
        </View>)
};

export default HourChoiceButton;

const styles = StyleSheet.create({
    dateComponentChosenHour: {
        fontSize: 22
    },
    dateComponentGrey: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateComponentSideButton: {
        flex: 1,
        padding: 15,
        backgroundColor: 'deeppink',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    dateComponentWrapper: {
        display: 'flex',
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