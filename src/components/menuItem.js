import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';

const MenuItem = ({ icon, name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon name={icon} size={24} color="#fff" />
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 4,
        backgroundColor: colors.secondary,
        marginBottom: 10,
    },
    name: {
        color: '#fff',
        marginLeft: 15,
        fontSize: 16,
    },
});

export default MenuItem;