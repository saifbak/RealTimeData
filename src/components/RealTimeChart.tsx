import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


function RealTimeChart() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.header}>Real Time Data</Text>
            <LineChart
                data={{
                    labels: ['January', 'February', 'March', 'April'],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get('window').width * 0.95}
                height={220}
                yAxisSuffix="°C"
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
    },
});

export default RealTimeChart;
