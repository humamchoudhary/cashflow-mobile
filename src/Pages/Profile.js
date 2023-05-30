import { View, Linking, Text } from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { useState ,useEffect} from "react";
const Profile = ({user}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(user);
  }, []);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });
  const handleCustomerServicePress = (url) => {
    // Replace the URL with the actual customer service web page URL
    Linking.openURL(url);
  };


  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "15%",
        backgroundColor: colors.bg,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <LinearGradient
        colors={[colors.cta, colors.purple]}
        start={{ x: 0, y: 0.09 }}
        end={{ x: 1.5, y: 1.5 }}
        angle={102}
        style={{
          borderRadius: 1000,
          padding: 20,
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <AntDesign name="user" size={150} color="white" />
      </LinearGradient>

      <Text
        style={{
          color: colors.light,
          fontSize: 15,
          fontFamily: "Regular",
          textAlign: "left",
          paddingTop: 10,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        Name
      </Text>
   
      <Text
        style={{
          color: colors.light,
          fontSize: 20,
          fontFamily: "Bold",
          textAlign: "left",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        {data.full_name}
      </Text>

      

      <Text
        style={{
          color: colors.light,
          fontSize: 15,
          fontFamily: "Regular",
          textAlign: "left",
          paddingTop: 15,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        Acc#
      </Text>
      <Text
        style={{
          color: colors.light,
          fontSize: 20,
          fontFamily: "Bold",
          textAlign: "left",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        {data.account_number}
      </Text>
      <Text
        style={{
          color: colors.light,
          fontSize: 15,
          fontFamily: "Regular",
          textAlign: "left",
          paddingTop: 15,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        Email
      </Text>
      <Text
        style={{
          color: colors.light,
          fontSize: 20,
          fontFamily: "Bold",
          textAlign: "left",
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        {data.email}
      </Text>


      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          marginTop: 20,
          borderTopColor: "grey",
          borderTopWidth: 2,
        }}
        onTouchEndCapture={() => {
          handleCustomerServicePress('https://gogoanime.cl/')
        }}

      >

        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 20,
            paddingLeft: 25,
          }}
        >
          <Feather name="phone" size={15} color={colors.cta} />
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 15,
              fontFamily: "Bold",
            }}
          >
            Customer Service
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
        onTouchEndCapture={() => {
          Linking.openURL('http://localhost:3000/private')

        }}
      >
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 20,
            paddingLeft: 25,
          }}
        >
          <Ionicons
            name="shield-checkmark-outline"
            size={20}
            color={colors.cta}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
            marginTop: 20,
          }}

        >
          <Text
            style={{
              color: colors.light,
              fontSize: 15,
              fontFamily: "Bold",
            }}
          >
            Private Policy
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
        onTouchEndCapture={() => {
          Linking.openURL('http://localhost:3000/terms')
        }}
      >
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 20,
            paddingLeft: 25,
          }}
        >
          <Ionicons name="document-text-outline" size={20} color={colors.cta} />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 15,
              fontFamily: "Bold",
            }}
          >
            Terms and Conditions
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          marginTop: 20,
          borderTopColor: "grey",
          borderTopWidth: 2,
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
        onTouchEndCapture={() => {
          navigation.navigate('Login')
        }}
      >
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 20,
            paddingLeft: 25,
          }}
        >
          <Feather name="log-out" size={20} color={colors.red} />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.red,
              fontSize: 15,
              fontFamily: "Bold",
            }}
          >
            Log Out
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
