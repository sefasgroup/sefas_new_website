import type * as en from "../pages";
import type { Widen } from "@/app/_i18n/widen";

export { serviceImage } from "../pages";
export type { ServiceDetail } from "../pages";

export const aboutPage: Widen<typeof en.aboutPage> = {
  story: [
    "Nama SEFAS berasal dari kata Yunani “cephas”, artinya batu karang. Kami berawal pada 1997 sebagai distributor pelumas di Balikpapan, dan kini tumbuh menjadi grup usaha yang melayani pelanggan di berbagai sektor.",
    "Perjalanan ini terjadi berkat mitra yang sudah lama percaya pada kami, pemahaman kami tentang pasar Indonesia, dan komitmen untuk selalu menepati janji. Dari tahun ke tahun, kami terus menambah lini usaha, memperkuat kemampuan, dan mengembangkan tim.",
    "Bagi kami, kepercayaan adalah awal dari setiap pertumbuhan, dan kerja nyata adalah cara kami menjaganya, bersama-sama.",
  ],
  vision:
    "Menjadikan hidup lebih baik dengan memberikan nilai bagi pelanggan, mitra, karyawan, pemegang saham, dan dunia di sekitar kita.",
  mission: [
    {
      name: "Insan",
      body: "Manusia adalah inti yang menopang perusahaan. Kami secara konsisten mengembangkan keterampilan dan kemampuan mereka.",
    },
    {
      name: "Produktivitas",
      body: "Organisasi yang cerdas dan efisien, yang menjaga hasil kerja dan eksekusi tetap optimal dalam kondisi apa pun.",
    },
    {
      name: "Mitra",
      body: "Kepuasan mitra adalah prioritas kami: layanan yang andal dan setiap komitmen terpenuhi.",
    },
    {
      name: "Kemajuan",
      body: "Kami memaksimalkan keunggulan kami dan terus menyempurnakan cara kerja kami.",
    },
    { name: "Doa", body: "Kami bekerja keras sambil berserah kepada Tuhan untuk membimbing kami." },
  ],
  values: [
    {
      name: "Integritas",
      body: "Akuntabilitas, kejujuran, dan keadilan tanpa kompromi, dengan standar etika dan moral yang tinggi.",
    },
    {
      name: "Keunggulan",
      body: "Tidak ada batas untuk keunggulan: kami terus berbenah agar melampaui apa yang telah kami capai.",
    },
    {
      name: "Saling Percaya",
      body: "Lingkungan kerja yang sehat, dibangun di atas rasa saling menghormati, peduli, dan percaya.",
    },
  ],
  team: [
    {
      name: "Herman Soegeng",
      photo: "/images/team/img-herman-soegeng.png",
      role: "Komisaris",
      body: "Ikut mendirikan SEFAS pada Oktober 1997; jaringan dan kemampuan manajemennya mendorong pertumbuhan awal perusahaan.",
      bio: "Herman Soegeng ikut mendirikan SEFAS pada Oktober 1997. Jaringan yang luas dan kemampuan manajemennya mendorong pertumbuhan perusahaan menuju tujuannya. Ia lulus dari Oklahoma State University, Amerika Serikat, dengan gelar Bachelor of Science in Business Administration pada 1992.",
    },
    {
      name: "Ricky Roesli",
      photo: "/images/team/img-ricky-roesli.png",
      role: "Presiden Direktur",
      body: "Ikut mendirikan SEFAS pada 1997 dan memimpin ekspansi grup ke berbagai unit bisnis dan sektor.",
      bio: "Ricky Roesli ikut mendirikan SEFAS pada Oktober 1997. Dengan ketajaman bisnis, kemampuan manajemen, dan pengetahuan industri yang kuat, ia memimpin pertumbuhan SEFAS Group ke berbagai unit bisnis dan sektor. Ia meraih gelar MBA dari City University, Seattle, pada 1995 dan Bachelor of Science in Business Administration dari California State University, Fresno, pada 1993.",
    },
    {
      name: "Kezia Roesli",
      photo: "/images/team/img-kezia-roesli.png",
      role: "Direktur",
      body: "Memimpin transformasi digital dan keunggulan operasional; sebelumnya berkarier di Monitor Deloitte dan Square.",
      bio: "Kezia Roesli memiliki keahlian di bidang transformasi digital, optimalisasi proses, dan keunggulan operasional, serta mendorong efisiensi melalui implementasi sistem berskala besar dan inisiatif lintas fungsi. Ia pernah menjadi konsultan manajemen di Monitor Deloitte dan bekerja di Product Operations di Square (Block, Inc.). Ia meraih gelar MBA dari NYU Stern dengan spesialisasi Business Analytics and Strategy, serta gelar sarjana Business Economics dari UCLA, Cum Laude with Dean's Honors.",
    },
    {
      name: "Hartono",
      photo: "/images/team/img-hartono.png",
      role: "Direktur",
      body: "Mendirikan Cahaya Samoedera Bersaudara pada 2009 dan menjadikannya distributor Shell Marine berkinerja terbaik di dunia.",
      bio: "Hartono, yang lebih dikenal sebagai Liliek Hartono, lahir dan besar di Solo, Jawa Tengah, dan terjun ke bisnis pelumas kapal pada 1990. Ia mendirikan PT Cahaya Samoedera Bersaudara pada Desember 2009, yang ditunjuk Shell Indonesia sebagai distributor resmi Shell Marine pada 2010, lalu menggabungkannya dengan PT Sefas Pelindotama pada 2013. Di bawah kepemimpinannya, CSB menjadi distributor Shell Marine berkinerja terbaik secara global selama empat tahun berturut-turut sejak 2017 dan merupakan yang terbesar di Indonesia.",
    },
    {
      name: "Yulia Trifena",
      photo: "/images/team/img-yulia-trifena.png",
      role: "Direktur",
      body: "Bersama SEFAS sejak 1998; sebagai Direktur Keuangan, ia mengarahkan pertumbuhan yang progresif dan berkelanjutan.",
      bio: "Yulia Trifena bergabung dengan SEFAS pada 1998, setelah bekerja di tim Finance & Accounting Modern Group. Ia meraih gelar sarjana Keuangan dari Universitas Trisakti, Jakarta, pada 1996. Sebagai Direktur Keuangan, manajemen keuangan strategisnya menghasilkan pertumbuhan yang progresif dan berkelanjutan bagi perusahaan.",
    },
    {
      name: "Haris Wijono",
      photo: "/images/team/img-haris-wijono.png",
      role: "Direktur",
      body: "Direktur Operasional dengan pengalaman 20+ tahun di industri migas, termasuk di ExxonMobil, Agip, dan BP.",
      bio: "Haris Wijono bergabung dengan SEFAS pada 2004 dengan pengalaman lebih dari 20 tahun di industri minyak dan gas, termasuk di ExxonMobil Netherlands, Agip Petroli, BP, dan sebagai konsultan hidrokarbon untuk KPC. Ia meraih gelar Diplom-Ingenieur dari Hogere Technische School Leeuwarden, Belanda, dan bersertifikat Hydrocarbon Management. Sebagai Direktur Operasional, ia memimpin tim operasional dalam memberikan layanan yang prima.",
    },
  ],
};

