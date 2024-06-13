import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  subtitle: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#29292E',
    color: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 20,
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 15,
  },
  info: {
    color: '#E1E1E6',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  },

});

export default styles;