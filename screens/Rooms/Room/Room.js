import React from "react";
import { RkButton, RkStyleSheet, RkCard, RkText } from "react-native-ui-kitten";
import { Dimensions, View } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryArea,
  VictoryPie,
  VictoryClipContainer,
  VictoryLine
} from "victory-native";

import UsageCard from "./UsageCard";
import * as fromChartHelper from "./ChartHelper";
import MyText from "../../../components/MyText/MyText";

const SWITCH_ON = "Switch light on";
const SWITCH_OFF = "Switch_light_off";
const screenWidth = Dimensions.get("window").width;

const Room = ({ isSimulationOn, value, key, onClick }) => (
  <View style={styles.root}>
    <RkButton
      onPress={onClick}
      rkType={!isSimulationOn && "outline"}
      style={styles.button}
      contentStyle={
        isSimulationOn ? styles.outlinedButtonContent : styles.buttonContent
      }
    >
      {console.log("value", value)}
      {isSimulationOn ? SWITCH_OFF : SWITCH_ON}
    </RkButton>
    <UsageCard
      price={value.price.price}
      kwh={value.kwh.kwh}
      bulb_consumption={value.bulb_consumption}
    />

    <View style={styles.card}>
      <MyText
        isBold
        textStyle={{
          fontSize: 20,
          marginTop: 20,
          marginLeft: 20,
          color: "#2274A5"
        }}
      >
        Most popular days
      </MyText>
      <VictoryChart animate={{ duration: 2000 }}>
        <VictoryArea
          interpolation="natural"
          groupComponent={
            <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
          }
          data={fromChartHelper.formatDaysData(value.most_popular_days)}
        />
      </VictoryChart>
    </View>
    <View style={styles.card}>
      <MyText
        isBold
        textStyle={{
          fontSize: 20,
          marginTop: 20,
          marginLeft: 20,
          color: "#2274A5"
        }}
      >
        Most popular hours
      </MyText>
      <VictoryPie
        data={fromChartHelper.formatHoursData(value.most_popular_hours)}
        colorScale={fromChartHelper.chartPieColors}
        innerRadius={100}
        // padAngle={3}
      />
    </View>
  </View>
);

export default Room;

const styles = RkStyleSheet.create(theme => ({
  root: {
    flex: 1,
    justifyContent: "center"
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EBEBE4"
  },
  button: {
    borderColor: "#2274a5",
    width: "100%",
    marginTop: 5,
    marginBottom: 15
  },
  buttonContent: {
    color: "#2274a5",
    fontSize: 18,
    fontFamily: "raleway-bold"
  },
  outlinedButtonContent: {
    fontSize: 18,
    fontFamily: "raleway-bold",
    color: "white"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
}));
