import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        paddingHorizontal: 0,
    },

    textContainer:{
        flexDirection: 'column',
        alignItems: "baseline",
        marginLeft: 16,
        marginTop: 12,
        marginBottom: 12,
        
    },

    name: {
        fontSize: 16,
        color: '#FFF',
    },

    subTitle: {
        color: '#6B6B6B',
        fontSize: 14
    },

    buttonText: {
        color: '#FFF',
        fontSize:16
    },

    button:{
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#0d6efd',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 0
    },

    buttonContainer:{
        flexDirection: 'row',
        gap: 10
    }
})