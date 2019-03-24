import React from 'react';
import {View, FlatList} from 'react-native';

import {roomImages} from "../../constants/Links";
import Card from './Card/Card'

export default class RoomsScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightSwitches: [],
        };
    }

    componentDidMount() {
        this.props.getLightSwitches();
    }

    renderItem = ({item}) => (<Card item={item} image={roomImages[item.description]} onClick={this.props.switchLight}/>);

    extractItemKey = (item) => `${item.id}`;

    render() {
        return (
            <View style={styles.root}>
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
}));