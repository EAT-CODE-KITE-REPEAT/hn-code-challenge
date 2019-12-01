import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  Linking
} from "react-native";
import { Story } from "../reducer";

const { width } = Dimensions.get("window");

const StoryItem = ({
  page,
  index,
  story
}: {
  page: number;
  index: number;
  story: Story;
}) => {
  const position = (page - 1) * 100 + index + 1;

  return (
    <View style={[styles.row, styles.mainRow]}>
      <Text style={styles.number}>{position}.</Text>

      {story ? (
        <TouchableOpacity onPress={() => Linking.openURL(story.url)}>
          <View style={styles.row}>
            <Text numberOfLines={1} style={styles.title}>
              {story.title}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.subtitle}>
              {story.score} by {story.by}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },

  mainRow: {
    margin: 5,
    flex: 1
  },

  number: {
    color: "#AAA",
    marginRight: 10,
    width: 30
  },

  title: {
    width: width - 50
  },

  subtitle: {
    fontSize: 10
  }
});

export default StoryItem;
