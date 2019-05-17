import React from "react";
import { Modal, View } from "react-native";
import { RkButton } from "react-native-ui-kitten";

import styles from "./Modal.style";

const MyModal = ({
  onCloseModal,
  content,
  areDatesSelected,
  onDatesConfirmClick
}) => (
  <Modal animationType={"slide"} transparent={false} visible>
    <View style={styles.modal}>
      {content}
      <View style={styles.buttonWrapper}>
        <RkButton
          onPress={onDatesConfirmClick}
          rkType={!areDatesSelected && "outline"}
          style={{ borderColor: "#EBEBE4" }}
          contentStyle={{ color: "#EBEBE4" }}
          disabled={!areDatesSelected}
        >
          Confirm
        </RkButton>
        <RkButton onPress={onCloseModal} rkType="outline">
          Close Modal
        </RkButton>
      </View>
    </View>
  </Modal>
);

export default MyModal;
