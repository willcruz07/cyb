import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TAppRoutes } from '../../models/routeList';
import LineChart from '../../components/LineChart';
import { getCurrentDate } from '../../utils/LIB';
import Avatar from '../../components/Avatar';
import IconButton from '../../components/IconButton';
import Logo2 from '../../assets/img/logo/logo-2.png';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

const user = 'Will Cruz';

function Home() {
    const { navigate } = useNavigation<NavigationProp<TAppRoutes>>();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Avatar />
                <Image source={Logo2} style={styles.logo} />
            </View>

            <Text style={styles.title}>{`Olá, ${user}`}</Text>
            <Text style={styles.dayOfWeek}>{getCurrentDate()}</Text>

            <LineChart
                labels={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']}
                dataGreen={[120, 23, 97, 59, 99, 12, 34]}
                dataPending={[20, 13, 37, 19, 87, 91, 21]}
                dataRed={[12, 23, 7, 39, 6, 3, 42]}
            />

            <View style={styles.actionButtons}>
                <IconButton
                    icon="add"
                    label="Add Bet"
                    onPress={() => navigate('registerBet')}
                />

                <IconButton
                    icon="history"
                    label="Histórico"
                    onPress={() => navigate('history')}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 32,
        width: '100%',

    },

    container: {
        alignItems: 'center',
        backgroundColor: Colors.black,
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
        width: '100%',
    },

    dayOfWeek: {
        alignSelf: 'flex-start',
        color: Colors.white,
        fontFamily: Fonts.secondary,
        fontSize: 14,
        marginBottom: 64,
    },

    logo: {
        height: 62,
        resizeMode: 'contain',
        width: 128,
    },

    title: {
        alignSelf: 'flex-start',
        color: Colors.white,
        fontFamily: Fonts.primary,
        fontSize: 32,
        marginBottom: 16,
    },
});

export default React.memo(Home);
