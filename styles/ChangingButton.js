import {StyleSheet} from "react-native";
import {RkButton, RkStyleSheet} from "react-native-ui-kitten";


import colors from './colors';

export default styles = RkStyleSheet.create(theme => ({
    button: {
        borderColor: `deeppink`,
        width: '100%',
        marginTop: 5,
        marginBottom: 15
    },
    buttonContent: {
        color: `${colors.LAPIS_LAZURI}`,
        fontSize: '20',
        fontFamily: 'raleway-light',
    }
}));