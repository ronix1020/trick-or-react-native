import React from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import BackButton from './../../components/backButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles/styleDetails';

const RickAndMortyDetails = (props) => {

    const data = props.route.params.data;

    const rowDescription = (description, data, icon) => {
        console.log('Esta es la data: ', icon);
        return (
            <View style={ styles.rowDescription }>
                <View>
                    <Text style={ styles.titleDescription }>
                        { description }
                    </Text>
                    <Text style={ styles.textDescription }>
                        { data }
                    </Text>
                </View>
                { icon ? <Icon style={ styles.icons } name={ icon } size={ 30 } color={ 'white' } /> : null }
            </View>
        )
    };

  return (
        <View style={ styles.container }>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BackButton colorIcon={'black'}/>
                <Text style={ styles.titleText }>
                    { data.name }
                </Text>
            </View>
            <ScrollView style={ styles.detailsContainer }>
                <View>
                    <ImageBackground source={{ uri: data.image }} imageStyle={ styles.caracterImage } style={ styles.containerImage }/>
                    <View style={ styles.detailsTextContainer }>

                        { rowDescription(
                            'Status', 
                            data.status, 
                            data.status === 'Alive' ? 'heart-circle-outline' : 'heart-dislike-circle-outline') }

                        { rowDescription(
                            'Gender', 
                            data.gender, 
                            data.gender === 'Male' ? 'male-outline' : 'female-outline')}

                        { rowDescription('Specie', data.species, 'body-outline')}

                        { rowDescription('Origin', data.origin.name, 'location-outline')}

                    </View>
                </View>
            </ScrollView>
        </View>
  )
}

export default RickAndMortyDetails;