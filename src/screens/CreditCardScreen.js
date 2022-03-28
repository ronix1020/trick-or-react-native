import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from '../components/Icon';


import EncryptedStorage from 'react-native-encrypted-storage'
import BackButton from '../components/backButton';

const CreditCardScreen = () => {
    const [numberCard, setNumberCard] = useState('');
    const [expiryCard, setExpiryCard] = useState('');
    const [cvcCard, setCvcCard] = useState('');
    const [creditCard, setCreditCard] = useState(null);
  
  
    const storeCreditCard = async () => {
      try {
        await EncryptedStorage.setItem('creditCard', JSON.stringify({
          numberCard,
          expiryCard,
          cvcCard
        }));
      } catch (error) {
        console.log('Ha ocurrido un error al almacenar los datos', error);
      }
    }
  
    const getCreditCard = async () => {
      try {
        const creditCardInfo = await EncryptedStorage.getItem('creditCard');
  
        if (creditCardInfo) {
          console.log('Credit Card Info: ', creditCardInfo);
          setCreditCard(JSON.parse(creditCardInfo));
        } else {
          console.log('No hay información de tarjeta de crédito');
        }
      } catch (error) {
        console.log('Ha ocurrido un error al obtener los datos', error);
      }
    }
  
    return (
      <View style={ style.container }>
        <BackButton />
        <Text style={ style.titleText }>SVG Icon</Text>
        <Icon name="Tick" height={40} width={40} fill="#0f0" style={ style.icon }/>
  
        <Text style={ style.titleText }>Credit Card Info (EncryptedStorage)</Text>
        <TextInput style={ style.inputContainer } placeholderTextColor="black" maxLength={ 16 } keyboardType="number-pad" onChangeText={(value) => setNumberCard(value)} placeholder="Number" />
        <TextInput style={ style.inputContainer } placeholderTextColor="black" maxLength={ 5 } keyboardType="default" onChangeText={(value) => setExpiryCard(value)} placeholder="Expiry" />
        <TextInput style={ style.inputContainer } placeholderTextColor="black" maxLength={ 3 } keyboardType="number-pad" onChangeText={(value) => setCvcCard(value)} placeholder="CVC" />
  
        <View style={ style.resultContainer }>
          <Text style={ style.textResult }>Resultados</Text>
          <Text style={ style.textResult }>Number: {numberCard}</Text>
          <Text style={ style.textResult }>Expiry: {expiryCard}</Text>
          <Text style={ style.textResult }>CVC: {cvcCard}</Text>  
        </View>
        
  
        <TouchableOpacity style={ style.buttonContainer } onPress={() => storeCreditCard() }>
          <Text style={ style.buttonText }>Submit</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={ style.buttonContainer } onPress={() => getCreditCard() }>
          <Text style={ style.buttonText }>Obtain</Text>
        </TouchableOpacity>
  
        { creditCard ? (
          <View style={ style.resultContainer }>
            <Text style={ style.textResult }>Number: { creditCard.numberCard }</Text>
            <Text style={ style.textResult }>Expiry: { creditCard.expiryCard }</Text>
            <Text style={ style.textResult }>CVC: { creditCard.cvcCard }</Text>
            <Text style={ {...style.textResult, marginTop: 10, fontSize: 14, fontWeight: '300' }}>Estos resultados los obtengo del EncryptedStorage</Text>  
          </View>
          ) : null }
      </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
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
    resultContainer: {
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: 'black',
    },
    titleText: {
      fontSize: 18,
      marginHorizontal: 20,
      fontWeight: 'bold',
    },
    icon: {
      marginHorizontal: 20,
    },
    textResult: {
      fontSize: 16,
      color: '#000',
    },
    buttonContainer: {
      height: 40,
      marginHorizontal: 20,
      marginVertical: 10,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#000',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
    },
  })

export default CreditCardScreen;