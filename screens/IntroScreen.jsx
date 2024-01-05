import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

import comfort from "../assets/images/comfort.png";
import delivery from "../assets/images/delivery.png";
import review from "../assets/images/review.png";

const windowWidth = Dimensions.get("window").width;

const IntroScreens = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = [
    {
      image: comfort,
      title: "Welcome to Mavy Tech",
      description:
        "Welcome to Mavy Tech, your one-stop destination for exploring the world of medical notes and discovering the latest advancements in medical instruments. Let's embark on a journey to empower ourselves with valuable medical insights and cutting-edge tools for better healthcare!",
    },
    {
      image: delivery,
      title: "Observe and Study",
      description:
        "Step into the realm of medical education like never before with Observe & Study, an innovative feature on MavyTech that provides a comprehensive platform for observing medical procedures and studying complex medical cases, empowering you to excel in your medical journey.",
    },
    {
      image: review,
      title: "FocusMaster",
      description:
        "Unlock the secrets within texts, unravel complex information, and elevate your document analysis skills to new heights",
    },
  ];

  const handleSkip = () => {
    navigation.navigate("login");
  };

  const handleNext = () => {
    if (currentIndex !== pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollViewRef.current.scrollTo({
        x: windowWidth * (currentIndex + 1),
        animated: true,
      });
    } else {
      navigation.navigate("login");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const currentPage = Math.round(offset / windowWidth);
          setCurrentIndex(currentPage);
        }}
      >
        {pages.map((page, index) => (
          <View key={index} style={{ flex: 1, width: windowWidth }}>
            <Image source={page.image} style={styles.image} />
            <Text style={styles.title}>{page.title}</Text>
            <Text style={styles.description}>{page.description}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.bottomNavigation}>
        {currentIndex > 0 && (
          <TouchableOpacity
           style={{backgroundColor:"#40128D",padding:"5%",borderRadius:15}}
            onPress={() => {
              setCurrentIndex(currentIndex - 1);
              scrollViewRef.current.scrollTo({
                x: windowWidth * (currentIndex - 1),
                animated: true,
              });
            }}
          >
            <AntDesign name="arrowleft" size={27} color="white" />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={{backgroundColor:"#40128D",padding:"5%",borderRadius:15}} onPress={handleNext}>
          <Text style={styles.navigationText}>
            {currentIndex === pages.length - 1 ? (
              <AntDesign name="check" size={27} color="white" />
            ) : (
              <AntDesign name="arrowright" size={27} style={{backgroundColor:"#40128D"}} color="white" />
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    marginTop: 45,
    width: "100%",
    height: "45%",
    resizeMode: "cover",
  },
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    margin: 16,
    fontWeight: "600",
  },
  description: {
    textAlign: "left",
    color: "gray",
    fontSize: 17,
    marginHorizontal: 12,
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "transparent", // Change the background color to transparent
    padding: 10,
    borderRadius: 5,
  },
  skipButtonText: {
    color: "black", // Change the text color to black
    fontSize: 15,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingBottom: 10,
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  navigationText: {
    color: "blue",
    fontSize: 18,
  },
});

export default IntroScreens;
