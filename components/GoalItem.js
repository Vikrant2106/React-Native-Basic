import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

export default function GoalItem({ value, id, fncDeleteRecord }) {
  function fncDelete(delID) {
    fncDeleteRecord(delID);
  }

  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#cccccc" }} // for Android phones
        onPress={() => {
          fncDelete(id);
        }}
        style={({ pressed }) => pressed && styles.pressedItems} // for IOS mobile phones
      >
        <Text style={styles.goalText}>{value}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "black",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItems: {
    opacity: 0.5,
  },
});
