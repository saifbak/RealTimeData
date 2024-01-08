import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window')
const AppHeader: React.FC = () => {
    return (
        <View style={styles.container}>
            <View />
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
        // paddingVertical: 10,
    },
    heading: {
        fontSize: height * 0.023,
        // padding: height * 0.016,
        fontWeight: "600",
        color: 'white'
    },
})

export default AppHeader;