import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MenuItem from '../components/menuItem';
import { routes } from '../data/routes';

const Home = () => {
  const navigation = useNavigation();

    return (
      <View style={ style.container }>
          <View style={ style.menu }>
            <Text style={ style.title }>Pruebas varias c:</Text>
              <FlatList 
                data={routes}
                renderItem={({ item }) => MenuItem({ ...item, onPress: () => navigation.navigate(item.component) })}
                keyExtractor={item => item.name}
              />
          </View>
      </View>
    )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginVertical: 10,
    fontWeight: 'bold',
  },
})

export default Home;