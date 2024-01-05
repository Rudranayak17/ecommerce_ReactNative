import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modal, Portal, Provider, Searchbar } from "react-native-paper";
import Header from "../component/header/Header";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import store from "../assets/images/store.png";
import service from "../assets/images/service.png";
import rent from "../assets/images/rent.png";
import ambulance from "../assets/images/ambulance.png";
import pharmacy from "../assets/images/pharmacy.png";
import doctor from "../assets/images/doctor.png";
import homeCare from "../assets/images/homeCare.png";
import learningCenter from "../assets/images/learningCenter.png";
import support from "../assets/images/support.png";
import Footer from "../component/footer/footer";

import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);

  const componentScreen = [
    {
      image: store,
      title: "STORE",
    },
    {
      screenName: "services",
      image: service,
      title: "SERVICE",
    },
    {
      image: rent,
      title: "RENT",
    },
    {
      image: ambulance,
      title: "AMBULANCE",
    },

    {
      image: pharmacy,
      title: "PHARMACY",
    },
    {
      image: doctor,
      title: "DOCTOR",
    },
    {
      image: homeCare,
      title: "HOME CARE",
    },
    {
      image: learningCenter,
      title: "LEARNING CENTER",
    },
    {
      image: support,
      title: "SUPPORT",
    },
  ];

  const openSearchModal = () => setSearchVisible(true);
  const closeSearchModal = () => {
    setSearchVisible(false);
    setSearchQuery("");
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search query:", searchQuery);

    // For demonstration purposes, let's set some dummy search results
    const results = [
      { id: 1, title: "Result 1" },
      { id: 2, title: "Result 2" },
      { id: 3, title: "Result 3" },
    ];

    setSearchResults(results);
  };

  return (
    <Provider>
      <SafeAreaView style={styles.safeArea}>
        <LinearGradient
          colors={["#FFFFFF", "#FFFFFF", "#C4B5DC"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.9 }}
          style={styles.linearGradient}
        >
          <View style={styles.container}>
            <Header />

            {/* Search Icon */}
            <TouchableOpacity
              onPress={openSearchModal}
              style={styles.searchButton}
            >
              <Icon name="search" size={24} color="black" />
              <View style={styles.verticalLine} />
              <Text style={styles.searchButtonText}>
                Search your material here...
              </Text>
            </TouchableOpacity>

            {/* Search Modal */}
            <Portal>
              <Modal
                visible={isSearchVisible}
                onDismiss={closeSearchModal}
                contentContainerStyle={{
                  backgroundColor: "#FFFFFF",
                  padding: 14,
                  borderRadius: 8,
                  flex: 1,
                }}
              >
                {/* Close Icon */}
                <Searchbar
                  style={{ marginTop: 12 }}
                  icon={() => (
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 1,
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity onPress={closeSearchModal}>
                        <AntDesign
                          style={{ marginLeft: 10 }}
                          name="arrowleft"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                      <View style={styles.verticalLine} />
                    </View>
                  )}
                  placeholder="Search..."
                  onChangeText={(query) => setSearchQuery(query)}
                  value={searchQuery}
                  onSubmitEditing={handleSearch}
                />

                {/* Display Search Results */}
                <FlatList
                  data={searchResults}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <View style={styles.resultItem}>
                      <Text>{item.title}</Text>
                    </View>
                  )}
                />
              </Modal>
            </Portal>

            <View style={styles.service}>
              <Text style={{ fontSize: 17, fontWeight: "500", marginLeft: 10 }}>
                Choose Service
              </Text>
            </View>
            <FlatList
              data={componentScreen}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3} // Set the number of columns
              contentContainerStyle={styles.gridContainer}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.gridItem}
                  onPress={() => {
                    if (item.title !== "SERVICE") {
                      openModal();
                    } else if (item.screenName === "services") {
                      navigation.navigate("services");
                    } else {
                      // Handle other screens if needed
                    }
                  }}
                >
                  <Image source={item.image} style={styles.iconImage} />
                  <Text style={styles.iconTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <Modal
            transparent={true}
            visible={isModalVisible}
            animationType=""
            onDismiss={() => setModalVisible(false)}
          >
            {/* <TouchableWithoutFeedback onPress={() => setModalVisible(false)}> */}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View style={styles.modalBackground}>
                <View
                  style={{
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 21,
                    width: "80%",
                    height: "85%",

                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    borderRadius: 23,
                    // shadowOpacity: 0.2, // Opacity of the shadow
                    // shadowRadius: 4, // Radius of the shadow
                    // elevation: 3,
                    // padding: 20,
                  }}
                >
                  <AntDesign name="infocirlceo" color={"#FE8B16"} size={60} />
                  <Text style={{ fontSize: 21 }}>This feature is upcoming</Text>
                  <TouchableOpacity
                    style={{
                      width: "80%",
                      backgroundColor: "#FE8B16",

                      borderRadius: 20,
                      paddingVertical: 10,
                    }}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        // backgroundColor: "#FE8B16",
                        borderRadius: 20,
                        fontSize: 17,
                        color: "white",
                      }}
                    >
                      Okay
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            {/* </TouchableWithoutFeedback> */}
          </Modal>
   
        </LinearGradient>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    // flex: 1,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },

  modalContent: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "85%",
    borderRadius: 23,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 20,
  },
  modalButton: {
    width: "80%",
    backgroundColor: "#FE8B16",
    borderRadius: 20,
    paddingVertical: 10,
  },
  modalButtonText: {
    textAlign: "center",
    backgroundColor: "#FE8B16",
    borderRadius: 20,
    fontSize: 17,
    color: "white",
  },
  resultItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  searchButton: {
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 7,
    borderWidth: 1,
    borderRadius: 20,
    height: "7%",
    width: "95%",
  },
  verticalLine: {
    borderRightWidth: 1,
    borderRightColor: "#CCCCCC",
    height: 24,
    marginHorizontal: 10,
  },
  searchButtonText: {
    marginLeft: 10,
    flex: 1,
  },
  service: {
    marginTop: 12,
  },
  closeIcon: {
    position: "absolute",
    top: 30,
    left: 10,
    zIndex: 1,
  },
  gridContainer: {
    paddingHorizontal: 16, // Adjust the horizontal padding for spacing
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    margin: 8, // Add margin for spacing between items
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "white", // Background color
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Opacity of the shadow
    shadowRadius: 4, // Radius of the shadow
    elevation: 3, /// Set border radius for a curved look
  },
  iconImage: {
    width: 70,
    height: 40,
    resizeMode: "contain",
  },
  iconTitle: {
    marginTop: 8,
    fontSize: 9,
    textAlign: "center",
  },
});

export default Home;
