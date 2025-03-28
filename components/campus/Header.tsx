import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '@/constants/Colors'
import { Compass } from 'lucide-react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kampus</Text>
            {/* Icon kalender di kanan */}
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Compass color="white" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 16,
        backgroundColor: Colors.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    iconContainer: {
        flexDirection: 'row',
    }
})

export default Header