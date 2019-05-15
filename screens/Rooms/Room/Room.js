import React from "react";
import { RkButton, RkStyleSheet, RkCard, RkText } from "react-native-ui-kitten";
import { Dimensions, View } from "react-native";
import {
  VictoryChart,
  VictoryTheme,
  VictoryBar,
  VictoryArea,
  VictoryPie,
  VictoryClipContainer,
  VictoryLine,
  VictoryAxis
} from "victory-native";

import UsageCard from "./UsageCard";
import * as fromChartHelper from "./ChartHelper";
import MyText from "../../../components/MyText/MyText";

const SWITCH_ON = "Switch light on";
const SWITCH_OFF = "Switch_light_off";
const screenWidth = Dimensions.get("window").width;

const ChartCard = ({ title, xLabel, yLabel, chart }) => (
  <View style={styles.card}>
    <MyText isBold textStyle={styles.title}>
      {title}
    </MyText>
    <MyText textStyle={{marginLeft: 20, paddingTop: 5}}>X axis: {xLabel}</MyText>
    <MyText textStyle={{marginLeft: 20}}>Y axis: {yLabel}</MyText>
    <View style={{marginTop: -40, marginLeft: 5}}>{chart}</View>
  </View>
);

const renderChart = (data, title, xLabel, yLabel, isHours) => (
  <ChartCard
    chart={
      <VictoryChart animate={{ duration: 2000 }} domainPadding={!isHours && 15}>
        {isHours ? (
          <VictoryArea data={fromChartHelper.formatHoursData(data)} />
        ) : (
          <VictoryBar data={fromChartHelper.formatDaysData(data)} />
        )}
        <VictoryAxis fixLabelOverlap={true} />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    }
    title={title}
    xLabel={xLabel}
    yLabel={yLabel}
  />
);

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
      {isSimulationOn ? SWITCH_OFF : SWITCH_ON}
    </RkButton>
    <UsageCard
      price={value.price.price}
      kwh={value.kwh.kwh}
      bulb_consumption={value.bulb_consumption}
    />
    {renderChart(
      value.most_popular_days_changes,
      "Most popular days changes",
      "days",
      "?"
    )}
    {renderChart(value.most_popular_days, "Most popular days", "days", "?")}
    {renderChart(
      value.most_popular_hours_changes,
      "Most popular hours changes",
      "hours",
      "?",
      true
    )}
    {renderChart(
      value.most_popular_hours,
      "Most popular hours",
      "hours",
      "?",
      true
    )}
  </View>
);

export default Room;

const styles = RkStyleSheet.create(theme => ({
  title: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    color: "#2274A5"
  },
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
