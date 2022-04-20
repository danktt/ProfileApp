import { Animated, Image, Text, TouchableOpacity,  } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Profile from '../../../assets/photo.jpg';

function ProfileHome({
  curentTab,
  showMenu,
  setShowMenu,
  scaleValue,
  offsetValue,
  closeButton,
}) {
  return (
    <Animated.View
      style={{
        flexGrow: 1,
        position: "absolute",
        backgroundColor: "#fff",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 40,
        borderRadius: showMenu ? 15 : 0,

        transform: [
          { scale: scaleValue },
          { translateX: offsetValue },
          { translateX: closeButton },
        ],
      }}
    >
      <TouchableOpacity
        onPress={() => {
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true,
          }).start();

          Animated.timing(offsetValue, {
            toValue: showMenu ? 0 : 220,
            duration: 300,
            useNativeDriver: true,
          }).start();

          Animated.timing(closeButton, {
            toValue: !showMenu ? -30 : 0,
            duration: 300,
            useNativeDriver: true,
          }).start();

          setShowMenu(!showMenu);
        }}
      >
        <Icon name={showMenu ? "close" : "menu"} size={35} />
      </TouchableOpacity>
      <Text
        style={{ fontSize: 30, fontWeight: "bold", color: "#000", paddingTop: 20 }}
      >
        {curentTab}
      </Text>

      <Image
        source={Profile}
        style={{ width: "100%", height: 300, borderRadius: 15, marginTop: 30 }}
      ></Image>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          paddingTop: 15,
          paddingBottom: 5,
        }}
      >
        Danilo Miranda
      </Text>

      <Text style={{fontSize: 16}}>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nam neque
        illum inventore, corrupti sequi quas ut id, illo eveniet cumque rerum
        natus, sit itaque. Quaerat totam error quia fuga.
      </Text>
    </Animated.View>
  );
}

export default ProfileHome;
