import {StyleSheet} from "react-native";

export default StyleSheet.create({
    leftWrapper: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    rightWrapper: {
        flex: 1,
        display: "flex",
        minWidth: "15%"
    },
    wrapper: {
        display: "flex",
        height: 70,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "#d6d7da",
        flexDirection: "row",
        margin: 15
    },
    greyBackground: {
        flex: 1,
        backgroundColor: "#EBEBE4",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    leftContentWrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center"
    }
});
