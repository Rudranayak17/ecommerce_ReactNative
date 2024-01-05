import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const screenName =navigation.getCurrentRoute()?.name
  const [selectedIcon, setSelectedIcon] = useState("home"); // Set the initial active icon
  const slideAnimation = useRef(new Animated.Value(1)).current; // Set the initial value to 1 for visible text

  useEffect(() => {
    // Reset selectedIcon when the component mounts or navigation changes
    setSelectedIcon(screenName);

    // Set the default route's icon style
    setDefaultRouteStyle();
  }, [isFocused]);

  const setDefaultRouteStyle = () => {
    const defaultIcon = screenName; // Replace this with the key of your default route
    const defaultStyle = getIconStyle(defaultIcon);
    setSelectedIcon(defaultIcon);

    // You can use the Animated library to smoothly transition the style if needed
    // Example:
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    // Apply the default style
    // Note: You may need to use useRef for style objects to avoid unnecessary re-renders
    // For simplicity, I'm directly setting the style here
    // You can use useRef for optimization if needed
    styles.footerItem = [styles.footerItem, defaultStyle];
  };

  const handleIconClick = (screenName) => {
    if (selectedIcon === screenName) {
      setSelectedIcon(null);
      animateTextOut();
    } else {
      setSelectedIcon(screenName);
      animateTextIn();
      console.log(navigation.getCurrentRoute()?.name); // Log the current route name
      switch (screenName) {
        case "home":
          navigation.navigate("home");
          break;
        case "video-camera":
          navigation.navigate("video");
          break;
        case "heart":
          navigation.navigate("favourite");
          break;
        case "user":
          navigation.navigate("profile");
          break;
        default:
          break;
      }
    }
  };

  const animateTextIn = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animateTextOut = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const getIconStyle = (iconName) => {
    return {
      backgroundColor: selectedIcon === iconName ? "#40128C" : "white",
    };
  };

  const getIconColor = (iconName) => {
    return {
      color: selectedIcon === iconName ? "white" : "gray",
    };
  };

  const textSlide = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[styles.footerItem, getIconStyle("home")]}
        onPress={() => handleIconClick("home")}
      >
        <Icon style={getIconColor("home")} name="home" size={24} color="black" />
        {selectedIcon === "home" && (
          <Animated.Text
            style={[
              styles.footerText,
              getIconColor("home"),
              { transform: [{ translateX: textSlide }] },
            ]}
          >
            Home
          </Animated.Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.footerItem, getIconStyle("video-camera")]}
        onPress={() => handleIconClick("video-camera")}
      >
        <Icon
          style={getIconColor("video-camera")}
          name="video-camera"
          size={24}
          color="black"
        />
        {selectedIcon === "video-camera" && (
          <Animated.Text
            style={[
              styles.footerText,
              getIconColor("video-camera"),
              { transform: [{ translateX: textSlide }] },
            ]}
          >
            Video
          </Animated.Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.footerItem, getIconStyle("heart")]}
        onPress={() => handleIconClick("heart")}
      >
        <Icon style={getIconColor("heart")} name="heart" size={24} color="black" />
        {selectedIcon === "heart" && (
          <Animated.Text
            style={[
              styles.footerText,
              getIconColor("heart"),
              { transform: [{ translateX: textSlide }] },
            ]}
          >
            Favorite
          </Animated.Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.footerItem, getIconStyle("user")]}
        onPress={() => handleIconClick("user")}
      >
        <Icon name="user" style={getIconColor("user")} size={24} color="black" />
        {selectedIcon === "user" && (
          <Animated.Text
            style={[
              styles.footerText,
              getIconColor("user"),
              { transform: [{ translateX: textSlide }] },
            ]}
          >
            Profile
          </Animated.Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    gap: 17,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  footerText: {
    // marginTop: 5,
  },
});

export default Footer;
