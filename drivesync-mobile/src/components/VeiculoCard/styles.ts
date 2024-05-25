import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    alignItems: "center",
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
  icon:{
    color: '#00B37E',
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
    color: "#fff",
  },
  valueTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase', 
  },
  valueStatus:{
    fontSize: 16,
    color: "#00B37E"
  }
});

export default styles;