export const companyGroups: Widen<typeof en.companyGroups> = [
  {
    id: "lubricants",
    label: "Distributor Shell Lubricants",
    body: "Distributor resmi Shell, masing-masing melayani wilayah dan sektornya sendiri.",
  },
  {
    id: "marine",
    label: "Shell Marine",
    body: "Pelumas kapal dan layanan kapal di pelabuhan Indonesia dan internasional.",
  },
  {
    id: "supply",
    label: "Coolant dan bahan bakar",
    body: "Produk pendamping oli: coolant, degreaser, sabun cuci tangan, dan solar industri.",
  },
];

export const companyProfiles: Widen<typeof en.companyProfiles> = [
  {
    name: "Sefas Pelindotama",
    group: "lubricants",
    since: "1997",
    focus: "Pertambangan dan industri terkait · Kalimantan",
    body: "Awal mula SEFAS Group: distributor resmi Shell Lubricants yang tumbuh dari Balikpapan ke seluruh Kalimantan, melayani pelanggan dari pertambangan hingga konstruksi dengan produk dan layanan yang disesuaikan. Meraih penghargaan Best Service Penetration, Distributor of the Year, serta diakui sebagai salah satu distributor terbaik di Asia Pasifik.",
  },
  {
    name: "Tribina Panutan",
    group: "lubricants",
    since: "2005",
    website: "https://www.tribinapanutan.com/",
    focus: "Pembangkit listrik, manufaktur, dan armada · Banten",
    body: "Bergabung dengan grup pada 2005 dan berekspansi ke Tangerang pada 2016. Dengan pengalaman lebih dari 17 tahun di distribusi dan layanan pelumas, telah melayani lebih dari 500 pelanggan, serta meraih penghargaan Shell untuk Best Innovation dan Best People Development.",
  },
  {
    name: "Sefas Keliantama",
    group: "lubricants",
    since: "2009",
    focus: "Pembangkit listrik, armada, konstruksi, dan manufaktur · Jabodetabek",
    body: "Didirikan di Jakarta untuk memasok Shell Lubricants dengan layanan terintegrasi serta tenaga ahli teknis khusus untuk operasional dan troubleshooting. Meraih penghargaan Best Marketing Initiatives dan Distributor of the Year dari Shell Indonesia.",
  },
  {
    name: "Blue Coolant Indonesia",
    group: "supply",
    since: "2010",
    website: "https://www.bluecoolant.com/",
    focus: "Coolant, degreaser, dan sabun cuci tangan · Indonesia",
    body: "Memasok coolant premium Reco-Cool produksi Recochem, beserta degreaser dan sabun cuci tangan heavy-duty, dilengkapi pelatihan, konsultasi, dan layanan teknis yang menjaga mesin tetap pada suhu kerja optimal.",
  },
  {
    name: "Cahaya Samoedera Bersaudara",
    group: "marine",
    since: "2013",
    website: "https://www.samoedera.com/",
    focus: "Shell Marine · 40+ negara, 600+ pelabuhan",
    body: "Salah satu distributor pelumas kapal terbesar di Indonesia, didirikan pada 2009 dan menjadi bagian dari grup sejak 2013. Menyediakan layanan siaga 24/7/365, survei pelumas, pemeriksaan kapal, analisis, pelatihan, dan logistik, serta dinobatkan sebagai Best Shell Marine Distributor di dunia.",
  },
  {
    name: "Energi Hijau Samoedera Bersaudara",
    group: "supply",
    since: "2019",
    website: "https://www.energimerahputih.com/",
    focus: "Solar industri · Energi Merah Putih",
    body: "Menyediakan solar industri dengan merek Energi Merah Putih, dengan volume akurat, kepatuhan spesifikasi yang ketat, pelacakan GPS real-time, stasiun pengisian portabel, dan layanan 24/7/365.",
  },
  {
    name: "Sinergi Semesta Pratama",
    group: "lubricants",
    since: "2022",
    website: "https://sinergisp.com/",
    focus: "Pelumas industri · Bekasi, Karawang, Purwakarta",
    body: "Distributor resmi pelumas Shell untuk wilayah Bekasi, Karawang, dan Purwakarta, melayani pelanggan industri dengan dukungan Shell Indonesia.",
  },
  {
    name: "Pancaputra Mitratama Mandiri",
    group: "lubricants",
    since: "2024",
    focus: "Industri dan transportasi · Jawa Timur",
    body: "Distributor resmi pelumas Shell untuk sektor industri dan transportasi di Jawa Timur, anggota terbaru grup.",
  },
];

