/**
 * i18n.js — Translation data (Model layer)
 * Pure data object — NO DOM manipulation here.
 * Usage: i18n[lang].key
 */

const i18n = {
  id: {
    /* ── Meta ──────────────────────────────────────────── */
    meta_title:       'Media Asia Property — Properti, Dokumen Legal & Konstruksi Batam',
    meta_description: 'PT Media Asia Batam: Jual beli sewa properti, jasa dokumen legal (PBG, SLF, UWTO, AMDAL), arsitektur & konstruksi di Batam. 500+ klien, 8+ tahun pengalaman.',

    /* ── Navbar ────────────────────────────────────────── */
    nav_home:      'Beranda',
    nav_about:     'Tentang Kami',
    nav_services:  'Layanan',
    nav_portfolio: 'Portofolio',
    nav_clients:   'Klien',
    nav_contact:   'Kontak',
    nav_cta:       'Konsultasi Gratis',

    /* ── Hero ──────────────────────────────────────────── */
    hero_eyebrow:   'Solusi Properti Terpercaya di Batam',
    hero_headline:  'Properti, Electrical & Konstruksi — Satu Atap.',
    hero_sub:       'PT Media Asia Batam hadir sejak 2015 sebagai mitra terpercaya untuk jual beli sewa properti, pengurusan dokumen legal, dan layanan arsitektur & konstruksi di kawasan Batam FTZ.',
    hero_cta_main:  'Tentang Kami',
    hero_cta_sec:   'Lihat Layanan',
    hero_stat1_num: '500+',
    hero_stat1_lbl: 'Klien Puas',
    hero_stat2_num: '8+',
    hero_stat2_lbl: 'Tahun Pengalaman',
    hero_stat3_num: '27+',
    hero_stat3_lbl: 'Klien Korporat',
    hero_stat4_num: '4',
    hero_stat4_lbl: 'Bidang Layanan',

    /* ── About ─────────────────────────────────────────── */
    about_label:  'Tentang Kami',
    about_title:  'Media Asia Batam',
    about_body1:  'PT Media Asia Batam, berkedudukan di Batam dengan akta pendiriannya sebagaimana dimuat dalam Akta Pendirian Perseroan Terbatas No. 23 tanggal 08 Desember 2015, dibuat di hadapan Notaris di Kota Batam. Akta Pendirian Perseroan telah memperoleh pengesahan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia Dengan Surat Keputusannya No. AHU-0038769.AH.01.02. Tahun 2022, Nomor Induk Berusaha : 2706220027444, 27 Juni 2022.',
    about_body2:  'Posisi Perusahaan merupakan induk perusahaan, atas seluruh entitas anak perusahaan yang dimiliki melalui investasi penyertaan kepemilikan saham.',
    about_body3:  'Kegiatan usaha yang saat ini dilaksanakan oleh Perusahaan adalah di bidang pembangunan, pengelolaan, dan perdagangan real estate/property, Jasa dokumen yang berkaitan dengan property. Kegiatan usaha Perusahaan dan Entitas Anak memiliki keterkaitan satu sama lain yaitu melakukan kegiatan pembangunan, pengelolaan, Jasa dokumen yang berkaitan dengan properti dan perdagangan real estate/property.',
    about_quote:  'Menjadi developer & agen property profesional, jujur, terpercaya yang bersaing di tingkat nasional.',
    about_cta:    'Filosofi Kami',
    about_team:   'Tim Kami',
    about_team1:  'Komisaris',
    about_team2:  'Arsitek',
    about_team3:  'Direktur',

    /* ── Philosophy ────────────────────────────────────── */
    phil_label: 'Our Philosophy',
    phil_title: 'Filosofi, Visi, Misi & Nilai',

    /* Mission */
    mission_label:   'Mission',
    mission_title:   'Misi Kami',
    mission_desc:    'Menjadi perusahaan pengembang (developer), agen property profesional terbaik, jujur dan terpercaya yang mampu bersaing di tingkat nasional.',
    mission_desc_en: 'To be a developer company and trusted professional property agent capable of competing at the national level.',

    /* Vision */
    vision_label: 'Vision',
    vision_title: 'Visi Kami',

    vision_1_title:   'Sumber Daya Manusia',
    vision_1_desc:    'Membangun sumber daya manusia yang berkompeten dan berintegritas.',
    vision_1_desc_en: 'Building competent and integrity human resources.',

    vision_2_title:   'Tata Kelola Properti',
    vision_2_desc:    'Melaksanakan pembangunan dan pengelolaan properti dan realty dengan tata kelola yang baik dan benar.',
    vision_2_desc_en: 'Carry out the development and management of property and realty with good and correct governance.',

    vision_3_title:   'Nilai untuk Stakeholder',
    vision_3_desc:    'Menjadi perusahaan pengembang yang mampu memberikan nilai lebih kepada stakeholder.',
    vision_3_desc_en: 'Become a development company that is able to provide more value to stakeholders.',

    vision_4_title:   'Dukungan Pemerintah',
    vision_4_desc:    'Mendukung program pemerintah dalam rangka ketersediaan perumahan bagi masyarakat.',
    vision_4_desc_en: 'Support government programs in the context of providing housing for society.',

    /* Values */
    values_label:    'Nilai',
    values_title:    'Nilai — Nilai',
    values_subtitle: 'Nilai yang menjadi fondasi budaya kerja dan pelayanan PT Media Asia Batam.',

    val_1_title: 'Integritas',
    val_1_desc:  'Integrity',
    val_2_title: 'Komitmen',
    val_2_desc:  'Commitment',
    val_3_title: 'Fokus pada Pelanggan',
    val_3_desc:  'Customer Focused',
    val_4_title: 'Rasional',
    val_4_desc:  'Rational',
    val_5_title: 'Bekerjasama',
    val_5_desc:  'Team Work',
    val_6_title: 'Perbaikan Terus Menerus',
    val_6_desc:  'Continuous Improvement',

    clients_count_label: 'Menampilkan {shown} dari {total} klien',


    /* ── Mitra ─────────────────────────────────────────── */
    mitra_label:         'Kemitraan',
    mitra_title:         'Mitra Kami',
    mitra_sub:           'Bekerja sama dengan mitra terpercaya untuk menghadirkan layanan terbaik bagi klien kami.',
    mitra_badge:         'Mitra Resmi',
    mitra_expertise_lbl: 'Bidang Keahlian',
    mitra_1_name:        'PT. Trimatra Daya Sarana',
    mitra_1_tag:         'Specialist Contractor',
    mitra_1_desc:        'PT Trimatradaya Sarana adalah kontraktor spesialis di bidang Mekanikal, Elektrikal, dan IT — berfokus pada proyek Design and Build serta manajemen proyek untuk instalasi baru maupun renovasi di berbagai proyek multi-fasilitas.',
    mitra_1_stat1_lbl:   'Spesialisasi',
    mitra_1_stat2_lbl:   'Design & Build',
    mitra_1_stat3_lbl:   'Kemitraan',

    /* ── Services ──────────────────────────────────────── */
    svc_label: 'Layanan Kami',
    svc_title: '4 Bidang Keahlian Utama',
    svc_sub:   'Dari transaksi properti hingga pengurusan izin dan konstruksi — semua tersedia dalam satu ekosistem layanan terpadu.',
    svc_learn: 'Pelajari Layanan',
    svc_cta:   'Konsultasi Sekarang',

    svc1_title: 'Jasa Dokumen Legal',
    svc1_desc:  'Pengurusan lengkap dokumen properti: PBG/IMB, SLF, UWTO, AMDAL, UKL/UPL, KKPR, NIB, BPHTB, dan seluruh izin terkait properti komersial maupun residensial.',
    svc1_items: ['PBG / IMB & SLF', 'UWTO & SKEP', 'AMDAL / UKL-UPL', 'KKPR / KRK', 'KPR, KMK, KUR', 'Roya & Validasi Pajak'],
    svc1_scope: 'Cakupan Layanan',

    svc2_title: 'Agent Properti',
    svc2_desc:  'Jual, beli, dan sewa properti di seluruh wilayah Batam. Kami memiliki portofolio lengkap rumah, ruko, apartemen, dan lahan strategis.',
    svc2_items: ['Rumah & Townhouse', 'Ruko & Komersial', 'Apartemen & Kondotel', 'Lahan & Kavling', 'Properti Industri', 'Kawasan FTZ Batam'],

    svc3_title: 'Arsitektur, Sipil & ME',
    svc3_desc:  'Layanan desain dan konstruksi menyeluruh — dari gambar kerja, desain 3D, RAB, hingga renovasi dan pembangunan baru dengan standar teknik terkini.',
    svc3_items: ['Gambar Rencana Kerja', 'Desain 3D & Visualisasi', 'RAB & Estimasi Biaya', 'Renovasi & Bangun Baru', 'Pengawas Proyek', 'SBUJK & Andalalin'],

    svc4_title: 'Mekanikal, Elektrikal & IT',
    svc4_desc:  'Instalasi dan perawatan sistem elektrikal, mekanikal, ACMV, fire protection, dan infrastruktur IT untuk properti komersial dan industri.',
    svc4_items: ['Instalasi Elektrikal', 'ACMV & Tata Udara', 'Fire Protection System', 'Sistem IT & Jaringan', 'SLO & Izin Frekuensi', 'Upgrade Fasilitas'],

      // ── layanan.html — counter klien (about.html) ──
  clients_count_label: 'Menampilkan {shown} dari {total} klien',
 
  // ── layanan.html — quick jump links ──
  // (svc_jump1–4 sudah ada, tidak perlu ditambah)
 
  // ── layanan.html — section 01 Legal, cakupan detail ──
  legal_item1_title: 'PBG / IMB & SLF',
  legal_item1_desc:  'Persetujuan Bangunan Gedung dan Sertifikat Laik Fungsi',
  legal_item2_title: 'UWTO & SKEP',
  legal_item2_desc:  'Uang Wajib Tahunan Otorita dan Surat Keputusan',
  legal_item3_title: 'AMDAL / UKL-UPL',
  legal_item3_desc:  'Analisis Dampak Lingkungan dan Upaya Pengelolaan Lingkungan',
  legal_item4_title: 'KKPR / KRK',
  legal_item4_desc:  'Kesesuaian Kegiatan Pemanfaatan Ruang',
  legal_item5_title: 'KPR, KMK, KUR',
  legal_item5_desc:  'Fasilitas kredit properti dan modal kerja',
  legal_item6_title: 'Roya & Validasi Pajak',
  legal_item6_desc:  'Penghapusan hak tanggungan dan validasi pajak BPHTB',
  legal_item7_title: 'NIB & Izin Usaha',
  legal_item7_desc:  'Nomor Induk Berusaha dan perizinan usaha lengkap',
  legal_item8_title: 'Andalalin',
  legal_item8_desc:  'Analisis dampak lalu lintas untuk kawasan komersial',
 
  // ── layanan.html — section 02 Properti, card labels ──
  // svc2_item1–4 sudah ada, tambah item 5 & 6:
  svc2_item5: 'Properti Industri',
  svc2_item6: 'Kawasan FTZ Batam',
 
  // ── layanan.html — section 03 Arsitektur, detail list ──
  arch_item1_title: 'Gambar Rencana Kerja',
  arch_item1_desc:  'Denah, tampak, potongan, detail konstruksi',
  arch_item2_title: 'Desain 3D & Visualisasi',
  arch_item2_desc:  'Rendering eksterior dan interior berkualitas tinggi',
  arch_item3_title: 'RAB & Estimasi Biaya',
  arch_item3_desc:  'Rencana Anggaran Biaya yang terperinci dan akurat',
  arch_item4_title: 'Renovasi & Bangun Baru',
  arch_item4_desc:  'Pelaksanaan konstruksi dengan pengawasan ketat',
  arch_item5_title: 'Pengawas Proyek',
  arch_item5_desc:  'Supervisi teknis dan quality control di lapangan',
  arch_item6_title: 'SBUJK & Andalalin',
  arch_item6_desc:  'Sertifikasi Badan Usaha Jasa Konstruksi',
 
  // ── layanan.html — section 04 MEP, detail cards ──
  mep_item1_title: 'Instalasi Elektrikal',
  mep_item1_desc:  'Panel, kabel, grounding, dan UPS',
  mep_item2_title: 'ACMV & Tata Udara',
  mep_item2_desc:  'AC sentral, VRF, exhaust, ventilasi',
  mep_item3_title: 'Fire Protection',
  mep_item3_desc:  'Sprinkler, hydrant, alarm kebakaran',
  mep_item4_title: 'Sistem IT & Jaringan',
  mep_item4_desc:  'Struktured cabling, CCTV, server',
  mep_item5_title: 'SLO & Izin Frekuensi',
  mep_item5_desc:  'Sertifikat Laik Operasi kelistrikan',
  mep_item6_title: 'Upgrade Fasilitas',

    /* Quick-jump links — layanan.html */
    svc_jump1: '01 · Dokumen Legal',
    svc_jump2: '02 · Agent Properti',
    svc_jump3: '03 · Arsitektur & Sipil',
    svc_jump4: '04 · Mekanikal & IT',

    // ── Service card list items (index.html preview) ──
    svc1_item1: 'PBG / IMB & SLF',
    svc1_item2: 'UWTO & SKEP',
    svc1_item3: 'AMDAL / UKL-UPL',
    svc1_item4: 'KKPR / KRK',

    svc2_item1: 'Rumah & Townhouse',
    svc2_item2: 'Ruko & Komersial',
    svc2_item3: 'Apartemen & Kondotel',
    svc2_item4: 'Lahan & Kavling',

    svc3_item1: 'Gambar Rencana Kerja',
    svc3_item2: 'Desain 3D & Visualisasi',
    svc3_item3: 'RAB & Estimasi Biaya',
    svc3_item4: 'Renovasi & Bangun Baru',

    svc4_item1: 'Instalasi Elektrikal',
    svc4_item2: 'ACMV & Tata Udara',
    svc4_item3: 'Fire Protection System',
    svc4_item4: 'Sistem IT & Jaringan',

    /* CTA bottom — layanan.html */
    svc_cta_title: 'Siap Memulai Proyek Anda?',
    svc_cta_sub:   'Tim ahli kami siap memberikan konsultasi gratis untuk kebutuhan properti dan konstruksi Anda di Batam.',

    /* ── Portfolio ─────────────────────────────────────── */
    port_label:     'Portofolio',
    port_title:     'Hasil Kerja Nyata',
    port_sub:       'Sebagian dari ratusan proyek yang telah kami selesaikan untuk klien perorangan dan korporat.',
    port_all:       'Lihat Semua',
    port_tab_all:   'Semua',
    port_tab_legal: 'Legal',
    port_tab_prop:  'Properti',
    port_tab_arch:  'Arsitektur',

    /* ── Clients ───────────────────────────────────────── */
    clients_label:     'Klien Terkemuka',
    clients_title:     'Dipercaya oleh Korporat & Developer Besar',
    clients_sub:       '500+ pelanggan perorangan dan 27+ perusahaan tercatat telah mempercayakan kebutuhan properti mereka kepada kami.',
    clients_all_title: 'Semua Klien Kami',
    clients_show_more: 'Lihat Semua Klien',
    clients_show_less: 'Tutup',

    /* ── Stats ─────────────────────────────────────────── */
    stat_individual: 'Pelanggan Perorangan',
    stat_companies:  'Perusahaan & Instansi',
    stat_years:      'Tahun Pengalaman',
    stat_sectors:    'Bidang Keahlian',

    /* ── Testimonials ──────────────────────────────────── */
    testi_label: 'Ulasan Klien',
    testi_title: 'Apa Kata Mereka?',

    /* ── Contact info ──────────────────────────────────── */
    contact_label:  'Hubungi Kami',
    contact_title:  'Mulai Konsultasi Hari Ini',
    contact_sub:    'Tim ahli kami siap membantu Anda menemukan solusi properti terbaik di Batam. Konsultasi pertama gratis.',

    contact_addr_lbl:  'Alamat Kantor',
    contact_addr:      'Komplek Ruko Indah Gemilang Blok B 10 & 11, Batam Center, Batam, Kepulauan Riau',
    contact_email_lbl: 'Email',
    contact_email:     'mediaasiaproperty@gmail.com',
    contact_phone_lbl: 'Telepon',
    contact_phone1:    '+62 853 8888 8159',
    contact_phone2:    '+62 811 7740 060',
    contact_social_lbl:'Media Sosial',
    contact_wa_btn:    'WhatsApp Sekarang',
    contact_social_btn:'Ikuti Kami',

    /* Office hours */
    contact_hours_lbl:      'Jam Operasional',
    contact_hours_weekday:  'Senin – Jumat: 08.00 – 17.00',
    contact_hours_saturday: 'Sabtu: 09.00 – 14.00 WIB',
    contact_status_open:    'Buka',
    contact_status_closed:  'Tutup',

    /* ── Contact form ──────────────────────────────────── */
    form_title:            'Kirim Pesan',
    form_subtitle:         'Kami akan membalas dalam 1×24 jam kerja.',
    form_tab_legal:        '📄 Dokumen Legal',
    form_tab_property:     '🏠 Properti',
    form_tab_arch:         '📐 Arsitektur',
    form_tab_mep:          '⚡ Mekanikal & Elektrikal',
    form_name:             'Nama Lengkap',
    form_phone:            'Nomor Telepon',
    form_email:            'Email',
    form_message:          'Pesan',
    form_prefer:           'Preferensi Respon',
    form_prefer_wa:        'WhatsApp',
    form_prefer_email:     'Email',
    form_prefer_phone:     'Telepon',
    form_submit:           'Kirim Pesan',
    form_success_title:    'Pesan Terkirim!',
    form_success_msg:      'Terima kasih telah menghubungi kami. Tim kami akan segera merespons dalam 1×24 jam kerja.',
    form_reset:            'Kirim Pesan Lain',
    form_placeholder_name: 'Contoh: Budi Santoso',
    form_placeholder_phone:'+62 812 3456 7890',
    form_placeholder_email:'email@contoh.com',
    form_placeholder_msg:  'Ceritakan kebutuhan Anda secara singkat...',

    /* ── WhatsApp CTA banner ───────────────────────────── */
    wa_cta_label: 'Chat Langsung',
    wa_cta_title: 'Butuh Respons Cepat?',
    wa_cta_sub:   'Langsung hubungi tim kami via WhatsApp untuk konsultasi instan tanpa antrian.',
    wa_cta_phone: 'Telepon Kami',

    /* ── Map section ───────────────────────────────────── */
    map_label:    'Lokasi Kami',
    map_title:    'Temukan Kantor Kami',
    map_subtitle: 'Komplek Ruko Indah Gemilang Blok B 10 & 11, Batam Center, Kepulauan Riau.',

    /* ── Footer ────────────────────────────────────────── */
    footer_tagline:      'Solusi Properti Terpadu di Batam',
    footer_services:     'Layanan',
    footer_company:      'Perusahaan',
    footer_legal_docs:   'Dokumen Legal',
    footer_agent:        'Agent Properti',
    footer_architecture: 'Arsitektur & Sipil',
    footer_mep:          'Mekanikal & Elektrikal',
    footer_about:        'Tentang Kami',
    footer_portfolio:    'Portofolio',
    footer_clients:      'Klien',
    footer_contact:      'Kontak',
    footer_privacy:      'Kebijakan Privasi',
    footer_terms:        'Syarat & Ketentuan',
    footer_copy:         'Semua hak dilindungi.',
    footer_batam:        'Batam, Kepulauan Riau — Kawasan FTZ Indonesia',
  },

  en: {
    /* ── Meta ──────────────────────────────────────────── */
    meta_title:       'Media Asia Property — Property, Legal Docs & Construction in Batam',
    meta_description: 'PT Media Asia Batam: Buy, sell & rent property, legal document services (PBG, SLF, UWTO, AMDAL), architecture & construction in Batam. 500+ clients, 8+ years experience.',

    /* ── Navbar ────────────────────────────────────────── */
    nav_home:      'Home',
    nav_about:     'About Us',
    nav_services:  'Services',
    nav_portfolio: 'Portfolio',
    nav_clients:   'Clients',
    nav_contact:   'Contact',
    nav_cta:       'Free Consultation',

    /* ── Hero ──────────────────────────────────────────── */
    hero_eyebrow:   'Trusted Property Solutions in Batam',
    hero_headline:  'Property, Electrical & Construction — Under One Roof.',
    hero_sub:       'PT Media Asia Batam has been serving since 2015 as a trusted partner for property transactions, legal document processing, and architecture & construction services in the Batam FTZ.',
    hero_cta_main:  'About Us',
    hero_cta_sec:   'Our Services',
    hero_stat1_num: '500+',
    hero_stat1_lbl: 'Happy Clients',
    hero_stat2_num: '8+',
    hero_stat2_lbl: 'Years Experience',
    hero_stat3_num: '27+',
    hero_stat3_lbl: 'Corporate Clients',
    hero_stat4_num: '4',
    hero_stat4_lbl: 'Service Areas',

    /* ── About ─────────────────────────────────────────── */
    about_label:  'About Us',
    about_title:  'Media Asia Batam',
    about_body1:  'PT Media Asia Batam, domiciled in Batam with its deed of establishment as stated in the Deed of Establishment of Limited Liability Company No. 23 dated December 8, 2015, made before a Notary in Batam City. The Deed of Establishment of the Company has been approved by the Minister of Law and Human Rights of the Republic of Indonesia with his Decree No. AHU-0038769.AH.01.02. Year 2022, Business Identification Number: 2706220027444, June 27, 2022.',
    about_body2:  'The Company\'s position is as the parent company for all subsidiary entities owned through investment in share ownership.',
    about_body3:  'The Company\'s current business activities are in the field of real estate/property development, management, and trading, document services related to property. The business activities of the Company and its Subsidiaries are interrelated, namely carrying out development activities, management, document services related to property and real estate/property trading.',
    about_quote:  'To become a professional, honest and trusted developer & property agent competing at the national level.',
    about_cta:    'Our Philosophy',
    about_team:   'Our Team',
    about_team1:  'Commissioner',
    about_team2:  'Architect',
    about_team3:  'Director',

    /* ── Philosophy ────────────────────────────────────── */
    phil_label: 'Our Philosophy',
    phil_title: 'Philosophy, Vision, Mission & Values',

    /* Mission */
    mission_label:   'Mission',
    mission_title:   'Our Mission',
    mission_desc:    'To become a trusted, honest, and professional developer and property agency company capable of competing at the national level.',
    mission_desc_en: 'To be a developer company and trusted professional property agent capable of competing at the national level.',

    /* Vision */
    vision_label: 'Vision',
    vision_title: 'Our Vision',

    vision_1_title:   'Human Resources',
    vision_1_desc:    'Building competent human resources with integrity.',
    vision_1_desc_en: 'Building competent and integrity human resources.',

    vision_2_title:   'Property Governance',
    vision_2_desc:    'Carrying out property and real estate development and management with proper and professional governance.',
    vision_2_desc_en: 'Carry out the development and management of property and realty with good and correct governance.',

    vision_3_title:   'Stakeholder Value',
    vision_3_desc:    'Becoming a development company capable of providing greater value to stakeholders.',
    vision_3_desc_en: 'Become a development company that is able to provide more value to stakeholders.',

    vision_4_title:   'Government Support',
    vision_4_desc:    'Supporting government programs in providing housing availability for society.',
    vision_4_desc_en: 'Support government programs in the context of providing housing for society.',

    /* Values */
    values_label:    'Values',
    values_title:    'Our Core Values',
    values_subtitle: 'The values that form the foundation of PT Media Asia Batam\'s culture and services.',

    val_1_title: 'Integrity',
    val_1_desc:  'Transparency and honesty in every transaction and documentation process.',
    val_2_title: 'Commitment',
    val_2_desc:  'Delivering every project on time with the highest quality standards.',
    val_3_title: 'Customer Focused',
    val_3_desc:  'Client satisfaction is our top priority in every service we provide.',
    val_4_title: 'Rational',
    val_4_desc:  'Solutions based on accurate and measurable market analysis.',
    val_5_title: 'Team Work',
    val_5_desc:  'Collaboration between multidisciplinary experts for comprehensive results.',
    val_6_title: 'Continuous Improvement',
    val_6_desc:  'Continuously upgrading skills in line with regulations and modern technology.',

    /* ── Mitra ─────────────────────────────────────────── */
    mitra_label:         'Partnership',
    mitra_title:         'Our Partners',
    mitra_sub:           'Working with trusted partners to deliver the best services for our clients.',
    mitra_badge:         'Official Partner',
    mitra_expertise_lbl: 'Areas of Expertise',
    mitra_1_name:        'PT. Trimatra Daya Sarana',
    mitra_1_tag:         'Specialist Contractor',
    mitra_1_desc:        'PT Trimatradaya Sarana is a specialist contractor in Mechanical, Electrical, and IT — focused on Design and Build projects and project management for new installations and renovations across various multi-facility projects.',
    mitra_1_stat1_lbl:   'Specialization',
    mitra_1_stat2_lbl:   'Design & Build',
    mitra_1_stat3_lbl:   'Partnership',

    /* ── Services ──────────────────────────────────────── */
    svc_label: 'Our Services',
    svc_title: '4 Core Areas of Expertise',
    svc_sub:   'From property transactions to permit processing and construction — all available within one integrated service ecosystem.',
    svc_learn: 'Learn More',
    svc_cta:   'Consult Now',

    svc1_title: 'Legal Document Services',
    svc1_desc:  'Complete handling of property documents: PBG/IMB, SLF, UWTO, AMDAL, UKL/UPL, KKPR, NIB, BPHTB, and all permits for commercial and residential properties.',
    svc1_items: ['PBG / IMB & SLF', 'UWTO & SKEP', 'AMDAL / UKL-UPL', 'KKPR / KRK', 'KPR, KMK, KUR', 'Roya & Tax Validation'],
    svc1_scope: 'Service Coverage',

    svc2_title: 'Property Agent',
    svc2_desc:  'Buy, sell, and rent properties across Batam. We have a complete portfolio of houses, shophouses, apartments, and strategic land.',
    svc2_items: ['Houses & Townhouses', 'Shophouses & Commercial', 'Apartments & Condotels', 'Land & Lots', 'Industrial Property', 'Batam FTZ Properties'],

    svc3_title: 'Architecture, Civil & ME',
    svc3_desc:  'Comprehensive design and construction services — from working drawings, 3D design, cost estimation to renovation and new construction with modern engineering standards.',
    svc3_items: ['Working Drawings', '3D Design & Visualization', 'Cost Estimation (RAB)', 'Renovation & New Build', 'Project Supervision', 'SBUJK & Traffic Analysis'],

    svc4_title: 'Mechanical, Electrical & IT',
    svc4_desc:  'Installation and maintenance of electrical, mechanical, ACMV, fire protection, and IT infrastructure systems for commercial and industrial properties.',
    svc4_items: ['Electrical Installation', 'ACMV & Air Systems', 'Fire Protection System', 'IT & Network Systems', 'SLO & Frequency Permits', 'Facility Upgrades'],

    /* Quick-jump links — layanan.html */
    svc_jump1: '01 · Legal Documents',
    svc_jump2: '02 · Property Agent',
    svc_jump3: '03 · Architecture & Civil',
    svc_jump4: '04 · Mechanical & IT',

    // ── Service card list items (index.html preview) ──
    svc1_item1: 'PBG / IMB & SLF',
    svc1_item2: 'UWTO & SKEP',
    svc1_item3: 'AMDAL / UKL-UPL',
    svc1_item4: 'KKPR / KRK',

    svc2_item1: 'Houses & Townhouses',
    svc2_item2: 'Shophouses & Commercial',
    svc2_item3: 'Apartments & Condotels',
    svc2_item4: 'Land & Lots',

    svc3_item1: 'Working Drawings',
    svc3_item2: '3D Design & Visualization',
    svc3_item3: 'Cost Estimation (RAB)',
    svc3_item4: 'Renovation & New Build',

    svc4_item1: 'Electrical Installation',
    svc4_item2: 'ACMV & Air Systems',
    svc4_item3: 'Fire Protection System',
    svc4_item4: 'IT & Network Systems',

    // ── counter klien ──
  clients_count_label: 'Showing {shown} of {total} clients',
 
  // ── section 01 Legal ──
  legal_item1_title: 'PBG / IMB & SLF',
  legal_item1_desc:  'Building Approval and Certificate of Operational Worthiness',
  legal_item2_title: 'UWTO & SKEP',
  legal_item2_desc:  'Annual Mandatory Fee and Decree Letter',
  legal_item3_title: 'AMDAL / UKL-UPL',
  legal_item3_desc:  'Environmental Impact Analysis and Environmental Management',
  legal_item4_title: 'KKPR / KRK',
  legal_item4_desc:  'Spatial Use Activity Suitability',
  legal_item5_title: 'KPR, KMK, KUR',
  legal_item5_desc:  'Property and working capital credit facilities',
  legal_item6_title: 'Roya & Tax Validation',
  legal_item6_desc:  'Mortgage release and BPHTB tax validation',
  legal_item7_title: 'NIB & Business License',
  legal_item7_desc:  'Business Identification Number and complete business permits',
  legal_item8_title: 'Traffic Impact Analysis',
  legal_item8_desc:  'Traffic impact analysis for commercial areas',
 
  // ── section 02 Properti ──
  svc2_item5: 'Industrial Property',
  svc2_item6: 'Batam FTZ Area',
 
  // ── section 03 Arsitektur ──
  arch_item1_title: 'Working Drawings',
  arch_item1_desc:  'Floor plans, elevations, sections, construction details',
  arch_item2_title: '3D Design & Visualization',
  arch_item2_desc:  'High-quality exterior and interior rendering',
  arch_item3_title: 'Cost Estimation (RAB)',
  arch_item3_desc:  'Detailed and accurate budget planning',
  arch_item4_title: 'Renovation & New Build',
  arch_item4_desc:  'Construction execution with strict supervision',
  arch_item5_title: 'Project Supervision',
  arch_item5_desc:  'Technical supervision and quality control on site',
  arch_item6_title: 'SBUJK & Traffic Analysis',
  arch_item6_desc:  'Construction Business Entity Certification',
 
  // ── section 04 MEP ──
  mep_item1_title: 'Electrical Installation',
  mep_item1_desc:  'Panels, cables, grounding, and UPS',
  mep_item2_title: 'ACMV & Air Systems',
  mep_item2_desc:  'Central AC, VRF, exhaust, ventilation',
  mep_item3_title: 'Fire Protection',
  mep_item3_desc:  'Sprinklers, hydrants, fire alarms',
  mep_item4_title: 'IT & Network Systems',
  mep_item4_desc:  'Structured cabling, CCTV, server',
  mep_item5_title: 'SLO & Frequency Permits',
  mep_item5_desc:  'Electrical Operational Worthiness Certificate',
  mep_item6_title: 'Facility Upgrades',

    /* CTA bottom — layanan.html */
    svc_cta_title: 'Ready to Start Your Project?',
    svc_cta_sub:   'Our expert team is ready to provide a free consultation for your property and construction needs in Batam.',

    /* ── Portfolio ─────────────────────────────────────── */
    port_label:     'Portfolio',
    port_title:     'Real Work, Real Results',
    port_sub:       'A selection of hundreds of projects completed for individual and corporate clients.',
    port_all:       'View All',
    port_tab_all:   'All',
    port_tab_legal: 'Legal',
    port_tab_prop:  'Property',
    port_tab_arch:  'Architecture',

    /* ── Clients ───────────────────────────────────────── */
    clients_label:     'Our Clients',
    clients_title:     'Trusted by Major Corporations & Developers',
    clients_sub:       '500+ individual customers and 27+ registered companies have entrusted their property needs to us.',
    clients_all_title: 'All Our Clients',
    clients_show_more: 'View All Clients',
    clients_show_less: 'Close',

    /* ── Stats ─────────────────────────────────────────── */
    stat_individual: 'Individual Customers',
    stat_companies:  'Companies & Institutions',
    stat_years:      'Years of Experience',
    stat_sectors:    'Areas of Expertise',

    /* ── Testimonials ──────────────────────────────────── */
    testi_label: 'Client Reviews',
    testi_title: 'What They Say',

    /* ── Contact info ──────────────────────────────────── */
    contact_label:  'Contact Us',
    contact_title:  'Start Your Consultation Today',
    contact_sub:    'Our team of experts is ready to help you find the best property solution in Batam. First consultation is free.',

    contact_addr_lbl:  'Office Address',
    contact_addr:      'Komplek Ruko Indah Gemilang Block B 10 & 11, Batam Center, Batam, Kepulauan Riau',
    contact_email_lbl: 'Email',
    contact_email:     'mediaasiaproperty@gmail.com',
    contact_phone_lbl: 'Phone',
    contact_phone1:    '+62 853 8888 8159',
    contact_phone2:    '+62 811 7740 060',
    contact_social_lbl:'Social Media',
    contact_wa_btn:    'WhatsApp Now',
    contact_social_btn:'Follow Us',

    clients_count_label: 'Showing {shown} of {total} clients',

    /* Office hours */
    contact_hours_lbl:      'Office Hours',
    contact_hours_weekday:  'Monday – Friday: 08:00 – 17:00',
    contact_hours_saturday: 'Saturday: 09:00 – 14:00 WIB',
    contact_status_open:    'Open',
    contact_status_closed:  'Closed',

    /* ── Contact form ──────────────────────────────────── */
    form_title:            'Send a Message',
    form_subtitle:         'We will respond within 1×24 business hours.',
    form_tab_legal:        '📄 Legal Documents',
    form_tab_property:     '🏠 Property',
    form_tab_arch:         '📐 Architecture',
    form_tab_mep:          '⚡ Mechanical & Electrical',
    form_name:             'Full Name',
    form_phone:            'Phone Number',
    form_email:            'Email',
    form_message:          'Message',
    form_prefer:           'Preferred Response',
    form_prefer_wa:        'WhatsApp',
    form_prefer_email:     'Email',
    form_prefer_phone:     'Phone',
    form_submit:           'Send Message',
    form_success_title:    'Message Sent!',
    form_success_msg:      'Thank you for reaching out. Our team will respond within 1×24 business hours.',
    form_reset:            'Send Another Message',
    form_placeholder_name: 'Example: John Smith',
    form_placeholder_phone:'+62 812 3456 7890',
    form_placeholder_email:'email@example.com',
    form_placeholder_msg:  'Briefly describe your needs...',

    /* ── WhatsApp CTA banner ───────────────────────────── */
    wa_cta_label: 'Chat Directly',
    wa_cta_title: 'Need a Quick Response?',
    wa_cta_sub:   'Contact our team directly via WhatsApp for instant consultation without waiting.',
    wa_cta_phone: 'Call Us',

    /* ── Map section ───────────────────────────────────── */
    map_label:    'Our Location',
    map_title:    'Find Our Office',
    map_subtitle: 'Komplek Ruko Indah Gemilang Block B 10 & 11, Batam Center, Kepulauan Riau.',

    /* ── Footer ────────────────────────────────────────── */
    footer_tagline:      'Integrated Property Solutions in Batam',
    footer_services:     'Services',
    footer_company:      'Company',
    footer_legal_docs:   'Legal Documents',
    footer_agent:        'Property Agent',
    footer_architecture: 'Architecture & Civil',
    footer_mep:          'Mechanical & Electrical',
    footer_about:        'About Us',
    footer_portfolio:    'Portfolio',
    footer_clients:      'Clients',
    footer_contact:      'Contact',
    footer_privacy:      'Privacy Policy',
    footer_terms:        'Terms & Conditions',
    footer_copy:         'All rights reserved.',
    footer_batam:        'Batam, Kepulauan Riau — Indonesia FTZ Region',
  },
};

export default i18n;