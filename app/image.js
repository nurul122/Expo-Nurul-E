import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");
const IMAGE_SIZE = width / 3 - 20;

const mainImages = [
  "https://via.placeholder.com/150/FF0000", // 1
  "https://via.placeholder.com/150/00FF00", // 2
  "https://via.placeholder.com/150/0000FF", // 3
  "https://via.placeholder.com/150/FFFF00", // 4
  "https://via.placeholder.com/150/FF00FF", // 5
  "https://via.placeholder.com/150/00FFFF", // 6
  "https://via.placeholder.com/150/000000", // 7
  "https://via.placeholder.com/150/888888", // 8
  "https://via.placeholder.com/150/FFA500", // 9
];

const altImages = [
  "https://via.placeholder.com/150/AA0000", // 1 alt
  "https://via.placeholder.com/150/00AA00", // 2 alt
  "https://via.placeholder.com/150/0000AA", // 3 alt
  "https://via.placeholder.com/150/AAAA00", // 4 alt
  "https://via.placeholder.com/150/AA00AA", // 5 alt
  "https://via.placeholder.com/150/00AAAA", // 6 alt
  "https://via.placeholder.com/150/333333", // 7 alt
  "https://via.placeholder.com/150/BBBBBB", // 8 alt
  "https://via.placeholder.com/150/CC8400", // 9 alt
];

export default function ImageGrid() {
  const [states, setStates] = useState(
    Array(9).fill({ isAlt: false, scale: 1 })
  );

  const handlePress = (index) => {
    setStates((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const newScale = Math.min(item.scale + 0.2, 2);
          return { isAlt: !item.isAlt, scale: newScale };
        }
        return item;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {mainImages.map((img, index) => {
          const { isAlt, scale } = states[index];
          const imgSource = isAlt ? altImages[index] : mainImages[index];
          return (
            <Pressable key={index} onPress={() => handlePress(index)}>
              <Image
                source={{ uri: imgSource }}
                style={[
                  styles.image,
                  {
                    transform: [{ scale }],
                  },
                ]}
              />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: "center",
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
});
