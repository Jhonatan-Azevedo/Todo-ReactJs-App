import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styles from "./styles";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Network from "expo-network";
import colors from "../../utils/colors";

const Qrcode = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const getMacaddress = async () => {
    try {
      const mac = await Network.getIpAddressAsync();
      Alert.alert(`Seu número é: ${mac}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    if (data === "getmacaddress") {
      return getMacaddress();
    }

    return Alert.alert("QrCode Inválido!");
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.secondary} />
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        <View style={styles.header}>
          <Text style={styles.headerText}>Conectar com minha conta na web</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.textButton}>VOLTAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                scanned ? styles.buttonScanActive : styles.buttonScanInative
              }
              onPress={() => setScanned(false)}
            >
              <Text style={styles.textButton}>SCAN NOVAMENTE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Qrcode;
