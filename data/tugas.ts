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
    {
      id: 4,
      title: 'Tugas #4',
      subject: 'Basis Data Lanjut',
      description: 'Merancang dan mengimplementasikan database NoSQL',
      deadline: '5 April 2025',
      priority: 'Tinggi',
      status: 'Sedang dikerjakan',
      progress: 30
    },
    {
      id: 5,
      title: 'Tugas #5',
      subject: 'Pengembangan Web',
      description: 'Membuat website e-commerce dengan React dan Node.js',
      deadline: '10 April 2025',
      priority: 'Sedang',
      status: 'Belum dikerjakan',
      progress: 0
    },
    {
      id: 6,
      title: 'Tugas #6',
      subject: 'Sistem Operasi',
      description: 'Analisis perbandingan kinerja sistem operasi',
      deadline: '12 April 2025',
      priority: 'Rendah',
      status: 'Selesai',
      progress: 100
    },
    {
      id: 7,
      title: 'Tugas #7',
      subject: 'Interaksi Manusia Komputer',
      description: 'Mendesain antarmuka pengguna yang intuitif',
      deadline: '15 April 2025',
      priority: 'Sedang',
      status: 'Sedang dikerjakan',
      progress: 45
    },
    {
      id: 8,
      title: 'Tugas #8',
      subject: 'Etika Profesi',
      description: 'Menulis esai tentang etika dalam pengembangan software',
      deadline: '20 April 2025',
      priority: 'Rendah',
      status: 'Belum dikerjakan',
      progress: 0
    }
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