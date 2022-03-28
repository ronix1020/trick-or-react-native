import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

export const weatherStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.primary,
    },
    containerWeather: {
        width: "100%",
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: colors.primary,
        padding: 10,
        marginTop: 20,
    },
    containerWeatherInfo: {
        flex: 1,
        flexDirection: 'row',
    },
    columnWeather: {
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    weatherTitleText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    weatherNormalText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
    weatherIcon: {
        width: 120,
        height: 80,
    },
    mapContainer: {
        marginTop: 20,
        padding: 20, 
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: colors.primary, 
        width: '100%', 
        height: 240,
        borderRadius: 20,
    },
    map: {
        flex: 1,
        width: '100%',
        height: 240,
    },
    titleText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    inputContainer: {
        height: 40,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
    },
    normalText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '300',
    },
    temperatureText: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
    },
    buttonContainer: {
        height: 40,
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: 'white',
        backgroundColor: colors.primary,
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})