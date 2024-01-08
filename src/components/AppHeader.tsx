import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';


const { width, height } = Dimensions.get('window')
const AppHeader: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/more.png')} style={{ width: 20, height: 20 }} />
            <Text style={styles.heading}>Home</Text>
            <View />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: width * 1,
        height: height * 0.09,
        backgroundColor: '#198cdc',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    heading: {
        fontSize: height * 0.023,
        fontWeight: "600",
        color: 'white'
    },
})

export default AppHeader;