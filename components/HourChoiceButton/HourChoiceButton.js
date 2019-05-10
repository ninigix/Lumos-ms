import React from "react";
import {StyleSheet, View, TouchableOpacity, Image} from "react-native";

import MyText from "../MyText/MyText";
import CardChoice from '../CardChoice/CardChoice';

// TODO: add icon
const HourChoiceButton = ({chosenDay, chosenHour, handleHourSelect}) => {
    const formattedDate = chosenDay && new Date(chosenDay);
    const stringMonth =
        chosenDay && formattedDate.toLocaleString("en-us", {month: "short"});
    const numberDay = chosenDay && formattedDate.getDate();

    const renderDate = () => (
        <TouchableOpacity
            onPress={handleHourSelect}
            style={styles.wrapper}
        >
            <View style={styles.iconButton}>
            <Image
                style={styles.icon}
                source={require('../../assets/images/time.png')}
            />
            </View>
            <MyText isBold textStyle={{fontSize: 16}}> {chosenHour ? "Edit hour" : "Choose hour"}</MyText>
        </TouchableOpacity>
    );

    const renderButton = () => (
        <View style={styles.dateComponentSideButton}>
            <MyText textStyle={{fontSize: 16}}>  {stringMonth} {numberDay}</MyText>
            {chosenHour && <MyText isBold textStyle={{fontSize: 16}}> {chosenHour} </MyText>}
        </View >
    );

    return (
        <CardChoice leftComponent={renderDate()} rightComponent={renderButton()}/>
    );
};

export default HourChoiceButton;

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    iconButton: {
      height: 40,
      width: 40,
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#ffbf00'
    },
    icon: {
        width: 30, height: 30
    },
    dateComponentSideButton: {
        flex: 1,
        backgroundColor: "#EBEBE4",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
});
