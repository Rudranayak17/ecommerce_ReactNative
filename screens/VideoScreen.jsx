import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import Header from "../component/header/Header";

const VideoScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#FFFFFF", "#FFFFFF", "#C4B5DC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.9 }}
        style={styles.linearGradient}
      >
        <Header />
        <View
          style={{
            alignItems: "center",
            width: "95%",
            borderRadius: 16,
            backgroundColor: "#C4B5DC", // Background color
            shadowColor: "#000", // Shadow color
            shadowOffset: {
              width: 0,
              height: 2,
            },
            marginTop: "5%",
            marginLeft: "2%",

            shadowOpacity: 0.2, // Opacity of the shadow
            shadowRadius: 4, // Radius of the shadow
            elevation: 3,
            padding: 5,
          }}
        >
          <Text style={{ fontSize: 12, backgroundColor: "#C4B5DC" }}>
            Studies have shown that the brain processes visual information
            faster than text or auditary information , making visual studying on
            effective way to learn{" "}
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text>No Data Available</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: "30%",
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    paddingBottom: 60, // Adjust as needed to provide space for the footer
  },
});

export default VideoScreen;
