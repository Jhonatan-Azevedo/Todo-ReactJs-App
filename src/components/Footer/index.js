import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import iconAdd from "../../assets/add.png";
import iconSave from "../../assets/save.png";

const Footer = ({ icon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={icon === "add" ? iconAdd : iconSave}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Todo - Organizando sua vida</Text>
    </View>
  );
};

export default Footer;
