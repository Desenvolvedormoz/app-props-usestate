import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems:  'center'
    },
    containerOneJogo:{
        width:'100%',
        rotation: 180,
        flex:1,
        paddingVertical: 60,
        backgroundColor: 'rgba(250,200,32, .5)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap', 
    }
    ,
    containerJogo: {
        width: '100%',
        flex: 1,
        paddingVertical: 60,
        backgroundColor: 'rgba(30, 250, 200, .3)',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap', 
        alignItems: 'center'
    },
    btn: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(180, 250, 245, 0)',
        marginEnd:20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems:'center'
    },
    texto: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#fff'
    }
});
export default estilos;