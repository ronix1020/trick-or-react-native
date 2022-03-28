import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';
import BackButton from '../../components/backButton';
import { getAllCaracters } from '../../services/rickAndMorty';
import { cardItem } from './itemLayout/cardItem';
import styles from './styles';

const RickAndMortyScreen = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [limitPages, setLimitPages] = useState(1);
    const navigation = useNavigation();

    useEffect(() => {
      getData(page);
    }, [])
    

    const getData = async (pagination) => {
        try {
            let result = await getAllCaracters(pagination);
            // console.log('Esta es la data que obtenemos: ', result);
            setLimitPages(result.info.pages);
            setData(result.results);
            setIsLoading(false);
        } catch (error) {
            console.log('Error: ', error);
        }
    }

  return (
        <View style={ [styles.container, isLoading && { backgroundColor: 'rgba(0,0,0,0.1)' }] }>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                <BackButton colorIcon='black' />
                <Text adjustsFontSizeToFit style={ styles.titleText }>
                    Rick And Morty
                </Text>
                <Text adjustsFontSizeToFit style={ {...styles.titleText, color: colors.accent } }>
                    Characters! 
                </Text>
            </View>
            <View style={ styles.cardContainer }>
                <View style={{ position: 'absolute',  justifyContent: 'center', alignSelf: 'center', zIndex: 10, bottom: 100 }}>
                    {isLoading && (<ActivityIndicator color={ colors.accent } size="large" />)}
                </View>
                <FlatList 
                    data={data}
                    renderItem={({ item }) => cardItem(item, navigation)}
                    keyExtractor={item => item.id}
                    style={ styles.cardList }
                    ListFooterComponent={
                        <View style={{ height: 100 }}></View>
                    }
                />
            </View>
            <View style={ styles.pagesButtonsContainer }>
                <TouchableOpacity 
                    disabled={ isLoading }
                    activeOpacity={0.6} 
                    style={ styles.pagesButtons }
                    onPress={() => {
                        setIsLoading(true);
                        if (page > 1) {
                            let newPage = page - 1;
                            getData(newPage);
                            setPage(page - 1);
                        }
                    } }
                    >
                    <Icon name='chevron-back-outline' size={ 30 } color='black' />
                </TouchableOpacity>
                <TouchableOpacity 
                    disabled={ isLoading }
                    activeOpacity={0.6} 
                    style={ styles.pagesButtons }
                    onPress={() => {
                        setIsLoading(true);
                        if (page < limitPages) {
                            let newPage = page + 1;
                            getData(newPage);
                            setPage(page + 1);
                        }
                    } }
                    >
                    <Icon name='chevron-forward-outline' size={ 30 } color='black' />
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default RickAndMortyScreen;
