// src/components/VeiculoCard/styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202024",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#29292E",
    borderRadius: 6,
    padding: 15,
    width: 364,
    height: 100,
    flexDirection: "row",
    position: 'relative', // Para permitir posicionamento absoluto do border
  },
  leftBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 5, // Largura da borda
    backgroundColor: '#00B37E',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  iconSquare: {
    width: 70,
    height: 70,
    backgroundColor: "#323238",
    marginRight: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconChevron: {
    marginRight: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#00B37E',
  },
  content: {
    flex: 1,
    gap: 2,
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
  valueStatus: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#00B37E",
  },
  valueStatusBadge: {
    backgroundColor: "#00B37E50",
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
});

export default styles;
