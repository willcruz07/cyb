/* eslint-disable react-native/no-inline-styles */
import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

interface IChartProps {
    labels: Array<string>;
    dataGreen: Array<number>;
    dataPending: Array<number>;
    dataRed: Array<number>;
}

const chartConfig: AbstractChartConfig = {
    backgroundColor: Colors.black,
    backgroundGradientFrom: Colors.black,
    backgroundGradientTo: Colors.black,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    useShadowColorFromDataset: false,
};

function Line({ dataGreen, dataPending, dataRed, labels }: IChartProps) {
    const [greenIsVisible, setGreenIsVisible] = useState<boolean>(true);
    const [pendingIsVisible, setPendingIsVisible] = useState<boolean>(true);
    const [redIsVisible, setRedIsVisible] = useState<boolean>(true);

    const getDataSet = useMemo(() => {
        const data = [];

        if (greenIsVisible) {
            data.push({
                data: dataGreen,
                color: (opacity = 1) => `rgba(63, 160, 3, ${opacity})`,
                strokeWidth: 4,
            });
        }

        if (pendingIsVisible) {
            data.push({
                data: dataPending,
                color: (opacity = 1) => `rgba(99, 155, 186, ${opacity})`,
                strokeWidth: 4,
            });
        }

        if (redIsVisible) {
            data.push({
                data: dataRed,
                color: (opacity = 1) => `rgba(186, 99, 99, ${opacity})`,
                strokeWidth: 4,
            });
        }

        if (data.length === 0) {
            data.push({
                data: [0],
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 4,
            });
        }

        return data;
    }, [greenIsVisible, redIsVisible, pendingIsVisible]);

    const data: LineChartData = {
        labels,
        datasets: getDataSet,
    };

    return (
        <View>
            <View style={styles.containerLabels}>
                <TouchableOpacity
                    onPress={() => setGreenIsVisible((prevState) => !prevState)}
                    style={[styles.containerLabel, !greenIsVisible && styles.disabled]}
                >
                    <View style={!greenIsVisible ? styles.dotDisabled : styles.dotGreen} />
                    <Text style={styles.label}>Green</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setPendingIsVisible((prevState) => !prevState)}
                    style={[styles.containerLabel, !pendingIsVisible && styles.disabled]}
                >
                    <View style={!pendingIsVisible ? styles.dotDisabled : styles.dotPending} />
                    <Text style={styles.label}>Pendente</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setRedIsVisible((prevState) => !prevState)}
                    style={[styles.containerLabel, !redIsVisible && styles.disabled]}
                >
                    <View style={!redIsVisible ? styles.dotDisabled : styles.dotRed} />
                    <Text style={styles.label}>Red</Text>
                </TouchableOpacity>
            </View>

            <LineChart
                data={data}
                width={Dimensions.get('screen').width}
                height={220}
                style={{ left: -12 }}
                chartConfig={chartConfig}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLabel: {
        alignItems: 'center',
        backgroundColor: Colors.tertiary,
        borderColor: Colors.tertiaryBorder,
        borderRadius: 8,
        borderWidth: 2,
        flexDirection: 'row',
        padding: 8,
        paddingHorizontal: 16,
    },

    containerLabels: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 24,
        width: Dimensions.get('screen').width,
    },

    disabled: { opacity: 0.3 },

    dotDisabled: {
        backgroundColor: Colors.black,
        borderRadius: 6,
        height: 12,
        width: 12,
    },

    dotGreen: {
        backgroundColor: Colors.positive,
        borderRadius: 6,
        height: 12,
        width: 12,
    },

    dotPending: {
        backgroundColor: Colors.info,
        borderRadius: 6,
        height: 12,
        width: 12,
    },

    dotRed: {
        backgroundColor: Colors.danger,
        borderRadius: 6,
        height: 12,
        width: 12,
    },

    label: {
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginLeft: 8,
    },
});

export default React.memo(Line);
