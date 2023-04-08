import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Input from '../../components/Input';
import Logo1 from '../../assets/img/logo/logo-1.png';
import PrimaryButton from '../../components/Button';
import { Colors } from '../../styles/Colors';

function SignIn() {
    return (
        <View style={styles.container}>
            <Image source={Logo1} style={styles.logo} />
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
        height: 244,
        resizeMode: 'contain',
        width: 197,
    },
});

export default React.memo(SignIn);
