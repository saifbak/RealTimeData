import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import RealTimeChart from '../components/RealTimeChart';
import { useDispatch } from 'react-redux';
import { fetchData } from '../services/dataService';
import { updateRealTimeData } from '../store/reducers';
// import RealTimeChart from '../shared/components/RealTimeChart';


const Home: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRealTimeData = async () => {
            // console.log('hello world')
            try {
                const data = await fetchData();
                // console.log('Api Data Fetching', data)
                //   dispatch(updateRealTimeData(data));
            } catch (error) {
                // console.error('Error fetching real-time data:', error.message);
            }
        };

        // Fetch data every 5 seconds (adjust as needed)
        const interval = setInterval(fetchRealTimeData, 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <AppHeader />
            <Text style={styles.title}>Real-Time Data Visualization App</Text>
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
        textAlign: 'center',
        margin: 10,
    },
})

export default Home;