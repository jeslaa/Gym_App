import React, { use } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>
        We help you track workouts and calories in an easy way!
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </Pressable>
    </View>
  );
}
