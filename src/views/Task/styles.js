import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "spaced-between",
  },

  imageIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 10,
  },

  typeIconInative: {
    opacity: 0.5,
  },

  label: {
    color: colors.gray,
    fontSize: 18,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 5,
  },

  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginHorizontal: "5%",
    marginBottom: 10,
  },

  area: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "90%",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    marginHorizontal: "5%",
    height: 150,
    textAlignVertical: "top",
  },

  inLine: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 50,
  },

  inputInLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  switchLabel: {
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 16,
  },

  switchLabel: {
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 16,
  },

  switchLabelIOS: {
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 16,
    marginHorizontal: 10,
  },

  removeLabel: {
    fontWeight: "bold",
    color: colors.secondary,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default styles;
