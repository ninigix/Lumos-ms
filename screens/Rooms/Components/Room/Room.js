import React from "react";
import { RkButton } from "react-native-ui-kitten";
import { View } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryArea,
  VictoryAxis
} from "victory-native";

import UsageCard from "../UsageCard/UsageCard";
import * as fromChartHelper from "../ChartHelper";
import MyText from "../../../../components/MyText/MyText";

import { LABELS, CHART_DATA } from "./Room.constants";
import styles from "./Room.style";

const renderChart = (data, title, xLabel, yLabel, isHours) => (
  <View style={styles.card}>
    <MyText isBold textStyle={styles.title}>
      {title}
    </MyText>
    <MyText textStyle={{ marginLeft: 20, paddingTop: 5 }}>
      {LABELS.X_AXIS} {xLabel}
    </MyText>
    <MyText textStyle={{ marginLeft: 20 }}>
      {LABELS.Y_AXIS} {yLabel}
    </MyText>
    <View style={{ marginTop: -40, marginLeft: 5 }}>
      {
        <VictoryChart
          domainPadding={!isHours && 15}
        >
          {isHours ? (
            <VictoryArea data={fromChartHelper.formatHoursData(data)} />
          ) : (
            <VictoryBar data={fromChartHelper.formatDaysData(data)} />
          )}
          <VictoryAxis fixLabelOverlap={true} />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      }
    </View>
  </View>
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
      {isSimulationOn ? LABELS.OFF : LABELS.ON}
    </RkButton>
    <UsageCard
      price={value.price.price}
      kwh={value.kwh.kwh}
      bulb_consumption={value.bulb_consumption}
      onChangeDatesClick={onChangeDatesClick}
    />
    {renderChart(
      value.most_popular_days_changes,
      ...CHART_DATA.most_popular_days_changes
    )}
    {renderChart(value.most_popular_days, ...CHART_DATA.most_popular_days)}
    {renderChart(
      value.most_popular_hours_changes,
      ...CHART_DATA.most_popular_hours_changes,
      true
    )}
    {renderChart(
      value.most_popular_hours,
      ...CHART_DATA.most_popular_hours,
      true
    )}
  </View>
);

export default Room;
