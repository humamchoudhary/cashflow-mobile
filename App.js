import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Index from "./src/Pages/Index";
import Login from "./src/Pages/Login";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }}  name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }}  name="Index" component={Index} />
      </Stack.Navigator>
      
      
    </NavigationContainer>
  );
};

export default App;