const contact = "Hubungi tim kami untuk menjadwalkan layanan atau meminta bantuan. Kami akan memandu Anda di setiap langkah berikutnya.";
const sample = "Teknisi kami mengambil sampel langsung di lokasi Anda atau saat jadwal perawatan, dengan aman dan efisien.";
const lab = "Sampel Anda diuji dengan prosedur standar industri untuk menilai kontaminasi, degradasi, atau kondisi keseluruhan.";
const report = "Dapatkan laporan terperinci berisi temuan, tren, dan rekomendasi, sehingga Anda dapat mengambil keputusan yang tepat.";
const onsite = "Kami menugaskan spesialis teknis untuk memeriksa peralatan atau sistem Anda langsung di fasilitas Anda.";
const visuals = "Visual beresolusi tinggi atau hasil uji instan membantu menafsirkan kondisi komponen internal atau kesehatan fluida dengan cepat.";
const advice = "Berdasarkan temuan, kami memberikan rekomendasi yang terarah atau langkah selanjutnya untuk menyelesaikan masalah secara efektif.";
const slot = "Pesan jadwal atau ajukan permintaan untuk memulai sesi layanan atau kunjungan lapangan.";

export const servicesPage: Widen<typeof en.servicesPage> = {
  intro:
    "Bagi kami, layanan teknis adalah katalis inovasi dan kinerja jangka panjang, bukan sekadar dukungan tambahan. Tenaga ahli teknis kami bekerja berdampingan dengan pelanggan dalam diagnostik preventif, wawasan yang dapat ditindaklanjuti, dan optimalisasi sistem.",
  sectors: ["Pertambangan", "Pertanian", "Konstruksi", "Armada", "Manufaktur", "Pembangkit Listrik", "Kelautan"],
  categories: [
    {
      id: "condition-monitoring",
      groups: [
        {
          name: "Kondisi Pelumas & Grease",
          items: [
            {
              slug: "oil-lab-analysis",
              name: "Analisis Lab Oli",
              summary:
                "Pantau kondisi pelumas dan tren keausan melalui analisis oli bekas di laboratorium. Dapatkan wawasan untuk mengoptimalkan interval servis dan mencegah kerusakan peralatan yang mahal.",
              steps: [
                { title: "Hubungi SEFAS", body: contact },
                { title: "Pengambilan Sampel", body: sample },
                { title: "Analisis Lab", body: lab },
                { title: "Laporan", body: report },
              ],
            },
            {
              slug: "grease-monitoring-skf",
              name: "Pemantauan Grease (SKF)",
              summary:
                "Analisis kondisi grease bekas dengan peralatan SKF langsung di lokasi untuk memastikan pelumasan efektif dan mencegah keausan komponen dini.",
              steps: [
                { title: "Kunjungan Lapangan", body: onsite },
                {
                  title: "Pengukuran",
                  body: "Kami menggunakan instrumen terkalibrasi untuk mengukur parameter kritis yang menunjukkan kondisi terkini peralatan Anda.",
                },
                { title: "Laporan Teknis", body: report },
              ],
            },
            {
              slug: "blotter-paper-test",
              name: "Uji Blotter Paper",
              summary:
                "Pemeriksaan cepat di lokasi untuk mendeteksi kontaminasi atau kerusakan oli dengan metode blotter paper, guna mengenali masalah sejak dini sebelum mengganggu operasional.",
              steps: [
                { title: "Uji Cepat di Lokasi", body: onsite },
                { title: "Hasil Visual", body: visuals },
                { title: "Panduan Tindakan", body: advice },
              ],
            },
          ],
        },
        {
          name: "Pemantauan Kondisi Komponen",
          items: [
            {
              slug: "thermal-inspection",
              name: "Inspeksi Termal",
              summary:
                "Pencitraan termal untuk mendeteksi panas berlebih atau suhu abnormal pada komponen.",
              steps: [
                {
                  title: "Pemindaian Termal",
                  body: "Pemindaian inframerah mendeteksi pola panas yang tidak wajar, membantu mengidentifikasi keausan, misalignment, atau beban berlebih.",
                },
                { title: "Laporan Citra", body: visuals },
                { title: "Saran Teknis", body: advice },
              ],
            },
            {
              slug: "engine-borescope",
              name: "Borescope Mesin",
              summary:
                "Periksa bagian dalam mesin secara visual dengan borescope tanpa membongkar komponen, untuk menilai kondisi piston, liner, dan katup secara efisien.",
              steps: [
                { title: "Inspeksi Borescope", body: onsite },
                { title: "Pengambilan Gambar", body: visuals },
                { title: "Laporan Kondisi", body: report },
              ],
            },
            {
              slug: "coolant-condition-monitoring",
              name: "Pemantauan Kondisi Coolant",
              summary:
                "Pantau kondisi coolant melalui pemeriksaan terjadwal, untuk menjaga kinerja pendinginan mesin dan memperpanjang umur pakai coolant.",
              steps: [
                { title: "Sampel Coolant", body: sample },
                { title: "Uji Strip/Lab", body: lab },
                { title: "Laporan Hasil", body: report },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "system-optimization",
      groups: [
        {
          name: "",
          items: [
            {
              slug: "grease-audit",
              name: "Audit Grease",
              summary:
                "Evaluasi sistem autolube Anda untuk menemukan titik kering, sumbatan, atau inefisiensi, sehingga distribusi pelumasan dan kinerja sistem meningkat.",
              steps: [
                { title: "Ajukan Audit", body: slot },
                { title: "Inspeksi Lapangan", body: onsite },
                { title: "Laporan & Saran", body: advice },
              ],
            },
            {
              slug: "troubleshooting-assistance",
              name: "Bantuan Troubleshooting",
              summary:
                "Atasi kendala pelumasan bersama tenaga ahli teknis kami untuk menemukan akar masalah dan menerapkan solusi nyata demi perbaikan yang berkelanjutan.",
              steps: [
                { title: "Laporkan Masalah", body: contact },
                {
                  title: "Kunjungan Lapangan atau Dukungan Online",
                  body: "Kami menugaskan spesialis teknis untuk memeriksa peralatan atau sistem Anda di fasilitas Anda, atau mendukung Anda dari jarak jauh secara online.",
                },
                { title: "Rencana Penyelesaian", body: advice },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "technical-knowledge-training",
      groups: [
        {
          name: "",
          items: [
            {
              slug: "lubricants-training",
              name: "Pelatihan Pelumas",
              summary:
                "Sesi pelatihan dan pengembangan bersama yang dirancang untuk sektor Anda, membahas tren dan solusi pelumasan terkini sekaligus bertukar pengalaman dengan sesama pelaku industri.",
              steps: [
                { title: "Pesan Jadwal", body: slot },
                {
                  title: "Pilih Materi",
                  body: "Pilih topik pelatihan atau modul pembelajaran sesuai kebutuhan operasional tim Anda.",
                },
                {
                  title: "Pelaksanaan Pelatihan",
                  body: "Para ahli kami menyampaikan modul pilihan di lokasi atau secara virtual, lengkap dengan materi dan evaluasi.",
                },
              ],
            },
            {
              slug: "customer-connect",
              name: "Customer Connect",
              summary:
                "Sesi berbagi pengetahuan tentang teknologi dan solusi pelumasan khusus untuk industri Anda.",
              steps: [
                { title: "Daftar", body: contact },
                {
                  title: "Ikuti Sesi",
                  body: "Ikuti sesi interaktif bersama spesialis kami untuk belajar, bertanya, dan mendapatkan wawasan praktis.",
                },
                {
                  title: "Akses Materi",
                  body: "Setelah sesi, unduh dokumen pendukung, panduan, dan perangkat untuk menerapkan pengetahuan dengan percaya diri.",
                },
              ],
            },
            {
              slug: "plant-tour",
              name: "Kunjungan Pabrik",
              summary:
                "Akses ke balik layar fasilitas Shell LOBP atau pabrik coolant, untuk mempelajari langsung proses blending dan quality control.",
              steps: [
                { title: "Ajukan Kunjungan", body: slot },
                {
                  title: "Konfirmasi Jadwal",
                  body: "Setelah permintaan kunjungan Anda diterima, tim kami akan berkoordinasi dan mengonfirmasi jadwal yang sesuai dengan Anda.",
                },
                {
                  title: "Ikuti Tur",
                  body: "Lihat langsung proses blending dan quality control di balik layar fasilitas Shell LOBP atau pabrik coolant.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const serviceDetails = servicesPage.categories.flatMap((c, i) =>
  c.groups.flatMap((g) =>
    g.items.map((item) => ({ ...item, category: c.id, categoryIndex: i, group: g.name })),
  ),
);
