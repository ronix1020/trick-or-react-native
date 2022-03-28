import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ( { colorIcon = 'white' } ) => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={ styles.container }
            onPress={() => navigation.goBack()}
        >
            <Icon name="chevron-back-outline" size={ 40 } color={ colorIcon } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
});

export default BackButton;