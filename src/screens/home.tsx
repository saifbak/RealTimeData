import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AppHeader from '../components/AppHeader';
import RealTimeChart from '../components/RealTimeChart';
import { useDispatch } from 'react-redux';
import { fetchData } from '../services/dataService';
import { updateRealTimeData } from '../store/reducers';

const Home: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRealTimeData = async () => {
            try {
                const data = await fetchData();
                dispatch(updateRealTimeData(data));
            } catch (error) {
                throw error;
            }
        };

        const interval = setInterval(fetchRealTimeData, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <AppHeader />
            <Text style={styles.title}>Real-Time Data Visualization</Text>
            <RealTimeChart />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        margin: 10,
    },
})

export default Home;