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
  iconChevron:{
    marginRight: 10,
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

  valueTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueSubtitle: {
    fontSize: 16,
    color: "#C4C4CC",
  },
  valueStatus:{
    fontSize: 15,
    color: "#00B37E",
  },
  valueStatusBagde: {
    marginTop: 1,
    backgroundColor: "#00B37E50",
    width: 85,
    alignItems: 'center',
    borderRadius: 9
  }
});

export default styles;
