import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import MyText from "../MyText/MyText";
import IconButton from "../IconButton/IconButton";

const CardChoice = ({
  leftComponent,
  rightComponent,
  handleOnPress,
  leftComponentAdditionalLine,
  iconType,
  iconIsActive,
  iconBackgroundColor
}) => {
  const renderText = () => (
    <MyText textStyle={{ fontSize: 16 }}>{leftComponentAdditionalLine}</MyText>
  );

  const renderBoldText = () => (
    <MyText isBold textStyle={{ fontSize: 16 }}>
      {leftComponent}
    </MyText>
  );

  const renderLeftContent = () => (
    <TouchableOpacity
      onPress={handleOnPress}
      style={styles.leftContentWrapper}
      disabled={!handleOnPress}
    >
      <IconButton
        type={iconType}
        wasSelected={iconIsActive}
        backgroundColor={iconBackgroundColor}
      />
      {leftComponentAdditionalLine ? (
        <View
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {renderText()}
          {renderBoldText()}
        </View>
      ) : (
        renderBoldText()
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftWrapper}>{renderLeftContent()}</View>
      <View style={styles.rightWrapper}>
        <View style={styles.greyBackground}>{rightComponent}</View>
      </View>
    </View>
  );
};

export default CardChoice;

const styles = StyleSheet.create({
  leftWrapper: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  rightWrapper: {
    flex: 1,
    display: "flex",
    minWidth: "15%"
  },
  wrapper: {
    display: "flex",
    height: 70,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    flexDirection: "row",
    margin: 15
  },
  greyBackground: {
    flex: 1,
    backgroundColor: "#EBEBE4",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  leftContentWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  }
});
