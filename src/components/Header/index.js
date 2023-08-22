import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

import logo from "../../assets/Logo.png";
import iconBell from "../../assets/bell.png";
import iconQrCode from "../../assets/qrcode.png";
import iconBack from "../../assets/back.png";

const Header = ({
  showNotification,
  showBack,
  pressNotification,
  lateCount,
  navigation,
}) => {
  const backPage = () => {
    navigation.navigate("Home");
  };

  const openQrCode = () => {
    navigation.navigate("QrCode");
  };

  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity style={styles.qrcode} onPress={backPage}>
          <Image source={iconBack} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.qrcode} onPress={openQrCode}>
          <Image source={iconQrCode} />
        </TouchableOpacity>
      )}

      <Image source={logo} style={styles.logo} />

      {showNotification && lateCount != 0 && (
        <TouchableOpacity
          style={styles.notification}
          onPress={pressNotification}
        >
          <Image source={iconBell} />
          <View style={styles.circle}>
            <Text style={styles.notificationText}>{lateCount}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
