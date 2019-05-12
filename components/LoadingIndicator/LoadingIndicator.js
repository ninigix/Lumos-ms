import React from 'react';
import { View, Image } from "react-native";
import MyText from "../MyText/MyText";

const LoadingIndicator = () => (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require("../../assets/gifs/tom.gif")}/>
        <MyText isBold textStyle={{fontSize: 20, margin: 20}}>Wait a sec!</MyText>
        <MyText>We know it's taking a while. There is a lot of data to process. Please, grab a cup of coffee and watch our awesome gif while waiting.</MyText>
    </View>
);

export default LoadingIndicator;