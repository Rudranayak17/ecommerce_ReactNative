import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from './CustomDrawer';
import { useNavigation } from '@react-navigation/native';
import NotificationsScreen from '../notification/notification';

const Header = () => {
  const navigation = useNavigation();
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  const navigateToNotifications = () => {
    navigation.navigate('NotificationsScreen'); // Use the correct screen name from your navigation stack
  };

  return (
    <>
      <Appbar.Header style={styles.header}>
        {/* Left side of the header */}
        <Appbar.Action icon="menu" size={30} onPress={toggleDrawer} />

        {/* Title of the header */}
        <Appbar.Content title="Mavy Teach" titleStyle={styles.titleStyle} />

        {/* Right side of the header */}
        <Appbar.Action icon={() => <Icon name="notifications" size={24} />} onPress={navigateToNotifications} />

        {/* Avatar */}
        <Appbar.Action
          icon={() => (
            <Avatar.Image
              size={24}
              source={{ uri: 'https://img.lovepik.com/element/45001/3052.png_860.png' }}
            />
          )}
          onPress={() => console.log('Avatar pressed')}
        />
      </Appbar.Header>

      {/* Render the CustomDrawer based on visibility state */}
      <CustomDrawer isVisible={isDrawerVisible} onClose={toggleDrawer} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C4B5DC',
    height: 60,
  },
  titleStyle: {
    fontSize: 18,
  },
});

export default Header;
