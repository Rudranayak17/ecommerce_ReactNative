import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import booking from "../assets/images/booking.png";
import enquiries from "../assets/images/enquiries.png";

import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native";
import { TextInput } from "react-native";

const Services = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Bookings");
  const [visible, setvisible] = useState(false);
  const [urgencyModalVisible, setUrgencyModalVisible] = useState(false);
  const [complaintData, setComplaintData] = useState({
    service: "",
    title: "",
    equipmentName: "",
    model: "",
    serialNo: "",
    bill: null,
    modeOfUrgency: "Normal",
    companyType: "",
  });

  const modalRef = useRef(null);

  const openModal = () => {
    setvisible(false);
  };

  const closeModal = () => {
    // modalRef.current?.closeModal();
    setvisible(false);
    setUrgencyModalVisible(false);
  };
  const openUrgencyModal = () => {
    setUrgencyModalVisible(true);
  };

  const closeUrgencyModal = () => {
    setUrgencyModalVisible(false);
  };
  const selectUrgency = (urgency) => {
    setComplaintData((prevData) => ({
      ...prevData,
      modeOfUrgency: urgency,
    }));
    closeUrgencyModal();
  };
  const lastInputRef = useRef(null);

  const submitComplaint = () => {
    // Implement your submission logic here
    console.log("Complaint Data:", complaintData);
    closeModal();
  };
  const renderItem = ({ item }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{item.label}</Text>
      {item.type === "TouchableOpacity" ? (
        <TouchableOpacity
          onPress={item.onPress}
          style={styles.touchableOpacity}
        >
          <Text>{item.value}</Text>
        </TouchableOpacity>
      ) : (
        <TextInput
         ref={item.key === 'companyType' ? lastInputRef : null}
          placeholder={item.placeholder}
          value={complaintData[item.key]}
          onChangeText={(text) =>
            setComplaintData((prevData) => ({
              ...prevData,
              [item.key]: text,
            }))
          }
          style={styles.textInput}
        />
      )}
    </View>
  );

  const complaintInputs = [
    {
      label: "Service/PM",
      key: "service",
      type: "TextInput",
      placeholder: "Enter Service/PM",
    },
    {
      label: "Title",
      key: "title",
      type: "TextInput",
      placeholder: "Enter Title",
    },
    
    {
      label: "Bill",
      key: "bill",
      type: "FileInput",
    },
    {
      label: "Prefer Company/Dealer/Freelancer/Any",
      key: "companyType",
      type: "TextInput",
      placeholder: "Enter Company/Dealer/Freelancer/Any",
    },
    {
      label: "Serial No",
      key: "serialNo",
      type: "TextInput",
      placeholder: "Enter Serial No",
    },
    {
      label: "Equipment Name",
      key: "equipmentName",
      type: "TouchableOpacity",
      onPress: () => console.log("Equipment Name Pressed"),
    },
    {
      label: "Model",
      key: "model",
      type: "TouchableOpacity",
      onPress: () => console.log("Model Pressed"),
    },

    {
      label: "Mode of Urgency",
      key: "modeOfUrgency",
      type: "TouchableOpacity",
      onPress: openUrgencyModal,
    },
    
  ];
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#C4B5DC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.9 }}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{selectedTab}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",

            borderRadius: 20,
            marginHorizontal: "5%",
            marginVertical: 25,
            justifyContent: "space-between",
            backgroundColor: "white",
            shadowColor: "#000", // Shadow color
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.9, // Opacity of the shadow
            shadowRadius: 4, // Radius of the shadow
            elevation: 5,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: selectedTab === "Bookings" ? "#5B62BC" : "white",
              borderRadius: 20,
            }}
            onPress={() => setSelectedTab("Bookings")}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                paddingHorizontal: "13%",
                paddingVertical: "2%",
                color: selectedTab === "Bookings" ? "white" : "#5B62BC",
              }}
            >
              Bookings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("Enquiries")}
            style={{
              backgroundColor:
                selectedTab === "Enquiries" ? "#5B62BC" : "white",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                paddingHorizontal: "13%",
                paddingVertical: "2%",
                color: selectedTab === "Enquiries" ? "white" : "#5B62BC",
              }}
            >
              Enquiries
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 5,
          }}
        >
          {selectedTab === "Bookings" ? (
            <>
              <Image
                source={booking}
                style={{ width: "70%", height: "50%" }}
                resizeMode="cover"
              />

              <Text
                style={{
                  color: "#5B62BC",
                  fontWeight: "500",
                  marginTop: 10,
                }}
              >
                You haven't made any booking yet
              </Text>
              <TouchableOpacity
                onPress={openModal}
                style={{
                  marginTop: 15,
                  borderWidth: 1,
                  borderColor: "#D79051",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: "10%",
                  paddingVertical: "2%",
                }}
              >
                <Text
                  style={{
                    color: "#D79051",
                    fontWeight: "500",
                  }}
                >
                  Choose Services
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Image
                source={enquiries}
                style={{ width: "70%", height: "50%" }}
                resizeMode="cover"
              />

              <Text
                style={{
                  color: "#5B62BC",
                  fontWeight: "500",
                  marginTop: 10,
                }}
              >
                You haven't made any enquiries yet
              </Text>

              {/* Render the plus icon only in the "Enquiries" tab */}
              <TouchableOpacity
                style={styles.pulseButton}
                onPress={() => setvisible(true)}
              >
                <Icon name="add" size={40} color="white" />
              </TouchableOpacity>
            </>
          )}
        </View>
      </LinearGradient>

      {/* Modal for Choose Services */}
      <Modal
        style={{ paddingTop: 17 }}
        animationType="slide"
        onBackButtonPress={closeModal}
        visible={visible} // Set to true to show the modal initially
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setvisible(false)}
        >
          <Icon
            name="arrow-back"
            size={30}
            style={styles.backButton}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Raise a Complaint</Text>
          <FlatList
       
            data={complaintInputs}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={submitComplaint}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
       transparent={true}
        animationType="none"
        visible={urgencyModalVisible}
        onRequestClose={closeUrgencyModal}
      >
        <TouchableWithoutFeedback onPress={closeUrgencyModal}>
          <View style={styles.modalBackground}>
            <View
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
                height: "35%",
                shadowColor: "#000", // Shadow color
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                borderRadius:23,
                shadowOpacity: 0.2, // Opacity of the shadow
                shadowRadius: 4, // Radius of the shadow
                elevation: 3,
                padding: 20,
              }}
            >
              <Text style={styles.modalText}>Mode of Urgency</Text>
              <TouchableOpacity
                style={styles.urgencyButton}
                onPress={() => selectUrgency("Normal")}
              >
                <Text style={styles.urgencyButtonText}>Normal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.urgencyButton}
                onPress={() => selectUrgency("Urgent")}
              >
                <Text style={styles.urgencyButtonText}>Urgent</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.urgencyButton}
                onPress={() => selectUrgency("Emergency")}
              >
                <Text style={styles.urgencyButtonText}>Emergency</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center items horizontally
    marginTop: "10%",
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
  },
  backButton: {
    position: "absolute",
   
    left: 10,
  },
  headerTitle: {
    color: "black",
    fontWeight: "800",
    fontSize: 20,
    textAlign: "center",
  },
  
  pulseButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#5B62BC",
    borderRadius: 50,
    padding: 12,
    elevation: 5,
  },
  
  modalText: {
    marginVertical: 15,
    fontSize: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#5B62BC",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
  submitButton: {
    backgroundColor: "#5B62BC",
    padding: 10,
    borderRadius: 5,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    width: "80%",
  },
  inputContainer: {
    marginBottom: 15,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    width: "80%",
  },
  touchableOpacity: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    width: "80%",
    alignItems: "center",
  },
  urgencyButton: {
    backgroundColor: "#5B62BC",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: "center",
    alignItems: "center",
  },
  urgencyButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Services;
