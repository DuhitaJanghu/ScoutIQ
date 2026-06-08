import { useEffect, useState } from "react";

import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import { getShortlist, saveShortlist } from "../storage/shortlistStorage";

const ShortlistScreen = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getShortlist();

    setList(data);
  };

  const removeAthlete = async (id: string) => {
    const updated = list.filter((item) => item.id !== id);

    setList(updated);

    await saveShortlist(updated);
  };

  const averageScore =
    list.length > 0
      ? (list.reduce((sum, item) => sum + item.score, 0) / list.length).toFixed(
          1,
        )
      : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shortlisted Athletes</Text>

      <Text>Total Athletes: {list.length}</Text>

      <Text>Average Score: {averageScore}</Text>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>

            <Text>
              {item.sport} • {item.position}
            </Text>

            <Text>Score: {item.score}</Text>

            <Button title="Remove" onPress={() => removeAthlete(item.id)} />
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No shortlisted athletes yet</Text>
        }
      />
    </View>
  );
};

export default ShortlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
  },

  empty: {
    marginTop: 50,
    textAlign: "center",
  },
});
