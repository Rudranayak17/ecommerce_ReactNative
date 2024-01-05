import { View, Text, BackHandler } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreens from "./screens/IntroScreen";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgetPassword from "./screens/ForgetPassword";
import Verify from "./screens/verify";
import Home from "./screens/Home";
import NotificationsScreen from "./component/notification/notification";
import Footer from "./component/footer/footer";
import VideoScreen from "./screens/VideoScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import { useEffect, useState } from "react";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";
import Services from "./screens/Services";

const Stack = createNativeStackNavigator();
const Main = () => {
  const navigation = useNavigation();
  const [currentRoute, setCurrentRoute] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentRouteName = navigation.getCurrentRoute()?.name || null;

      setCurrentRoute(currentRouteName);
    });

    return unsubscribe;
  }, [navigation]);

  const shouldShowFooter = ["home", "video", "favourite", "profile"].includes(
    currentRoute
  );

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const handleExit = () => {
    hideDialog();
    BackHandler.exitApp();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (currentRoute === "login") {
          handleExit();
          return true;
        } else if (currentRoute === "intro") {
          showDialog();
          return true;
        } else if (currentRoute === "home") {
          showDialog();
          return true;
        } else if (currentRoute === "video") {
          showDialog();
          return true;
        } else if (currentRoute === "favourite") {
          showDialog();
          return true;
        } else if (currentRoute === "profile") {
          showDialog();
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [currentRoute]);

  return (
    <>
      <Stack.Navigator
        initialRouteName="intro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="intro" component={IntroScreens} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="forgetpassword" component={ForgetPassword} />
          <Stack.Screen name="verify" component={Verify} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}
          />
          <Stack.Screen name="video" component={VideoScreen} />
          <Stack.Screen name="favourite" component={FavouriteScreen} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="editprofile" component={EditProfile} />
          <Stack.Screen name="services" component={Services} />
        </Stack.Group>
      </Stack.Navigator>
      {shouldShowFooter && <Footer />}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Exit App</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Do you want to exit from this app?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={handleExit}>Exit</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
export default Main;
