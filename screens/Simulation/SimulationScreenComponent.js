import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Button} from "react-native-elements";
import {RkTabView} from 'react-native-ui-kitten';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import MyText from '../../components/MyText/MyText';

export default class SimulationScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markedDates: {
                '2019-04-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
            },
        };
    }

    onDateSelect = date => {
        console.log('date', date)
    };

    render() {
        return <View style={styles.container}>
            <Text style={styles.title}>Start simulation</Text>
            <MyText textStyle={{textAlign: 'justify'}}>Here you can choose dates when you want to simulate presence in the house. You can see the results
            and if you like them, just press a button to start simulation! Be careful - when the simulation is running
                you can't switch light via Lumos app.
            </MyText>
            <RkTabView>
                <RkTabView.Tab title={'Tab 1'}>
                    <CalendarList
                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                        markedDates={this.state.markedDates}
                        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={50}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={50}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}
                        onDayPress={(day) => {console.log('selected day', day)}}
                        markingType='multi-period'
                />
                </RkTabView.Tab>
                <RkTabView.Tab title={'Tab 2'}>
                    <Text>Tab 2 Content</Text>
                </RkTabView.Tab>
                <RkTabView.Tab title={'Tab 3'}>
                    <Text>Tab 3 Content</Text>
                </RkTabView.Tab>
            </RkTabView>
            <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Home')}
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

