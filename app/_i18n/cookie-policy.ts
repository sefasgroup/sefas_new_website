import type { Lang } from "./locales";

export type PolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "table"; head: readonly string[]; rows: readonly (readonly string[])[] };

export type CookiePolicy = {
  title: string;
  description: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: readonly { heading: string; blocks: readonly PolicyBlock[] }[];
};

const en: CookiePolicy = {
  title: "Cookie policy",
  description:
    "How SEFAS Group uses cookies and similar technologies on this website: no cookies are set, no analytics or advertising tools run, and the two items kept in your browser are listed here.",
  updatedLabel: "Last updated",
  updated: "28 October 2026",
  intro:
    'This Cookie Policy explains how SEFAS Group ("we") uses cookies and similar technologies on this website. It is read together with the applicable data protection regulations, including Law No. 27 of 2022 on Personal Data Protection.',
  sections: [
    {
      heading: "1. What are cookies?",
      blocks: [
        {
          type: "paragraph",
          text: "Cookies are small text files stored on your device when you visit a website. They let a site remember your actions and preferences, keep the site secure, and help us understand how the site is used. Similar technologies, such as local storage, session storage or pixels, are also covered by this policy.",
        },
      ],
    },
    {
      heading: "2. How we use cookies",
      blocks: [
        {
          type: "paragraph",
          text: "We group cookies and similar technologies into the categories below. Except for what is strictly necessary, we will only store anything after you have given your consent.",
        },
        { type: "subheading", text: "a. Strictly necessary" },
        {
          type: "paragraph",
          text: "These are needed for the site to work and cannot be switched off. This site does not set any cookies. It keeps two small items in your browser, both stored by SEFAS Group only and never sent to our servers or to anyone else:",
        },
        {
          type: "table",
          head: ["Item", "Type", "Purpose", "Duration"],
          rows: [
            [
              "sefas-cookie-consent",
              "Local storage",
              "Remembers your answer to the cookie notice (accepted or declined), so the notice is not shown again.",
              "Until you clear this site's data in your browser",
            ],
            [
              "sefas-splash",
              "Session storage",
              "Remembers that the opening animation has already played during this visit, so it does not replay on every page.",
              "Until you close the tab or browser",
            ],
          ],
        },
        { type: "subheading", text: "b. Analytics" },
        {
          type: "paragraph",
          text: "Analytics cookies help us understand how visitors interact with a site, which pages are popular and how visitors move between pages. Currently this site uses no analytics, so no analytics cookies are stored. If we add analytics later, we will list it here and ask for your consent first.",
        },
        { type: "subheading", text: "c. Marketing" },
        {
          type: "paragraph",
          text: "Currently we do not use any advertising tags on this site. If we add advertising tools later (such as Google Ads), the related cookies will be listed here and will only be stored after you consent.",
        },
      ],
    },
    {
      heading: "3. Third-party links and content",
      blocks: [
        {
          type: "paragraph",
          text: "Our site links to third-party services such as WhatsApp, LinkedIn, Instagram and YouTube, and to our careers portal. These links load nothing from those services until you open them. When you visit them, their own cookie and privacy policies apply.",
        },
        {
          type: "paragraph",
          text: "The network map on the homepage loads its map data (map style, tiles, fonts and icons) directly from OpenFreeMap (tiles.openfreemap.org). Your browser connects to that service when the map is loaded, so it can see your IP address, as with any web request. Its own policies apply to that connection.",
        },
        {
          type: "paragraph",
          text: "We are not responsible for the cookies stored by third-party sites.",
        },
      ],
    },
    {
      heading: "4. Managing your preferences",
      blocks: [
        {
          type: "paragraph",
          text: "Your answer to the cookie notice is kept on your device only. Since this site currently uses no analytics or marketing cookies, it does not change anything on the site yet. To see the notice again and choose again, clear this site's data (local storage) in your browser settings.",
        },
        {
          type: "paragraph",
          text: "You can also block or delete cookies and site data at any time through your browser settings.",
        },
      ],
    },
    {
      heading: "5. Changes to this policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Cookie Policy from time to time. When something changes, we will say so on this page and, where needed, ask for your consent again.",
        },
      ],
    },
    {
      heading: "6. Contact us",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions about this Cookie Policy or how we handle your data, please contact us at {email}.",
        },
      ],
    },
  ],
};

