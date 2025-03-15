import { Schedule } from '@/types/schedule';

export const schedules: Schedule[] = [
  {
    id: '1',
    course: {
      id: 'c1',
      code: '01175',
      name: 'Keamanan Big Data',
      credits: 3,
    },
    lecturer: {
      id: 'l1',
      name: 'Irawan Afrianto',
      title: 'S.T, M.T',
    },
    day: 'Senin',
    startTime: '07.00',
    endTime: '09.30',
    room: 'R5407',
    class: 'IF-1/S1/VI',
    type: 'Tatap Muka'
  },
  {
    id: '2',
    course: {
      id: 'c2',
      code: '01182',
      name: 'Pemrograman Android',
      credits: 3,
    },
    lecturer: {
      id: 'l2',
      name: 'Rizki Adam Kurniawan',
      title: '',
    },
    day: 'Senin',
    startTime: '14.30',
    endTime: '17.00',
    room: 'LAB-5',
    class: 'P.ANDRO-3',
    type: 'Tatap Muka'
  },
  {
    id: '3',
    course: {
      id: 'c3',
      code: '00005',
      name: 'Kewirausahaan',
      credits: 3,
    },
    lecturer: {
      id: 'l3',
      name: 'Prof. Dr. Ir. H. Eddy Soeryanto Soegoto',
      title: 'MT',
    },
    day: 'Selasa',
    startTime: '07.00',
    endTime: '09.30',
    room: 'Auditorium',
    class: 'IF-1/S1/VI',
    type: 'Tatap Muka'
  },
  {
    id: '4',
    course: {
      id: 'c4',
      code: '01181',
      name: 'Desain Interaksi Perangkat Lunak',
      credits: 3,
    },
    lecturer: {
      id: 'l4',
      name: 'Alif Finandhita',
      title: 'S.Kom, M.T',
    },
    day: 'Selasa',
    startTime: '12.00',
    endTime: '14.30',
    room: 'R5407',
    class: 'DIPL-2',
    type: 'Tatap Muka'
  },
  {
    id: '5',
    course: {
      id: 'c5',
      code: '01191',
      name: 'Rekayasa Fitur',
      credits: 3,
    },
    lecturer: {
      id: 'l5',
      name: 'Galih Hermawan',
      title: 'S.Kom, M.T',
    },
    day: 'Rabu',
    startTime: '07.00',
    endTime: '09.30',
    room: 'R5306',
    class: 'IF-1/S1/VI',
    type: 'Tatap Muka'
  },
  {
    id: '6',
    course: {
      id: 'c6',
      code: '01130',
      name: 'Manajemen Proyek Perangkat Lunak',
      credits: 3,
    },
    lecturer: {
      id: 'l6',
      name: 'Assoc. Prof. Dr. Ir. Herman S. Soegoto',
      title: 'MBA',
    },
    day: 'Rabu',
    startTime: '13.40',
    endTime: '16.10',
    room: 'R5406',
    class: 'IF-1/S1/VI',
    type: 'Tatap Muka'
  },
  {
    id: '7',
    course: {
      id: 'c7',
      code: '01190',
      name: 'Metode Penelitian',
      credits: 2,
    },
    lecturer: {
      id: 'l7',
      name: 'Bambang Siswoyo',
      title: 'M.Si, MKom, Ph.D',
    },
    day: 'Kamis',
    startTime: '09.30',
    endTime: '11.10',
    room: 'R5304',
    class: 'IF-1/S1/VI',
    type: 'Tatap Muka'
  }
];

// Testing Tampil Data Hari Senin
export const getMondaySchedules = () => {
    return schedules.filter(schedule => schedule.day === 'Senin')
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

// Fungsi untuk mendapatkan jadwal hari ini
export const getTodaySchedules = () => {
  const today = new Date();
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const todayName = days[today.getDay()];
  
  return schedules.filter(schedule => schedule.day === todayName)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
};

// Fungsi untuk mendapatkan jadwal besok
export const getTomorrowSchedules = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const tomorrowName = days[tomorrow.getDay()];
  
  return schedules.filter(schedule => schedule.day === tomorrowName)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
};