// Data dummy untuk tugas
export const dummyTasks = [
    {
      id: 1,
      title: 'Tugas #1',
      subject: 'Pemrograman Mobile',
      description: 'Membuat aplikasi mobile dengan React Native',
      deadline: '30 Maret 2025',
      priority: 'Tinggi',
      status: 'Belum dikerjakan',
      progress: 0
    },
    {
      id: 2,
      title: 'Tugas #2',
      subject: 'Kecerdasan Buatan',
      description: 'Analisis dan implementasi algoritma machine learning',
      deadline: '30 Maret 2025',
      priority: 'Tinggi',
      status: 'Sedang dikerjakan',
      progress: 60
    },
    {
      id: 3,
      title: 'Tugas #3',
      subject: 'Keamanan Jaringan',
      description: 'Implementasi sistem keamanan pada jaringan lokal',
      deadline: '2 April 2025',
      priority: 'Sedang',
      status: 'Belum dikerjakan',
      progress: 0
    },
  ];
  
  // Definisi tipe untuk tugas
  export type Task = {
    id: number;
    title: string;
    subject: string;
    description: string;
    deadline: string;
    priority: 'Tinggi' | 'Sedang' | 'Rendah';
    status: 'Belum dikerjakan' | 'Sedang dikerjakan' | 'Selesai';
    progress: number;
  };