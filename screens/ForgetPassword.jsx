import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Keyboard,
  ScrollView, // Import ScrollView
} from "react-native";
import { Text } from "react-native-paper";
import Toast from "react-native-root-toast";
import logomavy_1 from "../assets/images/logomavy_1.png";


const ForgetPassword = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [buttonScale] = useState(new Animated.Value(1));

 
  const handleFocus = (field) => {
    if (field === "email") {
      setEmailFocus(true);
    }
  };

  const handleBlur = () => {
    setEmailFocus(false);
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    if (!email ) { 
      Toast.show('Please enter your Email', {
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
    Toast.show('OTP send successful!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });

    navigation.navigate("verify");
  };

  const emailInputStyle = {
    ...styles.input,
    borderColor: emailFocus ? "blue" : "white",
  };

  const animatedButtonStyle = {
    ...styles.submitButton,
    transform: [{ scale: buttonScale }],
  };

  return (
    <View
      style={{ ...styles.backgroundImage }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image source={logomavy_1} style={styles.logo} />
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
            <TextInput
              style={emailInputStyle}
              placeholder="Email"
              onFocus={() => handleFocus("email")}
              value={email}
              onBlur={handleBlur}
              onChangeText={(text)=>setEmail(text)}
            />
            <TouchableOpacity style={animatedButtonStyle} onPress={handleLogin}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
backgroundColor:"#4C70E3"
  },
  logo: {
    marginTop: 10,
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  forgotPasswordContainer: {
    marginTop: -30,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    paddingTop:30,
    padding: 20,
  },
  forgotPasswordText: {
    marginTop: -15,
    
    color: "rgb(19, 19, 159)",
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "white",
    width: "95%",
    color: "#000000", // Text color
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 13,
    paddingHorizontal: 20,
    backgroundColor: "white", // Background color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Opacity of the shadow
    shadowRadius: 4, // Radius of the shadow
    elevation: 3, // Add elevation for Android shadow
  },
  submitButton: {
    width: "95%",
    borderRadius: 25,
    opacity: 0.8,
    backgroundColor: "rgb(19, 19, 159)",
    marginTop: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default ForgetPassword;
