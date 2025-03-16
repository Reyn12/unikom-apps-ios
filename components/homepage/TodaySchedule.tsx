import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { getMondaySchedules, getTodaySchedules, getTomorrowSchedules } from '@/data/schedules';
import { Calendar, Clock, Coffee, MapPin, User } from 'lucide-react-native';

const TodaySchedule = () => {
    const [expanded, setExpanded] = useState(false);

    // Testing nanti ganti jd getTodaySchedules()
    const todaySchedules = getMondaySchedules();
    const tomorrowSchedules = getTomorrowSchedules();

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderTextContainer}>
                    <Calendar size={18} color="#FFFFFF" />
                    <Text style={styles.cardHeaderText}>Jadwal Hari Ini</Text>
                </View>
            </View>

            <View style={styles.cardContent}>
                {todaySchedules.length > 0 ? (
                    <>
                        <View style={styles.scheduleItem}>
                            <Text style={styles.scheduleSubject}>{todaySchedules[0].course.name}</Text>
                            <View style={styles.scheduleTimeContainer}>
                                <Clock size={16} color="#3B82F6" />
                                <Text style={styles.scheduleTime}>{todaySchedules[0].startTime} - {todaySchedules[0].endTime}</Text>
                            </View>
                            <View style={styles.scheduleRoomContainer}>
                                <MapPin size={16} color="#3B82F6" />
                                <Text style={styles.scheduleRoom}>{todaySchedules[0].room} • {todaySchedules[0].class}</Text>
                            </View>
                            <View style={styles.lecturerContainer}>
                                <User size={16} color="#3B82F6" />
                                <Text style={styles.lecturerName}>{todaySchedules[0].lecturer.name}</Text>
                            </View>
                        </View>

                        {todaySchedules.length > 1 && (
                            <>
                                <TouchableOpacity
                                    style={styles.expandButton}
                                    onPress={() => setExpanded(!expanded)}
                                >
                                    <Text style={styles.expandButtonText}>
                                        {expanded ? "Sembunyikan jadwal" : `Lihat ${todaySchedules.length - 1} jadwal lainnya`}
                                    </Text>
                                </TouchableOpacity>

                                {expanded && (
                                    <View style={styles.otherSchedules}>
                                        {todaySchedules.slice(1).map((schedule) => (
                                            <View key={schedule.id} style={styles.otherScheduleItem}>
                                                <Text style={styles.otherScheduleSubject}>
                                                    {schedule.course.name}
                                                </Text>
                                                <View style={styles.scheduleTimeContainer}>
                                                    <Clock size={12} color="#4B5563" />
                                                    <Text style={styles.otherScheduleTime}>
                                                        {schedule.startTime} - {schedule.endTime}
                                                    </Text>
                                                </View>

                                                <View style={styles.scheduleRoomContainer}>
                                                    <MapPin size={10} color="#6B7280" />
                                                    <Text style={styles.otherScheduleRoom}>
                                                        {schedule.room} • {schedule.class}
                                                    </Text>
                                                </View>
                                                <View style={styles.lecturerContainer}>
                                                    <User size={10} color="#4B5563" />
                                                    <Text style={styles.otherScheduleLecturer}>
                                                        {schedule.lecturer.name}
                                                    </Text>
                                                </View>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <View style={styles.emptyScheduleContainer}>
                        <Coffee size={40} color="#9CA3AF" />
                        <Text style={styles.emptySchedule}>Tidak ada jadwal hari ini</Text>
                    </View>
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
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 15,
        marginHorizontal: 20
    },
    cardHeader: {
        backgroundColor: '#60A5FA', // Tetap biru muda
        padding: 10,
    },
    cardHeaderTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    cardHeaderText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cardContent: {
        backgroundColor: '#FFFFFF',
        padding: 15,
    },
    scheduleItem: {
        marginBottom: 10,
    },
    scheduleSubject: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 5,
    },
    scheduleTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 5,
    },
    scheduleTime: {
        fontSize: 14,
        color: '#4B5563',
    },
    scheduleRoomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 5,
    },
    scheduleRoom: {
        fontSize: 14,
        color: '#4B5563',
    },
    lecturerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    lecturerName: {
        fontSize: 14,
        color: '#4B5563',
    },
    expandButton: {
        alignItems: 'center',
        paddingVertical: 8,
        marginVertical: 5,
        backgroundColor: '#F3F4F6',
        borderRadius: 5,
    },
    expandButtonText: {
        color: '#3B82F6',
        fontWeight: '500',
    },
    otherSchedules: {
        marginTop: 10,
    },
    otherScheduleItem: {
        padding: 10,
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        marginBottom: 8,
    },
    otherScheduleSubject: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 3,
    },
    otherScheduleTime: {
        fontSize: 12,
        color: '#4B5563',
    },
    otherScheduleRoom: {
        fontSize: 12,
        color: '#4B5563',
    },
    otherScheduleLecturer: {
        fontSize: 12,
        color: '#4B5563',
    },
    emptySchedule: {
        textAlign: 'center',
        color: '#9CA3AF',
        marginTop: 10,
        fontSize: 14,
    },
    tomorrowContainer: {
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    tomorrowTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 5,
    },
    tomorrowSchedule: {
        fontSize: 14,
        color: '#4B5563',
    },
    emptyScheduleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});

export default TodaySchedule;