import React from "react";
import { TouchableOpacity, View } from "react-native";

import MyText from "../MyText/MyText";
import IconButton from "../IconButton/IconButton";

import styles from "./CardChoice.style";

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
