// import { TouchableOpacity } from 'react-native';
import { useRef, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { SidebarButton } from "../../Components/SidebarButtons";
import ProfileHome from "../ProfileHome";
import {
  SafeAreaView,
  ViewAvatar,
  Avatar,
  AvatarName,
  TextOpacity,
} from "./styles";

// SidebarButtonProps = {};

export default function Home() {
  const [curentTab, setCurentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButton = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView>
      <ViewAvatar style={{ justifyContent: "flex-start", padding: 20 }}>
        <Avatar source={{ uri: "https://github.com/danktt.png" }}></Avatar>
        <AvatarName>Danilo Miranda</AvatarName>

        <TouchableOpacity>
          <TextOpacity>View Profile</TextOpacity>
        </TouchableOpacity>

        <View>
          {
            // Tab Bar Button...
          }

          <SidebarButton
            curentTab={curentTab}
            setCurentTab={setCurentTab}
            title="Home"
            icon="home"
          />

          <SidebarButton
            curentTab={curentTab}
            setCurentTab={setCurentTab}
            title="About"
            icon="person"
          />

          <SidebarButton
            curentTab={curentTab}
            setCurentTab={setCurentTab}
            title="Contact"
            icon="book"
          />
          <SidebarButton
            curentTab={curentTab}
            setCurentTab={setCurentTab}
            title="Experience"
            icon="earth"
          />
        </View>
      </ViewAvatar>

      <ProfileHome
        curentTab={curentTab}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        scaleValue={scaleValue}
        offsetValue={offsetValue}
        closeButton={closeButton}
      />
    </SafeAreaView>
  );
}
