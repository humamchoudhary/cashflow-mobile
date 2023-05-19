import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Index from "./src/Pages/Index";
import Login from "./src/Pages/Login";
import store from './src/data/user'
import { Provider } from "react-redux";
const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }}  name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }}  name="Index" component={Index} />
      </Stack.Navigator>
      
      
    </NavigationContainer>
    </Provider>
  );
};

export default App;
