/* eslint-disable react-native/no-inline-styles */
import React, { useMemo, ReactNode } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';
import { TAppRoutes } from '../../models/routeList';

type TPage = 'add' | 'history';

interface IHeaderPage {
    type: TPage;
}

function HeaderPage({ type }: IHeaderPage) {
    const { goBack } = useNavigation<NavigationProp<TAppRoutes>>();

    const getTitle = useMemo(() => {
        const data: Record<TPage, string> = {
            add: 'Add Bet',
            history: 'Histórico',
        };

        return data[type];
    }, [type]);

    const getIcon = useMemo(() => {
        const data: Record<TPage, ReactNode> = {
            add: <Ionicons name="md-add-circle-outline" size={24} color="#8BA688" />,
            history: <Ionicons name="newspaper-outline" size={18} color="#8BA688" />,
        };

        return data[type];
    }, [type]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color={Colors.white} />
                <Text style={styles.backLabel}>Voltar</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.title}>{getTitle}</Text>
                {getIcon}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backButton: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    backLabel: {
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginLeft: 8,
    },

    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    title: {
        color: Colors.white,
        fontFamily: Fonts.primary,
        fontSize: 16,
        marginRight: 8,
    },
});

export default React.memo(HeaderPage);
