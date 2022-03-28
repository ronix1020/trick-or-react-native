import EncryptedStorage from 'react-native-encrypted-storage';

export const storeCreditCard = async ( numberCard, expiryCard, cvcCard ) => {

    let result = '';

    try {
      await EncryptedStorage.setItem('creditCard', JSON.stringify({
        numberCard,
        expiryCard,
        cvcCard
      }));
        result = 'success';
    } catch (error) {
      console.log('Ha ocurrido un error al almacenar los datos', error);
      result = 'error';
    }
    return result;
  }

export const getCreditCard = async () => {
    let data = '';

    try {
      const creditCardInfo = await EncryptedStorage.getItem('creditCard');

      if (creditCardInfo) {
        console.log('Credit Card Info: ', creditCardInfo);
        data = JSON.parse(creditCardInfo);
      } else {
        console.log('No hay información de tarjeta de crédito');
        data = null;
      }
    } catch (error) {
      console.log('Ha ocurrido un error al obtener los datos', error);
      data = error;
    }

    return data;
}