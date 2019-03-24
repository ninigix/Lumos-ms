import React from 'react';
import {View, FlatList, Text} from 'react-native';

import {roomImages} from "../../constants/Links";
import Card from './Card/Card';
import {messages} from './RoomsScreenConstants';

export default class RoomsScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightSwitches: [],
        };
    }

    componentDidMount() {
        const {getSimulationStatus, getLightSwitches} = this.props;
        getLightSwitches();
        getSimulationStatus();
    }

    renderItem = ({item}) => (
        <Card item={item} image={roomImages[item.description]} onClick={this.props.switchLight}
              isAvailable={this.checkIfSimulationOn()}/>);

    extractItemKey = (item) => `${item.id}`;

    checkIfSimulationOn = () => {
        console.log('this.props.simulationStatus', this.props.simulationStatus);
        return this.props.simulationStatus === 'on';
    };

    renderHeaderText = () => this.checkIfSimulationOn() ? messages.simulationOn : messages.simulationOff;

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.title}>{this.renderHeaderText()}</Text>
                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={this.extractItemKey}
                    data={this.props.lightSwitches}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

import {RkStyleSheet} from "react-native-ui-kitten";

const styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base,
    },
    list: {
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color: '#3B3B39',
        fontFamily: 'raleway-bold',
        textAlign: 'center',
        margin: 10
    },
}));