import React from 'react'
import { View, Text, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import moment from 'moment';


function RealTimeChart() {

    const realTimeData = useSelector((state: RootState) => state.realTimeData);

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.header}>Sensor: iddqd </Text>
            {
                realTimeData.length == 0 ?
                    <ActivityIndicator size="small" color="orange" />
                    : <LineChart
                        data={{
                            labels: realTimeData.map(item => moment(item.timestamp).format('LTS')),
                            datasets: [
                                {
                                    data: realTimeData.map(data => data.data),
                                },
                            ],
                        }}
                        width={Dimensions.get('window').width * 0.95}
                        height={300}
                        yAxisSuffix=""
                        verticalLabelRotation={90}
                        chartConfig={{
                            backgroundColor: '#198cdc',
                            backgroundGradientFrom: '#198cdc',
                            backgroundGradientTo: '#198cdc',
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
                    />}
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
