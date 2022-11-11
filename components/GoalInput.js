import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput({
  fncAddGoal,
  ModalIsVisible,
  fncModalClose,
}) {
  const [enteredText, setEnteredText] = useState("");
  function fncInputChange(val) {
    setEnteredText(val);
  }
  function fncAddGoalHere() {
    fncAddGoal(enteredText);
    setEnteredText("");
    fncModalClose();
  }
  return (
    <Modal visible={ModalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/Images/goals.jpg")}
          style={styles.imageContainer}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={fncInputChange}
          placeholder="Add your goals"
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={fncAddGoalHere} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={fncModalClose} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
    width: 250,
    padding: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
    color: "white",
  },
});
