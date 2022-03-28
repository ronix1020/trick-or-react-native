import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 5,
    },
    imageBackgroundCard: {
        width: '100%',
        height: '120%',
        alignSelf: 'center',
        opacity: 0.3,
        top: 32,
        resizeMode: 'cover',
    },
    cardContainer: {
        marginTop: 10,
    },
    cardItemContainer: {
        width: '95%',
        height: 200,
        backgroundColor: colors.primary,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'flex-end', 
        elevation: 7,
        marginTop: 50,
    },
    cardImageContainer: {
        width: '60%', 
        height: '100%',
        borderRadius: 10,
        elevation: 5,
        alignSelf: 'center',
        overflow: 'hidden',
        marginBottom: 5,
    },
    cardItemImage: {
        width: '100%', 
        height: '100%',
        borderRadius: 10,
        resizeMode: 'stretch',
    },
    cardList: {
        padding: 10,
    },
    titleTextItem: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    favoriteIcon: {
        right: 0,
    },
    statusTextItemGreen: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16,
    },
    statusTextItemRed: {
        color: 'red',
        fontWeight: '400',
    },
    pagesButtons: {
        width: 60, 
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 5,
    },
    pagesButtonsContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
});

export default styles;