import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import {RkCard} from 'react-native-ui-kitten';

import MyText from '../../../components/MyText/MyText';

import styles from './CardStyles';

export default class Card extends React.Component {
    render() {
        const {image, title, text} = this.props;
        return (
                    <View style={styles.listWrapper}>
                        <RkCard rkType='shadowed'>
                            <Image rkCardImg source={{uri: image}}/>
                            <View rkCardHeader>
                                <Text style={styles.subtitle}>{title}</Text>
                            </View>
                            <View rkCardContent>
                                <MyText text={text}/>
                            </View>
                        </RkCard>
                    </View>
        )
    }
}

