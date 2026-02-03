import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>We help you track workouts and calories in an easy way!</Text>

      <Pressable onPress={() => console.log("Get started")} style={styles.button}>
        <Text style={styles.buttonText}>Get started</Text>
      </Pressable>
    </View>
  );
}
