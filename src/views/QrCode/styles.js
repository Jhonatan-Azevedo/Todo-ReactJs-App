import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.secondary,
  },

  header: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 5,
    borderBottomColor: colors.primary,
  },

  headerText: {
    color: colors.white,
    fontWeight: "bold",
  },

  containerButtons: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 2,
  },

  buttonBack: {
    backgroundColor: colors.primary,
    width: "45%",
    padding: 10,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  buttonScanActive: {
    backgroundColor: colors.secondary,
    width: "45%",
    padding: 10,
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    color: colors.white,
    opacity: 1,
  },

  buttonScanInative: {
    backgroundColor: colors.white,
    width: "45%",
    padding: 10,
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    opacity: 0.5,
  },

  textButton: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 12,
  },

  footer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    alignItems: "center",
  },

  footerText: {
    color: colors.white,
  },
});

export default styles;
