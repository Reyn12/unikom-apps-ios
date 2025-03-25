// Data dummy untuk materi
export const materiData = [
    {
      id: 1,
      mataKuliah: 'Pemrograman Mobile',
      dosen: 'Dr. Budi Santoso',
      pertemuan: [
        { 
          id: 1, 
          judul: 'Pengenalan React Native', 
          tanggal: '15 Maret 2025',
          jenis: 'Slide',
          ukuran: '2.5 MB'
        },
        { 
          id: 2, 
          judul: 'Komponen dan Props', 
          tanggal: '22 Maret 2025',
          jenis: 'PDF',
          ukuran: '3.1 MB'
        }
      ]
    },
    {
      id: 2,
      mataKuliah: 'Kecerdasan Buatan',
      dosen: 'Dr. Siti Aminah',
      pertemuan: [
        { 
          id: 1, 
          judul: 'Pengantar Machine Learning', 
          tanggal: '16 Maret 2025',
          jenis: 'PDF',
          ukuran: '4.2 MB'
        },
        { 
          id: 2, 
          judul: 'Neural Networks', 
          tanggal: '23 Maret 2025',
          jenis: 'Video',
          ukuran: '45 MB'
        }
      ]
    },
    {
      id: 3,
      mataKuliah: 'Basis Data Lanjut',
      dosen: 'Prof. Ahmad Wijaya',
      pertemuan: [
        { 
          id: 1, 
          judul: 'NoSQL Database', 
          tanggal: '17 Maret 2025',
          jenis: 'Slide',
          ukuran: '3.8 MB'
        },
        { 
          id: 2, 
          judul: 'Database Optimization', 
          tanggal: '24 Maret 2025',
          jenis: 'PDF',
          ukuran: '2.7 MB'
        }
      ]
    }
  ];
  
  // Definisi tipe untuk materi
  export interface MateriPertemuan {
    id: number;
    judul: string;
    tanggal: string;
    jenis: string;
    ukuran: string;
  }
  
  export interface MateriMataKuliah {
    id: number;
    mataKuliah: string;
    dosen: string;
    pertemuan: MateriPertemuan[];
  }