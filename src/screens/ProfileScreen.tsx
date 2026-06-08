import { useEffect, useState } from "react";

import { Button, StyleSheet, Text, View } from "react-native";

import { getShortlist, saveShortlist } from "../storage/shortlistStorage";

const ProfileScreen = ({ route }: any) => {
  const { athlete } = route.params;

  const [shortlisted, setShortlisted] = useState(false);

  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    loadShortlist();
  }, []);

  const loadShortlist = async () => {
    const data = await getShortlist();

    setList(data);

    const exists = data.find((item) => item.id === athlete.id);

    setShortlisted(!!exists);
  };

  const toggleShortlist = async () => {
    let updated = [];

    if (shortlisted) {
      updated = list.filter((item) => item.id !== athlete.id);
    } else {
      updated = [...list, athlete];
    }

    setList(updated);

    await saveShortlist(updated);

    setShortlisted(!shortlisted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{athlete.name}</Text>

      <Text style={styles.sport}>{athlete.sport}</Text>

      <Text style={styles.score}>Readiness Score: {athlete.score}</Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${athlete.score}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.statsHeading}>Stats</Text>

      {Object.entries(athlete.stats).map(([key, value]) => (
        <Text key={key} style={styles.stat}>
          {key}: {String(value)}
        </Text>
      ))}

      <Button
        title={shortlisted ? "Remove from Shortlist" : "Add to Shortlist"}
        onPress={toggleShortlist}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
  },

  sport: {
    marginTop: 5,
    fontSize: 18,
    color: "gray",
  },

  score: {
    marginTop: 20,
    fontWeight: "bold",
  },

  progressBackground: {
    height: 12,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "green",
  },

  statsHeading: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  stat: {
    marginTop: 8,
    fontSize: 16,
  },
});
