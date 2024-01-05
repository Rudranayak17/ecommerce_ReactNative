import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Header from "../component/header/Header";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
  const navigation = useNavigation();
  const [avatarSource, setAvatarSource] = useState({
    uri: "https://img.lovepik.com/element/45001/3052.png_860.png",
  });

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const handleEditAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      setAvatarSource({ uri: selectedAsset.uri });
    }
  };

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
          {/* Avatar, Name, and Email Section */}
          <View style={styles.profileSection}>
            <TouchableWithoutFeedback onPress={handleEditAvatar}>
              <Image style={styles.avatar} source={avatarSource} />
            </TouchableWithoutFeedback>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={handleEditAvatar}
            >
              {/* Add your edit icon image here */}
              <Icon name="edit-2" color={"white"} size={10} />
            </TouchableOpacity>
            <View style={styles.textBox}>
              <Text style={{ color: "gray" }}>Name :</Text>
              <Text style={[styles.name, { width: "70%" }]}>John Doe</Text>
            </View>
            <View style={styles.textBox}>
              <Text style={{ color: "gray" }}>Email :</Text>
              <Text style={[styles.email, { width: "70%" }]}>
                john.doe@example.com
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.editProfile}
            onPress={()=>{navigation.navigate("editprofile")}}
          >
            {/* Add your edit icon image here */}
            <Icon name="edit-2" color={"white"} size={15} />
            <Text style={{ color: "white" }}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
 
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
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative", // Make the container relative for absolute positioning of the edit icon
  },
  avatar: {
    marginTop: "30%",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  textBox: {
    height: "13%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "white", // Background color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Opacity of the shadow
    shadowRadius: 4, // Radius of the shadow
    elevation: 3,
    padding: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "black",
  },
  editIcon: {
    position: "absolute",
    top: "45%", // Adjust as needed to position the edit icon
    left: "50%", // Adjust as needed to position the edit icon
    backgroundColor: "purple",
    padding: 10,

    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
  },


  editProfile:{
    position: "absolute",
    bottom: "9%",
    right: "7%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "purple",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  }
});

export default Profile;
