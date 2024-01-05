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
} from "react-native";
import { Text } from "react-native-paper";


import logomavy_1 from "../assets/images/logomavy_1.png";
import googleLogo from "../assets/images/google.png";
import facebookLogo from "../assets/images/facebook.png";
import linkdinLogo from "../assets/images/linkdin.png";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-root-toast";


const Login = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [buttonScale] = useState(new Animated.Value(1));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const handleLogin =async () => {
  if (!email || !password) { 
    Toast.show('Please enter all the fields', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    return;
  }
  try {
  // Your login logic goes here
//  await dispatch(login(email, password));
  // For now, let's just animate the button press
  Animated.sequence([
    Animated.timing(buttonScale, { toValue: 0.8, duration: 100, useNativeDriver: true }),
    Animated.timing(buttonScale, { toValue: 1, duration: 100, useNativeDriver: true }),
  ]).start();

  Toast.show('Login successful!', {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
  navigation.navigate("home")
   } catch (error) {
    // Handle the login error here
    console.error("Login error:", error);
    // You can also show a toast or other error handling logic
  }
};


  const placeholderBackgroundColor = "#ADD8E6"
  const placeholderTextColor = "black"; 
  const emailInputStyle = {
    ...styles.input,
    marginTop:-20,
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
    colors={['white', 'white', 'white', 'white', '#6EE2F0', "#55DCED"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.linearGradient}
  >
      <View style={{...styles.container}}>
        <Image source={logomavy_1} style={styles.logo} />

        <TextInput
          style={emailInputStyle}
          placeholder="Email Address"
          keyboardType="email-address"
          placeholderTextColor="black"
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
          onChangeText={(text)=>setEmail(text)}
        />

        <TextInput
          secureTextEntry
          style={passwordInputStyle}

          placeholder="Password"
          placeholderTextColor="black"
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
          onChangeText={(text)=>setPassword(text)}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={animatedButtonStyle}
        >
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log("Google pressed")}
          >
            <ImageBackground
              source={googleLogo}
              style={styles.socialButtonImage}
              imageStyle={styles.imageBackgroundStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log("Facebook pressed")}
          >
            <ImageBackground
              source={facebookLogo}
              style={styles.socialButtonImage}
              imageStyle={styles.imageBackgroundStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log("LinkedIn pressed")}
          >
            <ImageBackground
              source={linkdinLogo}
              style={styles.socialButtonImage}
              imageStyle={styles.imageBackgroundStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={{ fontSize: 16 ,color:"black"}}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={{ color: "darkblue", fontWeight: "bold", fontSize: 17 , textDecorationLine: "underline",}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient:{
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
    marginTop: -20,
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

   padding:5,
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

export default Login;
