import { RootSiblingParent } from "react-native-root-siblings";
import { Provider as PaperProvider } from "react-native-paper";
import Main from "./Main";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
