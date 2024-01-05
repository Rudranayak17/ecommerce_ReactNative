import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Text,
  Keyboard,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-root-toast";
import logomavy_1 from "../assets/images/logomavy_1.png";


const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [buttonScale] = useState(new Animated.Value(1));

 
  
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

  const submitHandler = async () => {
    try {
      if (!userName || !email || !password || !confirmPassword) {
        Toast.show("Please enter all the fields", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
        return;
      }
      if (password !== confirmPassword) {
        Toast.show("Password doesn't match confirm password", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
        return;
      }

      const myForm = new FormData();
      myForm.append("name", userName);
      myForm.append("email", email);
      myForm.append("password", password);

      // Wrap the asynchronous operation in a try-catch block
   

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


      Toast.show("Sign up successful", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      navigation.navigate("home");
    } catch (error) {
      console.error("Error during registration:", error.response.data);
      // Handle the error, show a toast, or perform other error-handling actions
      Toast.show(`Error during registration ${error} `, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }

  };

  const placeholderBackgroundColor = "#ADD8E6";
  const placeholderTextColor = "black";
  const inputStyle = (focus) => ({
    ...styles.input,
    borderColor: focus ? "blue" : "white",

    color: placeholderTextColor,
    backgroundColor: placeholderBackgroundColor,
  });

  const animatedButtonStyle = {
    ...styles.submitButton,
    transform: [{ scale: buttonScale }],
  };

  return (
    <LinearGradient
      colors={["white", "white", "white", "white", "#6EE2F0", "#55DCED"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Image source={logomavy_1} style={styles.logo} />
        <View style={{ marginTop: -57 }}>
          <Text style={styles.subtitle}>
            Just one step you can see what's happened in the world
          </Text>
        </View>
        <TextInput
          style={inputStyle(emailFocus)}
          placeholder="Full Name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          keyboardType="default"
          placeholderTextColor="black"
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
        />
        <TextInput
          style={inputStyle(emailFocus)}
          placeholder="Email Address"
          keyboardType="email-address"
          placeholderTextColor="black"
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          style={{ ...inputStyle(passwordFocus) }}
          placeholder="Password"
          placeholderTextColor="black"
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          secureTextEntry
          style={inputStyle(passwordFocus)}
          placeholder="Confirm Password"
          placeholderTextColor="black"
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity onPress={submitHandler} style={animatedButtonStyle}>
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.signupLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
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
  logo: {
    marginTop: -20,
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  subtitle: {
    paddingHorizontal: 10,
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "white",
    width: "90%",
    color: "#000000",
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 15,
    paddingHorizontal: 20,
    backgroundColor: "white",
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
    fontSize: 15,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: "black",
  },
  signupLink: {
    color: "darkblue",
    fontWeight: "bold",
    fontSize: 17,
    textDecorationLine: "underline",
  },
  learnMoreContainer: {
    marginTop: 35,
  },
  learnMoreText: {
    fontSize: 15,
  },
  learnMoreLink: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default SignUp;
