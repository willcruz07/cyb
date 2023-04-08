import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Input from '../../components/Input';
import Logo2 from '../../assets/img/logo/logo-2.png';
import PrimaryButton from '../../components/Button';
import { Colors } from '../../styles/Colors';

function Home() {
    return (
        <View style={styles.container}>
            <Image source={Logo2} style={styles.logo} />
            <Input
                label="Email"
                marginBottom={16}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <Input
                label="Password"
                secureTextEntry
            />

            <PrimaryButton
                marginTop={32}
                label="Entrar"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.black,
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
    },

    logo: {
        height: 62,
        resizeMode: 'contain',
        width: 128,
    },
});

export default React.memo(Home);
