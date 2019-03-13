import {Dimensions, StyleSheet} from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    title: {
        fontSize: 100,
        color: '#3B3B39',
        fontFamily: 'arkipelago',
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
        flexDirection: 'column'
    },
    fullScreen: {
        width: deviceWidth,
        height: deviceHeight,
        flexDirection: 'column'
    }
});

export default styles;