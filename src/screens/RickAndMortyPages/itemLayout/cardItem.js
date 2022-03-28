import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './../styles';

export const cardItem = (item, navigation) => {

    return (
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={() => { navigation.navigate('RickAndMortyDetails', { data: item })} }
        style={ styles.cardItemContainer }>
            <ImageBackground source={ require('./../../../assets/rickAndMorty.png')} imageStyle={ styles.imageBackgroundCard }>
                <View style={ styles.cardImageContainer }>
                    <Image style={ styles.cardItemImage } source={{ uri: item.image }}/>
                </View>
            </ImageBackground>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <View>
                    <Text style={ styles.titleTextItem } adjustsFontSizeToFit >{item.name}</Text>
                    {
                        item.status === 'Alive' ? (
                            <Text style={ styles.statusTextItemGreen }>{item.status}</Text>
                        ) : (
                            <Text style={ styles.statusTextItemRed }>{item.status}</Text>
                        )
                    }
                </View>
                <View style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={ () => {} }
                    >
                        <Icon name='heart-outline' size={ 30 } color='white' style={ styles.favoriteIcon } />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}