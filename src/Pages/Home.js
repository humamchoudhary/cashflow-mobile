import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
} from "react-native";
import { colors } from "../../utils";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import TransactionHistroy from "../components/TransactionHistroy";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";

const RecieveScreen = ({ setRecieve, data }) => {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(true);

  // console.log(qrCodeData)
  useEffect(() => {
    setLoading(true);
    setImageUrl(`data:image/png;base64,${data}`);
    setLoading(false);
  }, [data]);

  function handleGoBack() {
    setRecieve(false);
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.buttonText, { fontSize: 18, textAlign: "center" }]}>
        Recieve Amount
      </Text>
      <View style={styles.inputContainer}></View>

      <TouchableOpacity onPress={handleGoBack}>
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 10,
          }}
        >
          <Ionicons name="arrow-back-circle-outline" size={30} color="red" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.buttonText,
            {
              fontSize: 18,
              fontStyle: "normal",
              fontFamily: "Bold",
              textAlign: "center",
              marginBottom: 10,
            },
          ]}
        >
          Scan Qr
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 250, height: 250 }}
          />
        )}
      </View>
    </View>
  );
};

const DropdownMenu = ({ options, onSelectOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
};
const SendScreen = ({ setSend }) => {
  const [amount, setamount] = useState();
  const [accnumber, setaccnumber] = useState();
  const [reason, setreason] = useState();

  function handleGoBack() {
    setSend(false);
  }
  function handleSend() {
    setSend(true);
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.buttonText, { fontSize: 18, textAlign: "center" }]}>
        Send Amount Screen
      </Text>

      <TouchableOpacity onPress={handleGoBack}>
        <View
          style={{
            backgroundColor: colors.bg,
            marginTop: 10,
          }}
        >
          <Ionicons name="arrow-back-circle-outline" size={30} color="red" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppTextInput
          value={accnumber}
          setValue={setaccnumber}
          placeholder="Account number"
          accnumber={true}
        />
        <AppTextInput
          value={amount}
          setValue={setamount}
          placeholder="Amount"
          amount={true}
        />
        <AppTextInput
          value={reason}
          setValue={setreason}
          placeholder="Reason for transaction"
          reason={true}
        />
        <View style={{ alignSelf: "center" }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <Text style={{ fontSize: 16 }}>
                  {selectedType ? selectedType : "Select Transaction Reascon"}
                </Text>
              </TouchableOpacity>
            }
          >
            <Menu.Item
              onPress={() => handleDropdownChange("Option 1")}
              title="Option 1"
            />
            <Divider />
            <Menu.Item
              onPress={() => handleDropdownChange("Option 2")}
              title="Option 2"
            />
            <Divider />
            <Menu.Item
              onPress={() => handleDropdownChange("Option 3")}
              title="Option 3"
            />
          </Menu>
        </View>
        <TouchableOpacity onPress={handleSend}>
          <LinearGradient
            colors={[colors.cta, colors.purple]}
            start={{ x: 0, y: 0.09 }}
            end={{ x: 1.5, y: 1.5 }}
            angle={102}
            style={styles.sendButton}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = ({ user }) => {
  const [send, setSend] = useState(false);
  const [recive, setRecieve] = useState(false);

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Regular: require("../fonts/Inter-Regular.ttf"),
    Medium: require("../fonts/Inter-Medium.ttf"),
    SemiBold: require("../fonts/Inter-SemiBold.ttf"),
    Bold: require("../fonts/Inter-Bold.ttf"),
    Italic: require("../fonts/Lato-BoldItalic.ttf"),
  });

  const handleSendPress = () => {
    setSend(true);
  };

  if (fontsLoaded && Object.keys(user).length > 0 && !send && !recive) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.fullNameText}>{user.full_name}</Text>
        <LinearGradient
          colors={[colors.cta, colors.purple]}
          start={{ x: 0, y: 0.09 }}
          end={{ x: 1.5, y: 1.5 }}
          angle={102}
          style={styles.inner}
        >
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceAmount}>
            {user.currency} {user.balance}
          </Text>
          <Text style={styles.monthlyIncomingLabel}>This month's incoming</Text>
          <Text style={styles.monthlyIncomingAmount}>
            {user.currency} {user.balance}
          </Text>
        </LinearGradient>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.btnRed]}
            onPress={() => {
              setRecieve(true);
            }}
          >
            <Text style={styles.buttonText}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.btnOrg]}
            onPress={handleSendPress}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
        <TransactionHistroy data={user} />
      </View>
    );
  }

  if (send) {
    return <SendScreen setSend={setSend} />;
  }
  if (recive) {
    return <RecieveScreen setRecieve={setRecieve} data={user.qr} />;
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.bg,
  },
  welcomeText: {
    color: colors.light,
    fontSize: 15,
    fontFamily: "Italic",
  },
  fullNameText: {
    color: colors.light,
    fontSize: 25,
    fontFamily: "Bold",
    marginBottom: 10,
  },
  inner: {
    backgroundColor: colors.cta,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  balanceLabel: {
    color: "white",
    fontSize: 15,
    fontFamily: "Medium",
    marginTop: 10,
  },
  balanceAmount: {
    marginTop: -3,
    color: "white",
    fontSize: 25,
    fontFamily: "Bold",
  },
  monthlyIncomingLabel: {
    marginTop: 15,
    color: "white",
    fontSize: 15,
    fontFamily: "Medium",
  },
  monthlyIncomingAmount: {
    marginTop: -2,
    color: "white",
    fontSize: 25,
    fontFamily: "Bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  btnRed: { backgroundColor: colors.red },
  btnOrg: { backgroundColor: colors.orange },
  button: {
    padding: 15,
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.light,
    fontSize: 16,
  },
  sendButton: {
    borderRadius: 5,
    width: 90,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: colors.light,
  },
});
