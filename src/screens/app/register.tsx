import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Colors } from '../../styles/Colors';
import HeaderPage from '../../components/HeaderPage';
import Input from '../../components/Input';
import PrimaryButton from '../../components/Button';
import { TAppRoutes } from '../../models/routeList';

function Register() {
    const { navigate } = useNavigation<NavigationProp<TAppRoutes>>();

    return (
        <View style={styles.container}>
            <HeaderPage type="add" />

            <Input
                label="Título"
                marginBottom={16}
                marginTop={48}
                autoCapitalize="none"
                keyboardType="ascii-capable"
            />

            <Input
                label="Stake"
                marginBottom={16}
                autoCapitalize="none"
                keyboardType="ascii-capable"
            />

            <Input
                label="Odd"
                marginBottom={16}
                autoCapitalize="none"
                keyboardType="ascii-capable"
            />

            <Input
                label="Retorno"
                marginBottom={16}
                autoCapitalize="none"
                keyboardType="ascii-capable"
            />

            <Input
                label="Retirada"
                marginBottom={16}
                autoCapitalize="none"
                keyboardType="ascii-capable"
            />

            <PrimaryButton
                marginTop={32}
                label="Salvar"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
    },
});

export default React.memo(Register);