const id: CookiePolicy = {
  title: "Kebijakan Cookie",
  description:
    "Cara SEFAS Group menggunakan cookie dan teknologi serupa di situs ini: tidak ada cookie yang ditetapkan, tidak ada alat analitik atau iklan, dan dua item yang disimpan di peramban Anda tercantum di sini.",
  updatedLabel: "Terakhir diperbarui",
  updated: "28 Oktober 2026",
  intro:
    'Kebijakan Cookie ini menjelaskan bagaimana SEFAS Group ("kami") menggunakan cookie dan teknologi serupa di situs web ini. Kebijakan ini dibaca bersama dengan peraturan perlindungan data yang berlaku, termasuk Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.',
  sections: [
    {
      heading: "1. Apa itu cookie?",
      blocks: [
        {
          type: "paragraph",
          text: "Cookie adalah file teks kecil yang disimpan di perangkat Anda saat mengunjungi sebuah situs web. Cookie memungkinkan situs mengingat tindakan dan preferensi Anda, menjaga keamanan situs, serta membantu kami memahami cara situs digunakan. Teknologi serupa (seperti local storage, session storage, atau pixel) juga termasuk dalam kebijakan ini.",
        },
      ],
    },
    {
      heading: "2. Cara kami menggunakan cookie",
      blocks: [
        {
          type: "paragraph",
          text: "Kami mengelompokkan cookie dan teknologi serupa ke dalam kategori berikut. Kecuali yang sangat diperlukan, kami hanya akan menyimpannya setelah Anda memberikan persetujuan.",
        },
        { type: "subheading", text: "a. Sangat diperlukan" },
        {
          type: "paragraph",
          text: "Ini penting agar situs dapat berfungsi dan tidak dapat dinonaktifkan. Situs ini tidak menetapkan cookie apa pun. Situs ini menyimpan dua item kecil di peramban Anda, keduanya hanya disimpan oleh SEFAS Group dan tidak pernah dikirim ke server kami maupun ke pihak lain:",
        },
        {
          type: "table",
          head: ["Item", "Jenis", "Tujuan", "Durasi"],
          rows: [
            [
              "sefas-cookie-consent",
              "Local storage",
              "Menyimpan jawaban Anda atas pemberitahuan cookie (setuju atau tolak), agar pemberitahuan tidak ditampilkan lagi.",
              "Sampai Anda menghapus data situs ini di peramban",
            ],
            [
              "sefas-splash",
              "Session storage",
              "Mengingat bahwa animasi pembuka sudah diputar pada kunjungan ini, agar tidak diputar ulang di setiap halaman.",
              "Sampai Anda menutup tab atau peramban",
            ],
          ],
        },
        { type: "subheading", text: "b. Analitik" },
        {
          type: "paragraph",
          text: "Cookie analitik membantu kami memahami bagaimana pengunjung berinteraksi dengan situs, halaman mana yang populer, dan bagaimana pengunjung berpindah antar halaman. Saat ini situs ini tidak menggunakan alat analitik apa pun, sehingga tidak ada cookie analitik yang disimpan. Jika di kemudian hari kami menambahkannya, kami akan mencantumkannya di sini dan meminta persetujuan Anda terlebih dahulu.",
        },
        { type: "subheading", text: "c. Pemasaran" },
        {
          type: "paragraph",
          text: "Saat ini kami tidak menggunakan tag iklan apa pun di situs ini. Jika di kemudian hari kami menambahkan alat periklanan (seperti Google Ads), cookie terkait akan dicantumkan di sini dan hanya disimpan setelah Anda menyetujuinya.",
        },
      ],
    },
    {
      heading: "3. Tautan dan konten pihak ketiga",
      blocks: [
        {
          type: "paragraph",
          text: "Situs kami memuat tautan ke layanan pihak ketiga seperti WhatsApp, LinkedIn, Instagram dan YouTube, serta ke portal karier kami. Tautan ini tidak memuat apa pun dari layanan tersebut sampai Anda membukanya. Saat Anda mengunjunginya, kebijakan cookie dan privasi mereka sendiri yang berlaku.",
        },
        {
          type: "paragraph",
          text: "Peta jaringan di beranda memuat data petanya (gaya peta, ubin, font, dan ikon) langsung dari OpenFreeMap (tiles.openfreemap.org). Peramban Anda terhubung ke layanan tersebut saat peta dimuat, sehingga alamat IP Anda dapat terlihat oleh layanan itu, seperti pada setiap permintaan web. Kebijakan mereka sendiri berlaku untuk sambungan tersebut.",
        },
        {
          type: "paragraph",
          text: "Kami tidak bertanggung jawab atas cookie yang disimpan oleh situs pihak ketiga.",
        },
      ],
    },
    {
      heading: "4. Mengelola preferensi Anda",
      blocks: [
        {
          type: "paragraph",
          text: "Jawaban Anda atas pemberitahuan cookie hanya disimpan di perangkat Anda. Karena saat ini situs ini tidak menggunakan cookie analitik atau pemasaran, jawaban tersebut belum mengubah apa pun di situs. Untuk menampilkan kembali pemberitahuan dan memilih ulang, hapus data situs ini (local storage) lewat pengaturan peramban Anda.",
        },
        {
          type: "paragraph",
          text: "Anda juga dapat memblokir atau menghapus cookie dan data situs kapan saja melalui pengaturan peramban.",
        },
      ],
    },
    {
      heading: "5. Perubahan kebijakan",
      blocks: [
        {
          type: "paragraph",
          text: "Kami dapat memperbarui Kebijakan Cookie ini dari waktu ke waktu. Jika ada perubahan, kami akan menyampaikannya di halaman ini dan, bila perlu, meminta persetujuan Anda kembali.",
        },
      ],
    },
    {
      heading: "6. Hubungi kami",
      blocks: [
        {
          type: "paragraph",
          text: "Jika Anda memiliki pertanyaan tentang Kebijakan Cookie ini atau cara kami mengelola data Anda, silakan hubungi kami melalui {email}.",
        },
      ],
    },
  ],
};

export const cookiePolicy = (lang: Lang): CookiePolicy => (lang === "id" ? id : en);
