import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        width: '100%'
    },

    header:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    textContainer:{
        flex:1
    },

    buttonContainer: {
        marginLeft: 20, // Adiciona espaço entre o texto e o botão
        // Adicione outros estilos conforme necessário
    },

    eventName: {
        color: '#FDFCFE',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 48
    },

    eventDescribe:{
        color: '#6B6B6B',
        fontSize: 12
    },

    input:{
        flex: 1,
        backgroundColor: '#1F1E25',
        height: 48,
        width: 220,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },

    buttonText: {
        color: '#FFF',
        fontSize:16
    },

    button:{
        width: 120,
        height: 36,
        borderRadius: 20,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },

    buttonSearch:{
        width: 48,
        height: 48,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },

    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    }
});