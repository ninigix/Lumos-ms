import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Button} from "react-native-elements";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import MyText from '../../components/MyText/MyText';
import Calendar from '../../components/Calendar/Calendar';

export default class SimulationScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startingDay: null,
            endingDay: null
        };
    }

    setEndingDay = date => {
        if (this.state.endingDay) {
            this.setState({startingDay: date.dateString});
            this.setState({endingDay: null})
        } else {
            this.setState({endingDay: date.dateString})
        }
    };

    handleOnDateSelect = date => {
        if (this.state.startingDay) {
            this.setEndingDay(date);
        } else {
            this.setState({});
            this.setState({startingDay: date.dateString});
        }
    };

    render() {
        return <View style={styles.container}>
            <View style={{flex: 1}}>
                <ProgressSteps>
                    <ProgressStep label="Choose date"
                                  nextBtnDisabled={!this.state.startingDay || !this.state.endingDay}>
                        <View style={{alignItems: 'center'}}>
                            <Calendar startDate={this.state.startingDay} endDate={this.state.endingDay}
                                      onDateSelect={this.handleOnDateSelect}/>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Choose hours">
                        <View style={{alignItems: 'center'}}>
                            <Text>This is the content within step 2!</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="See simulation">
                        <View style={{alignItems: 'center'}}>
                            <Text>This is the content within step 2!</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Start">
                        <View style={{alignItems: 'center'}}>
                            <MyText textStyle={{textAlign: 'justify', fontSize: 16}}> Be careful - when the simulation is running
                                you can't switch light via Lumos app.
                            </MyText>
                            <Button
                                title="Start simulation"
                                onPress={() => this.props.navigation.navigate('Home')}
                            />
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
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
        fontSize: 22,
        color: '#3B3B39',
        fontFamily: 'raleway-bold',
        textAlign: 'center',
        margin: 10
    },
});