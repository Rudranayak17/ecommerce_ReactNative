import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Image,
} from "react-native";

import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = ({ isVisible, onClose }) => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isVisible, slideAnim]);

  const modalTranslateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-600, 0], // Adjust this value based on your desired initial position
  });

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <Animated.View
            style={[
              styles.drawerContent,
              { transform: [{ translateX: modalTranslateX }] },
            ]}
          >
            <View style={styles.profile}>
              <Image
                source={{
                  uri: "https://img.lovepik.com/element/45001/3052.png_860.png",
                }}
                style={styles.profileImage}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.phoneNumber}>+91 8767989624</Text>
              </View>
            </View>
            <View style={styles.drawerItems}>
              {/* <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => navigation.navigate("home")}
              >
                <Icon name="home" size={24} />
                <Text style={styles.drawerItem}>Home</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("About pressed")}
              >
                <View style={{ flexDirection: "row", gap: 25 }}>
                  <Ionicons name="store-settings-outline" size={24} />
                  <Text style={styles.drawerItem}>Store</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("Contact Us pressed")}
              >
                <View style={{ flexDirection: "row", gap: 25 }}>
                  <AntDesign name="customerservice" size={24} />
                  <Text style={styles.drawerItem}>Service</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("Support pressed")}
              >
                <View style={{ flexDirection: "row", gap: 27 }}>
                  <FontAwesome name="hospital-o" size={24} />
                  <Text style={styles.drawerItem}>Rent</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("Support pressed")}
              >
                <View style={{ flexDirection: "row", gap: 25 }}>
                  <FontAwesome name="ambulance" size={24} />
                  <Text style={styles.drawerItem}>Ambulance</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("Support pressed")}
              >
                <View style={{ flexDirection: "row", gap: 27 }}>
                  <MaterialIcons name="local-pharmacy" size={24} />
                  <Text style={styles.drawerItem}>Pharmacy</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("Support pressed")}
              >
                <View style={{ flexDirection: "row", gap: 27 }}>
                  <Fontisto name="doctor" size={24} />
                  <Text style={styles.drawerItem}>Doctor</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("Support pressed")}
              >
                <View style={{ flexDirection: "row", gap: 25 }}>
                  <Fontisto name="nursing-home" size={24} />
                  <Text style={styles.drawerItem}>Home Care</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("Support pressed")}
              >
                <View style={{ flexDirection: "row", gap: 25 }}>
                  <MaterialIcons name="personal-video" size={24} />
                  <Text style={styles.drawerItem}>Learning Center</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => console.log("Support pressed")}
              >
                <View style={{ flexDirection: "row", gap: 25 }}>
                  <MaterialIcons name="support-agent" size={24} />
                  <Text style={styles.drawerItem}>Support</Text>
                </View>
                <AntDesign style={{ opacity: 0.4 }} name="right" size={20} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  drawerContent: {
    backgroundColor: "#EDE7F3",
    // padding: 20,
    height: "100%",
    borderTopRightRadius: 10,
    width: "80%",
  },
  drawerItems: {},
  drawerItem: {
    fontSize: 18,
    // marginBottom: 10,
  },
  iconStyle: {
    flexDirection: "row",
    paddingHorizontal: "10%",
    justifyContent: "space-between",

    paddingVertical: 5,
    alignItems: "center",

    gap: 25,
    marginBottom: "4%",
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },

  profile: {
    flexDirection: "column",
    backgroundColor: "#40128C",
    paddingVertical: "20%",

    height: "28%",
    alignItems: "center",
    marginBottom: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  phoneNumber: {
    fontSize: 16,
    color: "gray",
  },
});

export default CustomDrawer;
