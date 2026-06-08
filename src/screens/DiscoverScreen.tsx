import { useState } from "react";

import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { athletes } from "../data/athletes";

const DiscoverScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState("");

  const filteredAthletes = athletes.filter((athlete) =>
    athlete.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Discover Athletes</Text>

      <TextInput
        placeholder="Search athlete..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <Text style={styles.result}>
        {filteredAthletes.length} athletes found
      </Text>

      <FlatList
        data={filteredAthletes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Profile", {
                athlete: item,
              })
            }
          >
            <Text style={styles.name}>{item.name}</Text>

            <Text>
              {item.sport} • {item.position}
            </Text>

            <Text>Age: {item.age}</Text>

            <Text style={styles.score}>Score: {item.score}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No athletes found</Text>}
      />
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  search: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  result: {
    marginBottom: 10,
    color: "gray",
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  score: {
    marginTop: 8,
    color: "green",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    marginTop: 50,
  },
});
