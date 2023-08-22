import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginHorizontal: "5%",
    marginVertical: 20,
    color: colors.secondary,
  },

  iconTextInput: {
    width: 25,
    height: 25,
    position: "absolute",
    left: "88%",
    top: 35,
  },

  iconTextInputIOS: {
    width: 25,
    height: 25,
    position: "absolute",
    left: "88%",
    top: 26,
  },

  fieldDateTimeIOS: {
    width: "90%",
    marginHorizontal: "5%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  textModalIOS: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 20,
    color: colors.primary,
  },

  modalIOS: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
});

export default styles;
