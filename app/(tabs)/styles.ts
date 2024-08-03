import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    maxWidth: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingLeft: 40,
    paddingRight: 40,
  },
  text: {
    fontSize: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonsWrapper: {
    flexDirection: "row",
  },
  button: {
    padding: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
