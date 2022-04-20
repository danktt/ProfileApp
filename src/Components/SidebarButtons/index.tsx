import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import IconHome from "react-native-vector-icons/Entypo";
import IconPerson from "react-native-vector-icons/Ionicons";

export const SidebarButton = ({ curentTab, setCurentTab, title, icon }) => {
  return (
    <TouchableOpacity onPress={() => setCurentTab(title)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: curentTab == title ? "#fff" : "transparent",
          borderRadius: 8,
          paddingLeft: 20,
          paddingRight: 40,
          marginTop: 10,
        }}
      >
        {<IconPerson name={icon} size={25} color={curentTab == title ? "#44A1A0" : "#fff"}></IconPerson>}

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: curentTab == title ? "#44A1A0" : "#fff",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
