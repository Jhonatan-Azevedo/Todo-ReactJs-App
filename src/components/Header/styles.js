import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: colors.secondary,
    borderBottomWidth: 5,
    borderBottomColor: colors.primary,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 53,
    marginBottom: 15,
  },

  notification: {
    position: "absolute",
    right: 20,
    bottom: 15,
  },

  circle: {
    backgroundColor: colors.white,
    borderRadius: 50,
    width: 20,
    alignItems: "center",
    position: "absolute",
    right: -5,
    top: -8,
  },

  qrcode: {
    position: "absolute",
    left: 20,
    bottom: 15,
  },
});

export default styles;
