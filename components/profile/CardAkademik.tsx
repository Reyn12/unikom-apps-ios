import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { BookOpen } from 'lucide-react-native'

const CardAkademik = () => {
    // Data hardcode
    const akademikData = {
        ipk: 3.85,
        semester: 8,
        totalSks: 144,
        progressSkripsi: 75,
        kehadiran: 92
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BookOpen size={24} color={Colors.primary} />
                <Text style={styles.title}>Informasi Akademik</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={[styles.statBox, { backgroundColor: '#f0e6ff', borderColor: '#9966ff' }]}>
                    <Text style={[styles.statLabel, { color: '#9966ff' }]}>IPK</Text>
                    <Text style={styles.statValue}>{akademikData.ipk}</Text>
                </View>

                <View style={[styles.statBox, { backgroundColor: '#fff0e6', borderColor: '#ff9966' }]}>
                    <Text style={[styles.statLabel, { color: '#ff9966' }]}>Semester</Text>
                    <Text style={styles.statValue}>{akademikData.semester}</Text>
                </View>

                <View style={[styles.statBox, { backgroundColor: '#e6f0ff', borderColor: '#6699ff' }]}>
                    <Text style={[styles.statLabel, { color: '#6699ff' }]}>Total SKS</Text>
                    <Text style={styles.statValue}>{akademikData.totalSks}</Text>
                </View>
            </View>

            <View style={styles.progressSection}>
                <View style={styles.progressRow}>
                    <Text style={styles.progressLabel}>Progress Skripsi</Text>
                    <Text style={styles.progressValue}>{akademikData.progressSkripsi}%</Text>
                </View>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${akademikData.progressSkripsi}%` }]} />
                </View>
            </View>

            <View style={styles.progressSection}>
                <View style={styles.progressRow}>
                    <Text style={styles.progressLabel}>Kehadiran Semester Ini</Text>
                    <Text style={styles.progressValue}>{akademikData.kehadiran}%</Text>
                </View>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${akademikData.kehadiran}%` }]} />
                </View>
            </View>
        </View>
    )
}

export default CardAkademik

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.putih,
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: Colors.abu,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
        marginLeft: 8,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    statBox: {
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        width: '30%',
        borderWidth: 1,
    },
    statLabel: {
        fontSize: 14,
        color: Colors.abu,
        marginBottom: 4,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    progressSection: {
        marginBottom: 16,
    },
    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    progressLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    progressValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    progressBarContainer: {
        height: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 5,
    },
})