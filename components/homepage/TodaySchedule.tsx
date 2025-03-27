import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '@/components/Themed';
import { getMondaySchedules, getTodaySchedules, getTomorrowSchedules } from '@/data/schedules';
import { Calendar, Coffee, MapPin, User } from 'lucide-react-native';
import Colors from '@/constants/Colors';

const TodaySchedule = () => {
    const [currentSchedules, setCurrentSchedules] = useState<any[]>([]);
    const [upcomingSchedules, setUpcomingSchedules] = useState<any[]>([]);

    // Testing data biar tampil
    // useEffect(() => {
    //     // Data dummy untuk testing
    //     const dummySchedules = [
    //         {
    //             id: 1,
    //             courseName: 'Keamanan Big Data',
    //             startTime: '07:00',
    //             endTime: '09:30',
    //             room: 'R5407 • IF-1/SI/VI',
    //             lecturer: 'Irawan Afrianto',
    //             day: 'Kamis',
    //             status: 'Akan Datang'  // Tambah status
    //         },
    //         {
    //             id: 2,
    //             courseName: 'Pemrograman Android',
    //             startTime: '14:30',
    //             endTime: '17:00',
    //             room: 'LAB-5 • P.ANDRO-3',
    //             lecturer: 'Rizki Adam Kurniawan',
    //             day: 'Kamis',
    //             status: 'Selesai'  // Tambah status
    //         }
    //     ];

    //     // Pisahkan jadwal berdasarkan status
    //     const ongoingClasses = dummySchedules.filter(s => s.status === "Sedang Berlangsung");
    //     const upcomingClasses = dummySchedules.filter(s => s.status === "Akan Datang");
    //     const finishedClasses = dummySchedules.filter(s => s.status === "Selesai");

    //     // Logika untuk menentukan apa yang ditampilkan
    //     if (ongoingClasses.length > 0) {
    //         // Ada kelas yang sedang berlangsung
    //         setCurrentSchedules(ongoingClasses);
    //         setUpcomingSchedules([...upcomingClasses, ...finishedClasses]);
    //     } else if (finishedClasses.length > 0) {
    //         // Tidak ada kelas berlangsung, tapi ada kelas yang sudah selesai
    //         setCurrentSchedules([]); // Kosong untuk menampilkan "Tidak ada kelas berlangsung"
    //         setUpcomingSchedules([...upcomingClasses, ...finishedClasses]);
    //     } else {
    //         // Hanya ada kelas yang akan datang atau tidak ada kelas sama sekali
    //         setCurrentSchedules([]);
    //         setUpcomingSchedules(upcomingClasses);
    //     }
    // }, []);

    // Real Case
    useEffect(() => {
        const rawSchedules = getTodaySchedules();
        
        // Ambil waktu sekarang sekali saja
        const now = new Date();
        now.setHours(9, 55, 0); // Untuk testing
        
        // Ubah format data
        const schedules = rawSchedules.map(item => {
            // Parse waktu dengan benar
            const [startHour, startMinute] = item.startTime.split('.');
            const [endHour, endMinute] = item.endTime.split('.');
            
            const startTime = new Date(now);
            startTime.setHours(parseInt(startHour), parseInt(startMinute), 0);
            
            const endTime = new Date(now);
            endTime.setHours(parseInt(endHour), parseInt(endMinute), 0);
            
            let status = "Akan Datang";
            if (now >= startTime && now <= endTime) {
                status = "Sedang Berlangsung";
            } else if (now > endTime) {
                status = "Selesai";
            }
            
            return {
                id: item.id,
                courseName: item.course.name,
                startTime: item.startTime.replace('.', ':'),
                endTime: item.endTime.replace('.', ':'),
                room: `${item.room} • ${item.class}`,
                lecturer: item.lecturer.name,
                day: item.day,
                status: status
            };
        });
        
        // Pisahkan jadwal berdasarkan status
        const ongoingClasses = schedules.filter(s => s.status === "Sedang Berlangsung");
        const upcomingClasses = schedules.filter(s => s.status === "Akan Datang");
        const finishedClasses = schedules.filter(s => s.status === "Selesai");
        
        // Logika untuk menentukan apa yang ditampilkan
        if (ongoingClasses.length > 0) {
            // Ada kelas yang sedang berlangsung
            setCurrentSchedules(ongoingClasses);
            setUpcomingSchedules([...upcomingClasses, ...finishedClasses]);
        } else if (finishedClasses.length > 0) {
            // Tidak ada kelas berlangsung, tapi ada kelas yang sudah selesai
            setCurrentSchedules([]); // Kosong untuk menampilkan "Tidak ada kelas berlangsung"
            setUpcomingSchedules([...upcomingClasses, ...finishedClasses]);
        } else {
            // Hanya ada kelas yang akan datang atau tidak ada kelas sama sekali
            setCurrentSchedules([]);
            setUpcomingSchedules(upcomingClasses);
        }
    }, []);

    const formatTime = (start: string, end: string) => {
        return `${start} - ${end}`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Calendar size={20} color={Colors.putih} />
                    <Text style={styles.title}>Jadwal Hari Ini</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Ongoing Schedules */}
                {currentSchedules.length > 0 ? (
                    currentSchedules.map((schedule, index) => (
                        <View key={index} style={styles.ongoingCard}>
                            <View style={styles.leftBorder} />

                            <View style={styles.ongoingContent}>
                                <View style={styles.statusContainer}>
                                    <View style={styles.onGoingContainer}>
                                        <Text style={styles.statusText}>Sedang Berlangsung</Text>
                                    </View>
                                    <Text style={styles.timeText}>{formatTime(schedule.startTime, schedule.endTime)}</Text>
                                </View>

                                <Text style={styles.courseName}>{schedule.courseName}</Text>

                                <View style={styles.infoContainer}>
                                    <View style={styles.infoItemWrapper}>
                                        <View style={styles.iconContainer}>
                                            <MapPin size={16} color="#fff" />
                                        </View>
                                        <View style={styles.infoTextContainer}>
                                            <Text style={styles.infoLabel}>Ruangan</Text>
                                            <Text style={styles.infoText}>{schedule.room}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.infoItemWrapper}>
                                        <View style={styles.iconContainer}>
                                            <User size={16} color="#fff" />
                                        </View>
                                        <View style={styles.infoTextContainer}>
                                            <Text style={styles.infoLabel}>Dosen</Text>
                                            <Text style={styles.infoText}>{schedule.lecturer}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))
                ) : (
                    // Tampilkan "Tidak ada kelas berlangsung" hanya jika ada kelas yang akan datang
                    upcomingSchedules.every(s => s.status !== "Selesai") && (
                        <View style={styles.noClassCard}>
                            <Coffee size={40} color="#666" />
                            <Text style={styles.noClassText}>Tidak ada kelas berlangsung</Text>
                        </View>
                    )
                )}

                {/* Upcoming Schedules */}
                {upcomingSchedules.map((schedule, index) => (
                    <View key={index} style={styles.upcomingCard}>
                        <View style={styles.upcomingTimeContainer}>
                            <Text style={styles.upcomingStartTime}>{schedule.startTime}</Text>
                            <View style={styles.timeSeparator} />
                            <Text style={styles.upcomingEndTime}>{schedule.endTime}</Text>
                        </View>

                        <View style={styles.upcomingDetails}>
                            <Text style={styles.upcomingCourseName}>{schedule.courseName}</Text>
                            <View style={styles.upcomingInfoColumn}>
                                <View style={styles.upcomingInfoItem}>
                                    <MapPin size={14} color={Colors.primary} />
                                    <Text style={styles.upcomingInfoText}>{schedule.room}</Text>
                                </View>

                                <View style={styles.upcomingInfoItem}>
                                    <User size={14} color={Colors.primary} />
                                    <Text style={styles.upcomingInfoText}>{schedule.lecturer}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAll: {
        fontSize: 14,
        color: Colors.putih,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 6,
        padding: 8,
    },
    ongoingCard: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        marginBottom: 16,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    leftBorder: {
        width: 6,
        backgroundColor: Colors.hijau,
    },
    ongoingContent: {
        flex: 1,
        padding: 16,
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    onGoingContainer: {
        backgroundColor: Colors.hijau,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    statusText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    timeText: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.8,
    },
    courseName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 10,
    },
    infoItemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(0,0,0,0.2)', // Background biru gelap untuk icon
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    infoTextContainer: {
        flexDirection: 'column',
    },
    infoLabel: {
        color: '#fff',
        fontSize: 12,
        opacity: 0.8,
    },
    infoText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    noClassCard: {
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        padding: 20,
        minHeight: 120,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noClassText: {
        marginTop: 8,
        color: '#666',
        fontSize: 14,
    },

    // Upcoming Schedule
    upcomingCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#eee',
    },
    upcomingTimeContainer: {
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'relative',
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        paddingVertical: 12,
    },
    upcomingStartTime: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    timeSeparator: {
        width: 1,
        height: 20,
        backgroundColor: '#ddd',
        marginVertical: 4,
    },
    upcomingEndTime: {
        fontSize: 14,
        color: '#666',
    },
    upcomingDetails: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    upcomingCourseName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    upcomingInfoColumn: {
        flexDirection: 'column',
        gap: 6,
    },
    upcomingInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    upcomingInfoText: {
        fontSize: 13,
        color: '#666',
    },
});

export default TodaySchedule;