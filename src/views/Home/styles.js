import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  filter: {
    width: "100%",
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  filterTextActived: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.primary,
  },

  filterText: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.secondary,
    opacity: 0.5,
  },

  title: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.primary,
    alignItems: "center",
  },

  titleText: {
    color: colors.primary,
    fontSize: 16,
    position: "relative",
    top: 11,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },

  cards: {
    width: "100%",
    marginBottom: 100,
  },
});

export default styles;
