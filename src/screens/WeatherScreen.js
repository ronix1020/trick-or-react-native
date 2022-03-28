import React, { useState } from 'react';
import { getWeaterById, searchCityByName } from '../services/openWeather';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { weatherIcons } from './weatherIcons';
import { weatherStyles as styles } from './styles/weatherStyles';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import BackButton from '../components/backButton';
import moment from 'moment';
import 'moment/locale/es';
import colors from '../assets/colors';

const WeatherScreen = () => {

    const [city, setCity] = useState('');
    const [dataCity, setDataCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    const getWeather = async () => {

        if (city.length === 0) {
            alert('Debes ingresar una ciudad');
            return;
        }

        setIsLoading(true);
        try {
            let idCity = await searchCityByName(city);
            // console.log('Esta es la ciudad que obtenemos: ',idCity.GeoPosition);
            setDataCity(idCity);
            const weather = await getWeaterById(idCity.Key);
            console.log('Estos son los datos que obtenemos: ', weather);
            setWeather(weather);
        } catch (error) {
            showMessage({
                message: 'Error',
                description: 'No se pudo obtener el clima de la ciudad, revisa que la ciudad ingresada sea correcta',
                type: 'danger',
                icon: 'danger',
            });
            console.log('Ha ocurrido un error: ', error);
        }
        setIsLoading(false);
    }

    const renderWeather = () => {
        try {
        if(weather && isLoading === false) {
            let localdate = moment(weather.LocalObservationDateTime).format('D [de] MMMM[,] YYYY, h:mm A');
            return (
                <View>
                    <View style={ styles.containerWeather }>
                        <Text style={ styles.weatherTitleText }>{ dataCity.LocalizedName }, { dataCity.Country.LocalizedName }</Text>
                        <View style={ styles.containerWeatherInfo }>
                            <View style={ styles.columnWeather }>
                                <Image source={weatherIcons[weather.WeatherIcon].icon} style={ styles.weatherIcon }/>
                                <Text style={styles.weatherNormalText}>{weather.WeatherText}</Text>
                            </View>
                            <View style={ styles.columnWeather }>
                                <Text style={styles.temperatureText}>{weather.Temperature.Metric.Value}°</Text>
                                <Text style={styles.weatherNormalText }>{localdate}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.mapContainer }>
                    <MapView
                            scrollEnabled={false}
                            zoomControlEnabled
                            style={styles.map}
                            provider={PROVIDER_GOOGLE}
                            mapType="standard"
                            initialRegion={{
                                latitude: dataCity.GeoPosition.Latitude,
                                longitude: dataCity.GeoPosition.Longitude,
                                latitudeDelta: 0.09,
                                longitudeDelta: 0.1,
                            }}>
                            <Marker
                                onPress={() => console.log('Marker pressed')}
                                coordinate={{
                                latitude: dataCity.GeoPosition.Latitude,
                                longitude: dataCity.GeoPosition.Longitude,
                                }}
                            />
                    </MapView>
                </View>
            </View>
            )}
        } catch (error) {
            console.log('Error renderWeather: ', error);
            showMessage({
                message: 'Error',
                description: 'No se pudo obtener el clima de la ciudad, revisa que la ciudad ingresada sea correcta',
                type: 'danger',
                icon: 'danger',
            });
        }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.primary }}>
        <View style={ styles.container }>
            <BackButton />
            <Text style={ styles.titleText }>
                Revisa tu clima we!
            </Text>
            <View>
                <Text style={ {...styles.normalText, marginTop: 10 }}>
                    Ingresa el nombre de la ciudad en la que quieres buscar el clima:
                </Text>

                <TextInput 
                    style={ styles.inputContainer }
                    placeholder="Ej: Bogotá"
                    placeholderTextColor="gray"
                    onChangeText={(value) => setCity(value)}
                />

                { isLoading ? (
                        <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <TouchableOpacity
                        style={ styles.buttonContainer }
                        onPress={ () => getWeather() }
                    >
                        <Text style={ {...styles.weatherTitleText, fontSize: 16} }>
                            Buscar
                        </Text>
                </TouchableOpacity>
                )}

                { renderWeather() }
                
                <Text 
                style={{
                    ...styles.normalText,
                    marginTop: 10,
                    fontSize: 14,
                    textAlign: 'center',
                    color: '#fff'
                }}
                >
                    Potenciado con ❤️ junto a AccuWeather API
                </Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default WeatherScreen;
