import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { getMondaySchedules, getTodaySchedules, getTomorrowSchedules } from '@/data/schedules';

interface HeaderProps {
    studentName?: string;
}

const Header = ({ studentName = 'M Renaldi' }: HeaderProps) => {
    //   const todaySchedules = getTodaySchedules();

    const todaySchedules = getMondaySchedules();

    const nextSchedule = todaySchedules.length > 0 ? todaySchedules[0] : null;
    const tomorrowSchedules = getTomorrowSchedules();

    return (
        <View style={styles.headerSection}>
            {/* Logo dan icon */}
            <View style={styles.headerTop}>
                <Text style={styles.logo}>Unikom Apps</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Text style={styles.iconText}>🔔</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.iconText}>⚙️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.iconText}>👤</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Greeting */}
            <Text style={styles.greeting}>
                HALO, <Text style={styles.studentName}>{studentName}</Text>
            </Text>
            {/* Card Jadwal */}
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderText}>🗓️ Jadwal Hari Ini</Text>
                </View>

                <View style={styles.cardContent}>
                    {nextSchedule ? (
                        <>
                            <View style={styles.scheduleItem}>
                                <Text style={styles.scheduleTime}>{nextSchedule.startTime} - {nextSchedule.endTime}</Text>
                                <Text style={styles.scheduleSubject}>{nextSchedule.course.name}</Text>
                                <Text style={styles.scheduleRoom}>{nextSchedule.room} • {nextSchedule.class}</Text>
                                <Text style={styles.lecturerName}>{nextSchedule.lecturer.name}</Text>
                            </View>

                            {todaySchedules.length > 1 && (
                                <Text style={styles.nextClass}>
                                    Pelajaran selanjutnya: {todaySchedules[1].course.name} ({todaySchedules[1].startTime})
                                </Text>
                            )}
                        </>
                    ) : (
                        <Text style={styles.emptySchedule}>Tidak ada jadwal hari ini</Text>
                    )}

                    {tomorrowSchedules.length > 0 && (
                        <View style={styles.tomorrowContainer}>
                            <Text style={styles.tomorrowTitle}>Besok:</Text>
                            <Text style={styles.tomorrowSchedule}>
                                {tomorrowSchedules[0].course.name} ({tomorrowSchedules[0].startTime})
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerSection: {
        backgroundColor: '#1E3A8A', // Biru tua untuk tema sekolah
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    iconText: {
        fontSize: 20,
    },
    greeting: {
        color: 'white',
        fontSize: 14,
        marginBottom: 15,
    },
    studentName: {
        fontWeight: 'bold',
        color: 'white',
      },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardHeader: {
        backgroundColor: '#60A5FA', // Biru muda
        padding: 10,
    },
    cardHeaderText: {
        color: 'white',
        fontWeight: 'bold',
    },
    cardContent: {
        padding: 15,
    },
    scheduleItem: {
        marginBottom: 10,
    },
    scheduleTime: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#4B5563',
    },
    scheduleSubject: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    scheduleRoom: {
        color: '#6B7280',
        fontSize: 14,
    },
    lecturerName: {
        color: '#4B5563',
        fontSize: 13,
        marginTop: 3,
    },
    nextClass: {
        fontSize: 13,
        color: '#6B7280',
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 10,
    },
    emptySchedule: {
        fontSize: 16,
        color: '#6B7280',
        fontStyle: 'italic',
        textAlign: 'center',
        paddingVertical: 20,
    },
    tomorrowContainer: {
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 10,
    },
    tomorrowTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4B5563',
    },
    tomorrowSchedule: {
        fontSize: 13,
        color: '#6B7280',
    },
});

export default Header;