import React  from 'react';
import { View, Image, TouchableOpacity,  StyleSheet } from 'react-native';
import { Avatar} from 'react-native-paper';
import { faker } from '@faker-js/faker';
import { useFonts } from 'expo-font';

const Header = () => {
    const [fontsLoaded] = useFonts({
        'Product_Sans_Bold': require('../assets/fonts/Product_Sans_Bold.ttf'),
        'Product_Sans': require('../assets/fonts/Product_Sans.ttf'),
    });
    return(
        <View style={styles.container}>
            {/* Avatar Image */}
            <TouchableOpacity>
                <Avatar.Image source={{uri:faker.image.avatar()}} size={50} style={styles.image}/>
            </TouchableOpacity>
            <View style={styles.right}>
                {/* Message icon */}
                <TouchableOpacity>
                    <Image source={require('../assets/messages.png')}  style={styles.icon}/>
                </TouchableOpacity>
                {/* Bell Icon */}
                <TouchableOpacity>
                    <Image source={require('../assets/bell.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
    },
    right:{
        flexDirection: 'row',
    },
    image: {
        width: 30,
        height: 45,
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    icon: {
        width: 30,
        height: 45,
        resizeMode: 'contain',
        marginStart: 20,
    }
});

export default Header;
