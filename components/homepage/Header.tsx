import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { getMondaySchedules, getTodaySchedules, getTomorrowSchedules } from '@/data/schedules';
import { Calendar, Clock, MapPin, User } from 'lucide-react-native';

interface HeaderProps {
    studentName?: string;
}

const Header = ({ studentName = 'M Renaldi' }: HeaderProps) => {
    const [expanded, setExpanded] = useState(false);
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
                    <View style={styles.cardHeaderTextContainer}>
                        <Calendar size={20} color="#FFFFFF" />
                        <Text style={styles.cardHeaderText}>Jadwal Hari Ini</Text>
                    </View>
                </View>

                <View style={styles.cardContent}>
                    {todaySchedules.length > 0 ? (
                        <>
                            <View style={styles.scheduleItem}>
                                <Text style={styles.scheduleSubject}>{todaySchedules[0].course.name}</Text>
                                <View style={styles.scheduleTimeContainer}>
                                    <Clock size={18} color="#3B82F6" />
                                    <Text style={styles.scheduleTime}>{todaySchedules[0].startTime} - {todaySchedules[0].endTime}</Text>
                                </View>
                                <View style={styles.scheduleRoomContainer}>
                                    <MapPin size={18} color="#3B82F6" />
                                    <Text style={styles.scheduleRoom}>{todaySchedules[0].room} • {todaySchedules[0].class}</Text>
                                </View>
                                <View style={styles.lecturerContainer}>
                                    <User size={18} color="#3B82F6" />
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
                                            {todaySchedules.slice(1).map((schedule, index) => (
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
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
        marginBottom: 10,
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
    expandButton: {
        marginTop: 10,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    expandButtonText: {
        fontSize: 13,
        color: '#3B82F6',
        textAlign: 'center',
        fontWeight: '500',
    },
    otherSchedules: {
        marginTop: 10,
    },
    otherScheduleItem: {
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    otherScheduleTime: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4B5563',
    },
    otherScheduleSubject: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 3,
    },
    otherScheduleRoom: {
        fontSize: 13,
        color: '#6B7280',
    },
    otherScheduleLecturer: {
        fontSize: 12,
        color: '#4B5563',
        marginTop: 2,
    },
    scheduleTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    scheduleRoomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginVertical: 2,
    },
    lecturerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    cardHeaderTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
});

export default Header;