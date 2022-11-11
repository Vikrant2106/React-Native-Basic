import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function fncAddGoal(enteredText) {
    setListGoals([
      ...listGoals,
      {
        text: enteredText,
        id: Math.random().toString(),
      },
    ]);
  }

  function fncOpenModal() {
    setIsVisible(true);
  }

  function fncDeleteRecord(id) {
    // var data = listGoals.filter((data) => data.id !== id);
    setListGoals(listGoals.filter((data) => data.id !== id));
  }

  function fncModalClose() {
    setIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button onPress={fncOpenModal} title="Open " />
      <GoalInput
        fncAddGoal={fncAddGoal}
        ModalIsVisible={isVisible}
        fncModalClose={fncModalClose}
      />
      <View style={styles.goalContiner}>
        {/* <ScrollView>
          {listGoals.map((data, i) => (
            <View style={styles.goalItems} key={i}>
              <Text style={styles.goalText}>{data}</Text>
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={listGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                value={itemData.item.text}
                id={itemData.item.id}
                fncDeleteRecord={fncDeleteRecord}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
  },
  goalContiner: {
    flex: 5,
    marginTop: 10,
  },
});
