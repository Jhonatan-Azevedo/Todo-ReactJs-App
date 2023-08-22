import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: colors.secondary,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 5,
    borderColor: colors.primary,
    alignItems: "center",
  },

  button: {
    position: "relative",
    top: -40,
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    position: "relative",
    bottom: 35,
    color: colors.white,
  },
});

export default styles;
