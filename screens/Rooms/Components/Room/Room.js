import React from "react";
import { RkButton, RkStyleSheet } from "react-native-ui-kitten";
import { Dimensions, View } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryArea,
  VictoryAxis
} from "victory-native";

import UsageCard from "../UsageCard/UsageCard";
import * as fromChartHelper from "../ChartHelper";
import MyText from "../../../../components/MyText/MyText";

import styles from "./Room.style";

const SWITCH_ON = "Switch light on";
const SWITCH_OFF = "Switch_light_off";
const screenWidth = Dimensions.get("window").width;

const ChartCard = ({ title, xLabel, yLabel, chart }) => (
  <View style={styles.card}>
    <MyText isBold textStyle={styles.title}>
      {title}
    </MyText>
    <MyText textStyle={{ marginLeft: 20, paddingTop: 5 }}>
      X axis: {xLabel}
    </MyText>
    <MyText textStyle={{ marginLeft: 20 }}>Y axis: {yLabel}</MyText>
    <View style={{ marginTop: -40, marginLeft: 5 }}>{chart}</View>
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

const Room = ({ isSimulationOn, value, key, onClick, onChangeDatesClick }) => (
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
      onChangeDatesClick={onChangeDatesClick}
    />
    {renderChart(
      value.most_popular_days_changes,
      "Light switches count per day",
      "days of week",
      "number of changes"
    )}
    {renderChart(
      value.most_popular_days,
      "Total time of light usage per day",
      "days of week",
      "total minutes count"
    )}
    {renderChart(
      value.most_popular_hours_changes,
      "Light switches count per hour",
      "hours",
      "number of changes",
      true
    )}
    {renderChart(
      value.most_popular_hours,
      "Total time of light usage per hour",
      "hours",
      "total minutes count",
      true
    )}
  </View>
);

export default Room;
