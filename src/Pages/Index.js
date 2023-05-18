import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import Home from "./Home";
import QrScreen from "./QrScreen";
import { colors } from "../../utils";
import { StatusBar, View } from "react-native";
import Stats from "./Stats";
import WalletScreen from "./WalletScreen";
import Profile from "./Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Index = ()=>{
    return (<View style={{ flex: 1, backgroundColor: colors.bg }}>
        <StatusBar animated={true} backgroundColor={colors.bg} />
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.cta,
                tabBarInactiveTintColor: colors.unfocus,

                tabBarStyle: {
                    backgroundColor: colors.bg,
                    paddingBottom: 5,
                    paddingTop: 5,
                    borderTopWidth: 0,
                    elevation: 10,
                    shadowColor: colors.cta,
                    shadowOpacity: 0.4,
                    shadowRadius: 25,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },

                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = "ios-home";
                    } else if (route.name === "Transactions") {
                        iconName = "ios-list";
                    } else if (route.name === "Budget") {
                        iconName = "ios-pie-chart";
                    } else if (route.name === "Profile") {
                        iconName = "ios-person";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "",

                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "ios-home" : "ios-home-outline"}
                            size={focused ? 24 : 18}
                            color={focused ? colors.cta : "gray"}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Budget2"
                component={Stats}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "stats-chart" : "stats-chart-outline"}
                            size={focused ? 24 : 18}
                            color={focused ? colors.cta : "gray"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Qr"
                component={QrScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? "qrcode-scan" : "line-scan"}
                            size={focused ? 24 : 18}
                            color={focused ? colors.cta : "gray"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="wallet"
                component={WalletScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "wallet" : "wallet-outline"}
                            size={focused ? 24 : 18}
                            color={focused ? colors.cta : "gray"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name={focused ? "user-circle" : "user-circle-o"}
                            size={focused ? 24 : 18}
                            color={focused ? colors.cta : "gray"}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    </View>)
}

export default Index;