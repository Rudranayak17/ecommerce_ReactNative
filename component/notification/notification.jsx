import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const NotificationsScreen = () => {
  const navigation = useNavigation();
  const [notiData, setNotiData] = useState([]);

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.listItem}>
          <View style={styles.iconContainer}>
            <Icon name="notifications" size={30} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity onPress={() => console.log("delete")}>
          <Icon name="delete-forever" size={30} color="red" />
        </TouchableOpacity>
      </View>
      {notiData.length === 0 ? (
        <View style={styles.centeredContainer}>
          <Text style={styles.noNotificationText}>No Notification available</Text>
        </View>
      ) : (
        <FlatList
          data={notiData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: "10%",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  headerTitle: {
    color: 'black',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'justify',
  },
  listItem: {
    flexDirection: 'row',
    padding: 8,
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: '500',
    color: 'black',
    fontSize: 15,
  },
  description: {
    color: 'black',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
  },
  noNotificationText: {
    fontSize: 16,
    color: 'gray',
  },
  centeredContainer: {
    flex: 1,
    marginBottom:"10%",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationsScreen;
