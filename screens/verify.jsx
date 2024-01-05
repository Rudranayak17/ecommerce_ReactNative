import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
} from "react-native";
import { Text } from "react-native-paper";

import logomavy_1 from "../assets/images/logomavy_1.png";
import Toast from "react-native-root-toast";
import { LinearGradient } from "expo-linear-gradient";

const Verify = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [OTP, setOTP] = useState("")
  
  const [buttonScale] = useState(new Animated.Value(1));

  const handleForgotPassword = () => {
    navigation.navigate("forgetpassword");
  };
  const handleFocus = (field) => {
    if (field === "email") {
      setEmailFocus(true);
      setPasswordFocus(false);
    } else if (field === "password") {
      setEmailFocus(false);
      setPasswordFocus(true);
    }
  };

  const handleBlur = () => {
    setEmailFocus(false);
    setPasswordFocus(false);
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    if (!OTP) {
      Toast.show("Please enter your OTP", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      return;
    }
    // Your login logic goes here
    // For now, let's just animate the button press
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    Toast.show('OTP is Right', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };
  const placeholderBackgroundColor = "#ADD8E6";
  const placeholderTextColor = "black";
  const emailInputStyle = {
    ...styles.input,
    marginTop: 60,
    borderColor: emailFocus ? "blue" : "white",
    color: placeholderTextColor,
    backgroundColor: placeholderBackgroundColor,
  };

  const passwordInputStyle = {
    ...styles.input,
    borderColor: passwordFocus ? "#1e90ff" : "white",
    color: placeholderTextColor,
    backgroundColor: placeholderBackgroundColor,
  };

  const animatedButtonStyle = {
    ...styles.submitButton,
    transform: [{ scale: buttonScale }],
  };

  return (
    <LinearGradient
      colors={["white", "white", "white", "#6EE2F0", "#55DCED"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.linearGradient}
    >
      <View style={{ ...styles.container }}>
        <Image source={logomavy_1} style={styles.logo} />

        <TextInput
          style={emailInputStyle}
          placeholder="OTP"
          keyboardType="number-pad"
          placeholderTextColor="black"
          onFocus={() => handleFocus("email")}
          value={OTP}
          onChangeText={(text) => setOTP(text)}
          onBlur={handleBlur}
        />

        <TouchableOpacity onPress={handleLogin} style={animatedButtonStyle}>
          <Text style={styles.submitButtonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    width: 400,
    height: 370,
    resizeMode: "contain",
  },
  input: {
    height: 50,
    borderColor: "black",
    width: "90%",
    color: "#000000", // Text color
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 15,
    paddingHorizontal: 20,
    backgroundColor: "white", // Background color
  },
  submitButton: {
    width: "90%",
    borderRadius: 25,
    backgroundColor: "#1e90ff",
    marginTop: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    marginTop: 10,
    fontSize: 18,
    color: "darkblue",
    textDecorationLine: "underline",
  },
  orContainer: {
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  orText: {
    marginHorizontal: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
  socialButtonsContainer: {
    marginTop: -10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  socialButton: {
    backgroundColor: "transparent",
    borderRadius: 20,

    padding: 5,
    borderColor: "#000",
  },
  socialButtonImage: {
    width: 40,
    height: 40,

    resizeMode: "contain",
    backgroundColor: "transparent",
  },
  imageBackgroundStyle: {
    borderRadius: 20,
  },
  signupContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
});

export default Verify;
