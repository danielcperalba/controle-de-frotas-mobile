import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202024",
    alignItems: "center",
    marginBottom: 10
  },
  card: {
    backgroundColor: "#29292E",
    borderRadius: 6,
    padding: 15,
    width: 364,
    height: 100,
    flexDirection: "row",
  },
  iconSquare: {
    width: 70,
    height: 70,
    backgroundColor: "#323238",
    marginRight: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconSquareCheck: {
    marginRight: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#00B37E',
  },
  iconCheck: {
    color: '#00B37E'
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  value: {
    fontSize: 16,
    color: "#C4C4CC",
  },
  valueTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueDate: {
    fontSize: 16,
    color: "#C4C4CC"
  }
});

export default styles;