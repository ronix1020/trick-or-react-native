import React from 'react';
import { Image, Text, View } from 'react-native';
import { useDeviceContext } from 'twrnc';
import tw from 'twrnc';
import BackButton from '../components/backButton';

// una pantallita mostrando como se usa tailwind en react native 
const TailwindScreen = () => {
    // para saber el tema claro u oscuro del dispositivo
    useDeviceContext(tw);

    // los estilos los puedo obtener de la documentacion de propiedades de tailwind
    return (
        <View style={tw`bg-blue-300 flex-1 dark:bg-black`}>
            <BackButton />
            <Text 
                style={tw`text-black pl-4 text-2xl font-bold dark:text-white `}>
                    Tailwind en React Native
            </Text>

            <View style={tw`bg-white dark:bg-gray-700 m-4 p-2 rounded`}>
                <Text
                    style={tw`text-black dark:text-white text-center`}>
                    Tailwind es una herramienta de estilos para React Native. Jamas pense que podria usarse en react native.
                </Text>
            </View>
            <View
                style={tw`bg-white dark:bg-gray-700 m-4 flex-1 p-2 rounded`}>
                <Text
                    style={tw`text-purple-400 ml-3`}>
                    Unos textos
                </Text>
                <View style={tw`ml-3 flex-row`}>
                    <Text style={tw`text-black dark:text-white`}>
                        Realmente por el momento no recomiendo usar esta libreria si quieres hacer un mix entre la propia
                        de react native y tailwind.
                    </Text>
                </View>
            </View>
            <View
                style={tw`bg-white dark:bg-gray-700 m-4 flex-2 p-2 rounded`}>
                <Text
                    style={tw`text-purple-400 ml-3`}>
                    Una fotito
                </Text>
                <Image 
                    style={tw`flex-1 border-2 border-blue-300 rounded-lg m-2`}
                    source={{ uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' }}
                />
            </View>
            <View
                style={tw`bg-white dark:bg-gray-700 m-4 flex-3 p-2 rounded`}>
                <Text
                    style={tw`text-purple-400 ml-3`}>
                    Flex 3
                </Text>
                <View style={tw`flex flex-wrap mx-auto`}>
                    <Image 
                        style={tw`w-38 h-20 border-2 border-blue-300 rounded-lg p-2 m-2`}
                        source={{ uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' }}
                    />
                    <Image 
                        style={tw`w-38 h-20 border-2 border-blue-300 rounded-lg p-2 m-2`}
                        source={{ uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' }}
                    />
                    <Image 
                        style={tw`w-38 h-20 border-2 border-blue-300 rounded-lg p-2 m-2`}
                        source={{ uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' }}
                    />
                </View>
            </View>
        </View>
    )
}

export default TailwindScreen;
