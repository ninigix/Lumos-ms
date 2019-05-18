import React from "react";
import { Modal, View } from "react-native";
import { RkButton } from "react-native-ui-kitten";

import {LABELS} from "./Modal.constants";
import styles from "./Modal.style";

const MyModal = ({
  onCloseModal,
  areDatesSelected,
  onDatesConfirmClick,
  children
}) => (
  <Modal animationType={"slide"} transparent={false} visible>
    <View style={styles.modal}>
      {children}
      <View style={styles.buttonWrapper}>
        <RkButton
          onPress={onDatesConfirmClick}
          rkType={!areDatesSelected && "outline"}
          style={{ borderColor: "#EBEBE4" }}
          contentStyle={{ color: "#EBEBE4" }}
          disabled={!areDatesSelected}
        >
          {LABELS.CONFIRM}
        </RkButton>
        <RkButton onPress={onCloseModal} rkType="outline">
          {LABELS.CLOSE}
        </RkButton>
      </View>
    </View>
  </Modal>
);

export default MyModal;
