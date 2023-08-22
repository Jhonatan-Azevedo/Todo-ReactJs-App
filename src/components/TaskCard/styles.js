import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "90%",
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 20,
  },

  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  typeActive: {
    width: 50,
    height: 50,
  },

  cardTitle: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },

  cardRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  cardDate: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 14,
  },

  cardTime: {
    color: colors.gray,
  },

  cardDone: {
    opacity: 0.3,
  },
});

export default styles;
