import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    detailsContainer: {
        flex: 1,
    },
    caracterImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'stretch',
        zIndex: 1,
    },
    containerImage: {
        width: '59%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        zIndex: 3,
        elevation: 10,
        alignSelf: 'center',
        margin: 10,

    },
    detailsTextContainer: {
        width: '90%',
        height: 300,
        backgroundColor: colors.primary,
        borderRadius: 20,
        elevation: 10,
        bottom: 40,
        paddingTop: 50,
        padding: 30,
        alignSelf: 'center',
        zIndex: 0,
    },
    rowDescription: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleDescription: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 10,
    },
    textDescription: {
        fontSize: 16,
        color: 'white',
    },
    icons: {
        alignSelf: 'center',
    },
});