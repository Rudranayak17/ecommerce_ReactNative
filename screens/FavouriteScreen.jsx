import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";

const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#FFFFFF", "#FFFFFF", "#C4B5DC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.9 }}
        style={styles.linearGradient}
      >
        <Header />
       
        <View style={styles.container}>
          <View>
            <Text>No Favourite documents available</Text>
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
 
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    paddingBottom: 60, // Adjust as needed to provide space for the footer
  },
});



export default FavouriteScreen;
