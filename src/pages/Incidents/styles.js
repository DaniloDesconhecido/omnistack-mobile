import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight+20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 15,
        color:'#2A7A9F',
    },
    headerTextBold:{
        fontWeight: 'bold',
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color: '#2A7A9F',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#2A7A9F',
    },
    incidentList:{
        marginTop: 32,
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#2A7A9F',
        marginBottom:16,
    },
    incidentProperty:{
        fontSize: 14,
        color: '#fff',
        fontWeight:'bold',
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#fff',
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText:{
        color: '#fff',
        fontSize:15,
        fontWeight: 'bold',
    },
});