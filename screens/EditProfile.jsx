import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { TextInput } from "react-native-paper";
import Toast from "react-native-root-toast";
import { LinearGradient } from "expo-linear-gradient";
const EditProfile = () => {
    const [buttonScale] = useState(new Animated.Value(1));
  const navigation = useNavigation();
  const [notiData, setNotiData] = useState([]);
  const [userName, SetUserName] = useState("john doe");
  const [email, SetEmail] = useState("john.doe@example.com");
  const [mobile, SetMobile] = useState("8767989624");
  const [location, SetLocation] = useState("loading ...");
  const [department, SetDepartment] = useState("");
  const handleLogin = () => {

    // Your login logic goes here
  
    // For now, let's just animate the button press
    Animated.sequence([
      Animated.timing(buttonScale, { toValue: 0.8, duration: 100, useNativeDriver: true }),
      Animated.timing(buttonScale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  
    Toast.show('Edit successful', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    navigation.navigate("home")
  };
  const animatedButtonStyle = {
    ...styles.submitButton,
    transform: [{ scale: buttonScale }],
  };
  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.listItem}>
          <View style={styles.iconContainer}>
            <Icon name="notifications" size={30} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <LinearGradient
   colors={["#FFFFFF", "#FFFFFF", "#C4B5DC"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.linearGradient}
  >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => console.log("delete")}
        ></TouchableOpacity>
      </View>
      <View style={styles.centeredContainer}>
        <Text style={{ fontSize: 20, textAlign: "center", padding: 26 }}>
          Help Us Personalise your learning experience{" "}
        </Text>
        <View>
          <Text style={{ color: "#1D87EF", marginLeft: "12%" }}>Name *</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 15,
              marginLeft: 10,
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <FontAwesome color={"#1D87EF"} name="user" size={25} />
            <TextInput
              placeholder="Full Name"
              keyboardType="default"
              placeholderTextColor="black"
              style={{ width: "85%" }}
              value={userName}
              onChangeText={(text) => SetUserName(text)}
            />
          </View>
          <Text style={{ color: "#1D87EF", marginLeft: "12%" }}>Email *</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 10,
              marginLeft: 10,
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <MaterialCommunityIcons color={"#1D87EF"} name="email" size={25} />
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="black"
              style={{ width: "85%" }}
              value={email}
              onChangeText={(text) => SetEmail(text)}
            />
          </View>
          <Text style={{ color: "#1D87EF", marginLeft: "12%" }}>Mobile *</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 10,
              marginLeft: 10,
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <FontAwesome color={"#1D87EF"} name="phone" size={25} />
            <TextInput
              placeholder="Phone number"
              keyboardType="number-pad"
              placeholderTextColor="black"
              style={{ width: "85%" }}
              value={mobile}
              onChangeText={(text) => SetMobile(text)}
            />
          </View>
          <Text style={{ color: "#1D87EF", marginLeft: "12%" }}>city /Nearest Location*</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 10,
              marginLeft: 10,
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Entypo color={"#1D87EF"} name="location-pin" size={25} />
            <TextInput
              placeholder="Location"
              keyboardType="default"
              placeholderTextColor="black"
              style={{ width: "85%" }}
              value={location}
              onChangeText={(text) => SetLocation(text)}
            />
          </View>
          
          <TouchableOpacity
          onPress={handleLogin}
          style={animatedButtonStyle}
        >
          <Text style={styles.submitButtonText}>Save Details</Text>
        </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
      },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10%",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
  },
  submitButton: {
    width: "90%",
    borderRadius: 25,
    backgroundColor: "#1e90ff",
    marginTop: 20,
    paddingVertical: 15,
    marginLeft:"5%",
    alignItems: "center",
  },
  headerTitle: {
    color: "black",
    fontWeight: "800",
    fontSize: 20,
    textAlign: "justify",
  },
  listItem: {
    flexDirection: "row",
    padding: 8,
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
    color: "black",
    fontSize: 15,
  },
  description: {
    color: "black",
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "lightgray",
  },
  noNotificationText: {
    fontSize: 16,
    color: "gray",
  },
  centeredContainer: {
    flex: 1,
    marginBottom: "10%",
  },
});

export default EditProfile;
