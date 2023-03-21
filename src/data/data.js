// ========= Menus ==================
import { MdReviews } from 'react-icons/md';
import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai';
import { BsCalendar2EventFill, BsBookmarkFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import { BiCategory } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md'; //production icon
import { GiChipsBag } from 'react-icons/gi';
import { FaVideo } from 'react-icons/fa';
export const MenusData = [
  {
    id: 1,
    name: 'Home',
    icon: <AiFillHome />,
    linkUrl: '/',
    class: 'homeIcon',
  },
  {
    id: 2,
    name: 'About us',
    icon: <BsBookmarkFill />,
    linkUrl: '/about-us',
    class: 'about',
  },
  {
    id: 10,
    name: 'Our Work',
    icon: <FaVideo />,
    linkUrl: '/all-videos',
    class: 'videoIcon',
  },
  {
    id: 9,
    name: 'Testimonials',
    icon: <MdReviews />,
    linkUrl: '/testimonials',
    class: 'testimo',
  },
  {
    id: 3,
    name: 'Production',
    icon: <MdOutlinePrecisionManufacturing />,
    linkUrl: '/production',
    class: 'production',
  },
  {
    id: 4,
    name: 'Events Activation',
    icon: <BsCalendar2EventFill />,
    linkUrl: '/events',
    class: 'eventactivation',
  },
  {
    id: 5,
    name: 'Technology',
    icon: <AiTwotoneSetting />,
    linkUrl: '/technology',
    class: 'tech',
  },
  {
    id: 6,
    name: 'BTL / Merchandising',
    icon: <GiChipsBag />,
    linkUrl: '/btl-merchand',
    class: 'btl',
  },
  {
    id: 7,
    name: 'Catalog',
    icon: <BiCategory />,
    linkUrl: 'https://jjrnetwork.com/catalog2023/',
    newTab: '_blank',
    class: 'catalog',
  },
  {
    id: 8,
    name: 'Our Partners',
    icon: <FaUsers />,
    linkUrl: '/ourPartners',
    class: 'ourPartner',
  },
  {
    id: 9,
    name: 'Contact',
    icon: <RiContactsFill />,
    linkUrl: '/contact-us',
    class: 'contact',
  },
];

// ===================== Home page slider ================
export const dataWorld = [
  {
    id: '1',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678436922/jjr%20photos/all%20jjr%20video/Media8_fahcwh.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678444484/jjr%20photos/all%20jjr%20video/media_8_z8wmzw.png',
  },
  {
    id: '2',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678437197/jjr%20photos/all%20jjr%20video/Media14_axzjpf.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678444483/jjr%20photos/all%20jjr%20video/media_14_fq7jjp.png',
  },
  {
    id: '3',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678437060/jjr%20photos/all%20jjr%20video/Media12_pfzjbc.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678444482/jjr%20photos/all%20jjr%20video/media12_qkscqy.png',
  },
  {
    id: '4',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678436718/jjr%20photos/all%20jjr%20video/Media8_equqzw.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678444481/jjr%20photos/all%20jjr%20video/Media8_equqzw_arqq0x.png',
  },
  {
    id: '5',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678437034/jjr%20photos/all%20jjr%20video/Media11_jpuhij.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678444481/jjr%20photos/all%20jjr%20video/media11_hubodg.png',
  },
  {
    id: '6',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678436865/jjr%20photos/all%20jjr%20video/Media10_d97giq.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678787396/jjr%20photos/all%20jjr%20video/Media10_pr3vgi.png',
  },
  {
    id: '7',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678436747/jjr%20photos/all%20jjr%20video/Media6_xoas2g.mov',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678444480/jjr%20photos/all%20jjr%20video/Media6_xoas2g_ee20r1.png',
  },
  {
    id: '8',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678436737/jjr%20photos/all%20jjr%20video/page_34_grhtj0.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678444477/jjr%20photos/all%20jjr%20video/page_34_grhtj0_n3734k.png',
  },
  {
    id: '9',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351348/jjr%20photos/Technology%202/Media9_uzypxv.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678787396/jjr%20photos/all%20jjr%20video/Media9_uzypxv_bs3asl.png',
  },
  {
    id: '10',
    videoUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1678436979/jjr%20photos/all%20jjr%20video/Media10_uf2mg2.mp4',

    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1678444479/jjr%20photos/all%20jjr%20video/media_10_jocznb.png',
  },
];

// ================ our partners logo =============

export const partnersLogo = [
  {
    id: 1,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498257/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo32_l9uoaa.png',
  },
  {
    id: 2,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498257/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo11_yzwgeg.png',
  },
  {
    id: 3,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498257/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo13_fqn8nq.png',
    class: 'logoWidth',
  },
  {
    id: 4,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498256/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo12_zjnk9o.png',
  },
  {
    id: 5,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498256/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo10_xkybxd.png',
  },
  {
    id: 6,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498256/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo7_yxyfw8.png',
  },
  {
    id: 7,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498256/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo6_f6trwt.png',
  },
  {
    id: 8,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498256/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo8_ujcyvj.png',
  },
  {
    id: 9,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498256/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo4_utde2r.png',
  },
  {
    id: 10,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo5_zsavlk.png',
  },
  {
    id: 11,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo36_by86qv.png',
  },
  {
    id: 12,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo2_kloo4f.png',
  },
  {
    id: 13,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo34_zoflzn.png',
  },
  {
    id: 14,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo35_vlzrn6.png',
  },
  {
    id: 15,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo31_lsg40u.png',
  },
  {
    id: 16,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo29_ahrcvd.png',
  },
  {
    id: 17,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo1_e09u61.png',
    class: 'logoZain',
  },
  {
    id: 18,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498254/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo28_xhrl0v.png',
  },
  {
    id: 19,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498254/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo30_k5dn5p.png',
  },
  {
    id: 20,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498254/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo27_xwiqdm.png',
  },
  {
    id: 21,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498254/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo24_wfzxaa.png',
    class: 'logoWidthSecLast',
  },
  {
    id: 22,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498254/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo20_ulryqh.png',
  },
  {
    id: 23,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1678790328/jjr%20photos/our%20partners%20logo%20jjr%20networ/Picture1_irynfx.png',
    class: 'logoWidthSecLast',
  },
  {
    id: 24,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498253/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo23_w6ht6t.png',
  },
  {
    id: 25,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498253/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo22_awupng.png',
  },
  {
    id: 26,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498253/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo21_g225tf.png',
  },
  {
    id: 27,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498252/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo16_cg9jbk.png',
  },
  {
    id: 28,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498252/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo17_ujbvr5.png',
  },
  {
    id: 29,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498256/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo3_opc8zs.png',
  },
  {
    id: 30,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo33_aev9pv.png',
  },
  {
    id: 31,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498255/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo26_p3cy6k.png',
  },
  {
    id: 32,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498253/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo15_kqttsw.png',
  },
  {
    id: 33,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498253/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo18_tyowi6.png',
    class: 'logoWidthSecLast',
  },
  {
    id: 34,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498252/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo19_fpyfda.png',
    class: 'logoWidthSecLast',
  },
  {
    id: 35,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498252/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo14_hqyyle.png',
    class: 'logoWidthLast',
  },
  {
    id: 36,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1678790674/jjr%20photos/our%20partners%20logo%20jjr%20networ/Picture2_1_g0tevt.png',
    class: 'logoWidthLast',
  },
];

// ================== Event Production ================
export const eventData = [
  {
    id: 'carouselExampleControls28',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185237/jjr%20photos/Netflix%20Sweet%20Girl%20-%20KSA/Picture27_d2wvah.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185237/jjr%20photos/Netflix%20Sweet%20Girl%20-%20KSA/Picture29_jbas8n.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185237/jjr%20photos/Netflix%20Sweet%20Girl%20-%20KSA/Picture28_ppqxzq.jpg',
    eventName: 'Netflix Sweet Girl - KSA',
  },
  {
    id: 'carouselExampleControls25',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185197/jjr%20photos/NETFLIX%20Casa%20De%20Papel%20Different%20Seasons/Picture43_jzueka.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185197/jjr%20photos/NETFLIX%20Casa%20De%20Papel%20Different%20Seasons/Picture42_jh3mql.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185197/jjr%20photos/NETFLIX%20Casa%20De%20Papel%20Different%20Seasons/Picture41_jra8mh.jpg',
    eventName: 'NETFLIX Casa De Papel Different Seasons',
  },
  {
    id: 'carouselExampleControls24',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185177/jjr%20photos/Netflix%20Army%20of%20the%20dead%20-%20KSA/Picture32_ab9muh.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185177/jjr%20photos/Netflix%20Army%20of%20the%20dead%20-%20KSA/Picture30_lt3mpa.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185177/jjr%20photos/Netflix%20Army%20of%20the%20dead%20-%20KSA/Picture31_fbkifi.jpg',
    eventName: 'Netflix Army of the dead - KSA',
  },

  {
    id: 'carouselExampleControls18',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679395620/jjr%20photos/Dubai%20International%20Finanacial%20Center%20-%20Art%20Nights/IMG_0002_davdx6.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679395626/jjr%20photos/Dubai%20International%20Finanacial%20Center%20-%20Art%20Nights/IMG_9960_gk3wul.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679395617/jjr%20photos/Dubai%20International%20Finanacial%20Center%20-%20Art%20Nights/IMG_9957_nrwvqy.jpg',
    eventName: 'Dubai International Financial Center - Art Nights',
  },
  {
    id: 'carouselExampleControls19',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678184974/jjr%20photos/Dubai%20TV%20-%20UAE/Picture60_l8dxjk.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678184974/jjr%20photos/Dubai%20TV%20-%20UAE/Picture62_ovx34n.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678184974/jjr%20photos/Dubai%20TV%20-%20UAE/Picture61_zltfua.jpg',
    eventName: 'Dubai TV - UAE',
  },
  {
    id: 'carouselExampleControls20',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678184993/jjr%20photos/KSA%20Pavilion%20-%20Closing%20Show%20-%20Expo2022/Picture46_w0k3w8.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678184993/jjr%20photos/KSA%20Pavilion%20-%20Closing%20Show%20-%20Expo2022/Picture47_jnrvd5.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678184993/jjr%20photos/KSA%20Pavilion%20-%20Closing%20Show%20-%20Expo2022/Picture46_w0k3w8.jpg',
    eventName: 'KSA Pavilion - Closing Show - Expo2022',
  },
  {
    id: 'carouselExampleControls21',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678872716/jjr%20photos/mdlbeast%20-%20KSA/Picture6_jl4rby.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678872716/jjr%20photos/mdlbeast%20-%20KSA/Picture4_qfj2dn.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678872716/jjr%20photos/mdlbeast%20-%20KSA/Picture5_g9gxdl.jpg',
    eventName: 'mdlbeast - KSA',
  },
  {
    id: 'carouselExampleControls22',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185153/jjr%20photos/Nestle%20Year%20End%20And%20Product%20Launch%20-%20UAE/Picture56_xuvc0b.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185154/jjr%20photos/Nestle%20Year%20End%20And%20Product%20Launch%20-%20UAE/Picture51_kfmaav.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185153/jjr%20photos/Nestle%20Year%20End%20And%20Product%20Launch%20-%20UAE/Picture53_rcbmsg.jpg',
    eventName: 'Nestle Year End And Product Launch - UAE',
  },

  {
    id: 'carouselExampleControls26',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185221/jjr%20photos/Netflix%20Stranger%20Thing%20-%20KSA/Picture33_pn1fjb.jpg',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185221/jjr%20photos/Netflix%20Stranger%20Thing%20-%20KSA/Picture36_n9ugww.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185221/jjr%20photos/Netflix%20Stranger%20Thing%20-%20KSA/Picture34_h5ci4q.jpg',
    eventName: 'Netflix Stranger Things - KSA',
  },
  {
    id: 'carouselExampleControls27',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185256/jjr%20photos/Netflix%20the%20fatest%20%20KSA/Picture23_d6bwt4.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185256/jjr%20photos/Netflix%20the%20fatest%20%20KSA/Picture26_us9u4o.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185256/jjr%20photos/Netflix%20the%20fatest%20%20KSA/Picture21_urkz3p.jpg',
    eventName: 'Netflix the fastest KSA',
  },

  {
    id: 'carouselExampleControls29',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185272/jjr%20photos/Noon%20KSA/Picture49_uyfhmt.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185272/jjr%20photos/Noon%20KSA/Picture50_crgbny.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185272/jjr%20photos/Noon%20KSA/Picture49_uyfhmt.jpg',
    eventName: 'Noon KSA',
  },

  {
    id: 'carouselExampleControls36',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185642/jjr%20photos/The%20Official%20Launch%20of%20Orbi%20-%20UAE/Picture57_zesuyg.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185642/jjr%20photos/The%20Official%20Launch%20of%20Orbi%20-%20UAE/Picture59_hgbdyr.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185641/jjr%20photos/The%20Official%20Launch%20of%20Orbi%20-%20UAE/Picture58_hevxn9.jpg',
    eventName: 'The Official Launch of Orbi - UAE',
  },
  {
    id: 'carouselExampleControls37',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185690/jjr%20photos/Zain%20KSA/Picture44_dpz4c8.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185690/jjr%20photos/Zain%20KSA/Picture45_msvw5g.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185690/jjr%20photos/Zain%20KSA/Picture44_dpz4c8.jpg',
    eventName: 'Zain KSA',
  },
  {
    id: 'carouselExampleControls38',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679050831/jjr%20photos/gray%20man%20netflix/1-2_uuioye.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679050831/jjr%20photos/gray%20man%20netflix/1-1_wvoghd.png',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679050831/jjr%20photos/gray%20man%20netflix/2-1_nubvc1.png',
    eventName: 'gray man netflix',
  },
];

// =============== Our Work Data ===============
export const allVideosData = [
  {
    id: 'carouselExampleControls',

    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350948/jjr%20photos/KSA%20Pavilion%20-%20Closing%20Show%20-%20Expo2022/Media9_e1khqy.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350948/jjr%20photos/KSA%20Pavilion%20-%20Closing%20Show%20-%20Expo2022/Media9_e1khqy.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350948/jjr%20photos/KSA%20Pavilion%20-%20Closing%20Show%20-%20Expo2022/Media9_e1khqy.mp4',
    class: 'active',
    eventName: 'KSA Pavilion Closing Show',
  },
  {
    id: 'carouselExampleControls2',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350985/jjr%20photos/KSA%20Pavilion%20National%20day%20Ceremony%20-%20Expo2020/Media5_ktcajs.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350970/jjr%20photos/KSA%20Pavilion%20National%20day%20Ceremony%20-%20Expo2020/Media4_aw3jqp.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350985/jjr%20photos/KSA%20Pavilion%20National%20day%20Ceremony%20-%20Expo2020/Media5_ktcajs.mp4',
    eventName: 'KSA Pavilion National day',
  },
  {
    id: 'carouselExampleControls3',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350993/jjr%20photos/mdlbeast%20-%20KSA/Media1_putbco.mov',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350991/jjr%20photos/mdlbeast%20-%20KSA/Media3_xlebhu.mov',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678350990/jjr%20photos/mdlbeast%20-%20KSA/Media2_b0bmkw.mov',
    eventName: 'mdlbeast - KSA',
  },
  {
    id: 1,
    name: 'carouselExampleControls4',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351006/jjr%20photos/Netflix%20Army%20of%20the%20dead%20-%20KSA/Media8_s7vt4r.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351006/jjr%20photos/Netflix%20Army%20of%20the%20dead%20-%20KSA/Media8_s7vt4r.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351006/jjr%20photos/Netflix%20Army%20of%20the%20dead%20-%20KSA/Media8_s7vt4r.mp4',
    eventName: 'Netflix Army of the dead - KSA',
  },
  {
    id: 'carouselExampleControls5',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351033/jjr%20photos/Netflix%20Stranger%20Thing%20-%20KSA/page_34_e5vacx.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351033/jjr%20photos/Netflix%20Stranger%20Thing%20-%20KSA/page_34_e5vacx.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351033/jjr%20photos/Netflix%20Stranger%20Thing%20-%20KSA/page_34_e5vacx.mp4',
    eventName: 'Netflix Stranger Thing - KSA',
  },
  {
    id: 'carouselExampleControls6',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351038/jjr%20photos/Netflix%20Sweet%20Girl%20-%20KSA/Media7_knvo9p.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351038/jjr%20photos/Netflix%20Sweet%20Girl%20-%20KSA/Media7_knvo9p.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351038/jjr%20photos/Netflix%20Sweet%20Girl%20-%20KSA/Media7_knvo9p.mp4',
    eventName: 'Netflix Sweet Girl - KSA',
  },
  {
    id: 'carouselExampleControls7',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351135/jjr%20photos/Netflix%20the%20fatest%20%20KSA/fastest_wcgedc.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351055/jjr%20photos/Netflix%20the%20fatest%20%20KSA/Media6_ki6p7h.mov',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351058/jjr%20photos/Netflix%20the%20fatest%20%20KSA/Media4_dkcljl.mp4',
    eventName: 'Netflix the fatest KSA',
  },
  {
    id: 'carouselExampleControls8',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351160/jjr%20photos/technology/Media10_rgnkcq.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351144/jjr%20photos/technology/Media6_l4d84q.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351160/jjr%20photos/technology/Media10_rgnkcq.mp4',
    eventName: 'INTERACTIVE VENDING MACHINE',
  },
  {
    id: 'carouselExampleControls9',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351269/jjr%20photos/Technology%201/Media8_nq027v.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351241/jjr%20photos/Technology%201/Media7_jwvvot.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351269/jjr%20photos/Technology%201/Media8_nq027v.mp4',
    eventName: 'TWITTER TREE',
  },
  {
    id: 'carouselExampleControls10',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351348/jjr%20photos/Technology%202/Media9_uzypxv.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351334/jjr%20photos/Technology%202/Media10_mxnmo2.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351348/jjr%20photos/Technology%202/Media9_uzypxv.mp4',
    eventName: 'DIGITAL GRAFITTI',
  },
  {
    id: 'carouselExampleControls11',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351213/jjr%20photos/Technology%203/Media12_ycqsfn.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351201/jjr%20photos/Technology%203/Media11_apo9fx.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351213/jjr%20photos/Technology%203/Media12_ycqsfn.mp4',
    eventName: 'say hello',
  },
  {
    id: 'carouselExampleControls12',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351421/jjr%20photos/Technology%204/Media13_otcmli.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351421/jjr%20photos/Technology%204/Media13_otcmli.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351421/jjr%20photos/Technology%204/Media13_otcmli.mp4',
    eventName: 'VIRTUAL TRAVELLER',
  },
  {
    id: 'carouselExampleControls13',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351443/jjr%20photos/Technology%205/Media14_zqivid.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351443/jjr%20photos/Technology%205/Media14_zqivid.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678351443/jjr%20photos/Technology%205/Media14_zqivid.mp4',
    eventName: 'MOTION EXPERIENCES',
  },
  {
    id: 'carouselExampleControls14',
    video1:
      'https://res.cloudinary.com/xcltech/video/upload/v1678966088/jjr%20photos/all%20jjr%20video/WhatsApp_Video_2023-03-16_at_4.18.31_PM_nhw2hv.mp4',
    video2:
      'https://res.cloudinary.com/xcltech/video/upload/v1678966079/jjr%20photos/all%20jjr%20video/WhatsApp_Video_2023-03-16_at_4.17.22_PM_jzach1.mp4',
    video3:
      'https://res.cloudinary.com/xcltech/video/upload/v1678965977/jjr%20photos/all%20jjr%20video/WhatsApp_Video_2023-03-16_at_4.17.53_PM_y1qjtf.mp4',
    eventName: 'gray man netflix',
  },
  //   {
  //     id: 'carouselExampleControls14',
  //     video1: '',
  //     video2: '',
  //     video3: '',
  //     eventName: '',
  //   },
];

// =============== Merchandise Data ===============
export const merchandData = [
  {
    id: 'carouselExampleControls',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/IMG_9141_tncjjl.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/IMG_8828_vfm7pt.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679306758/jjr%20photos/MERCHANDISING/IMG_7176_ub00b1.jpg',
    eventName: 'MERCHANDISING',
  },
  {
    id: 'carouselExampleControls2',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/IMG_7826_gu7rmc.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679306761/jjr%20photos/MERCHANDISING/IMG_6493_qtd9er.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/IMG_0180_knys7i.jpg',
    eventName: 'MERCHANDISING',
  },
  {
    id: 'carouselExampleControls3',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/IMG_0375_p79j4r.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/IMG_0324_kuyg4t.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679306760/jjr%20photos/MERCHANDISING/IMG_3821_qeshbq.jpg',
    eventName: 'MERCHANDISING',
  },
  {
    id: 'carouselExampleControls4',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679306758/jjr%20photos/MERCHANDISING/IMG_8072_ooj5z9.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/3294f1f5-99fc-482d-9940-8ab9f21e14ba_2_irblwe.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/IMG_0924_uravn8.jpg',
    eventName: 'MERCHANDISING',
  },
  {
    id: 'carouselExampleControls5',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679306761/jjr%20photos/MERCHANDISING/IMG_5989_crcvk6.png',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679306760/jjr%20photos/MERCHANDISING/IMG_5717_2_pil5qc.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679306760/jjr%20photos/MERCHANDISING/IMG_5076_zdvz58.jpg',
    eventName: 'MERCHANDISING',
  },
  {
    id: 'carouselExampleControls6',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679306760/jjr%20photos/MERCHANDISING/IMG_2025_o9qbvr.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679306760/jjr%20photos/MERCHANDISING/IMG_1879_qoufxt.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679306759/jjr%20photos/MERCHANDISING/IMG_9774_gxsgfg.jpg',
    eventName: 'MERCHANDISING',
  },
  {
    id: 'carouselExampleControls7',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679306760/jjr%20photos/MERCHANDISING/IMG_2695_umvu9g.jpg',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679306758/jjr%20photos/MERCHANDISING/IMG_7439_lquyyq.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679306758/jjr%20photos/MERCHANDISING/IMG_7453_togalm.jpg',
    eventName: 'MERCHANDISING',
  },
];

// =============== Technology ===============
export const techData = [
  {
    id: 'carouselExampleControls',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185446/jjr%20photos/technology/Picture66_ssbhrw.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678444477/jjr%20photos/all%20jjr%20video/media_6_ylu8lv.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185446/jjr%20photos/technology/Picture66_ssbhrw.jpg',
    techName: 'INTERACTIVE VENDING MACHINE',
  },
  {
    id: 'carouselExampleControls1',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185482/jjr%20photos/Technology%201/Picture70_iiegqb.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185482/jjr%20photos/Technology%201/Picture69_hjezer.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185482/jjr%20photos/Technology%201/Picture70_iiegqb.jpg',
    techName: 'TWITTER TREE',
  },
  {
    id: 'carouselExampleControls2',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185502/jjr%20photos/Technology%202/Picture73_o1yqvw.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185502/jjr%20photos/Technology%202/Picture73_o1yqvw.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185502/jjr%20photos/Technology%202/Picture72_ih7lh7.jpg',
    techName: 'DIGITAL GRAFITTI',
  },
  {
    id: 'carouselExampleControls3',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185529/jjr%20photos/Technology%203/Picture75_fn5s13.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185529/jjr%20photos/Technology%203/Picture75_fn5s13.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185529/jjr%20photos/Technology%203/Picture75_fn5s13.jpg',
    techName: 'SAY HELLO',
  },
  {
    id: 'carouselExampleControls4',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185546/jjr%20photos/Technology%204/Picture78_jejt4r.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185546/jjr%20photos/Technology%204/Picture78_jejt4r.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185546/jjr%20photos/Technology%204/Picture78_jejt4r.jpg',
    techName: 'VIRTUAL TRAVELLER',
  },
  {
    id: 'carouselExampleControls5',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185604/jjr%20photos/Technology%205/Picture80_if4nei.jpg',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678792851/jjr%20photos/technology/Capture_sfojvj.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678792851/jjr%20photos/technology/Capture_sfojvj.png',
    techName: 'MOTION EXPERIENCES',
  },
  {
    id: 'carouselExampleControls6',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185620/jjr%20photos/Technology%206/Picture86_xxfguh.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185620/jjr%20photos/Technology%206/Picture86_xxfguh.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185621/jjr%20photos/Technology%206/Picture85_drzijj.jpg',
    techName: 'AUGMENTED REALITY COLORING',
  },
  {
    id: 'carouselExampleControls7',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678787396/jjr%20photos/all%20jjr%20video/Media10_pr3vgi.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678793307/jjr%20photos/Picture3_mgqgjw.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678787396/jjr%20photos/all%20jjr%20video/Media10_pr3vgi.png',
    techName: 'INTERACTIVE COFFEE MACHINE',
  },
  {
    id: 'carouselExampleControls8',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678873173/jjr%20photos/Technology%20images/Capture_mwtrih.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678873045/jjr%20photos/Technology%20images/Picture7_lqoh5y.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678873045/jjr%20photos/Technology%20images/Picture7_lqoh5y.jpg',
    techName: 'BLOWER PHOTOBOOTH',
  },
  {
    id: 'carouselExampleControls9',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678444479/jjr%20photos/all%20jjr%20video/media_10_jocznb.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678444479/jjr%20photos/all%20jjr%20video/media_10_jocznb.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678444479/jjr%20photos/all%20jjr%20video/media_10_jocznb.png',
    techName: 'DIGITAL SLINGSHOT',
  },
  {
    id: 'carouselExampleControls10',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185529/jjr%20photos/Technology%203/Picture76_yzbh84.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185529/jjr%20photos/Technology%203/Picture76_yzbh84.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185529/jjr%20photos/Technology%203/Picture76_yzbh84.jpg',
    techName: 'DIGITAL POST- IT',
  },
  {
    id: 'carouselExampleControls11',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185546/jjr%20photos/Technology%204/Picture79_kwl2vh.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185546/jjr%20photos/Technology%204/Picture79_kwl2vh.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185546/jjr%20photos/Technology%204/Picture79_kwl2vh.jpg',
    techName: 'MOTION GAME',
  },
  {
    id: 'carouselExampleControls12',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185604/jjr%20photos/Technology%205/Picture82_sk0nyx.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185604/jjr%20photos/Technology%205/Picture83_ti2pzy.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185604/jjr%20photos/Technology%205/Picture82_sk0nyx.jpg',
    techName: 'INTERACTIVE WALL',
  },
  {
    id: 'carouselExampleControls13',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185604/jjr%20photos/Technology%205/Picture84_yhx0zl.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185604/jjr%20photos/Technology%205/Picture84_yhx0zl.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185604/jjr%20photos/Technology%205/Picture84_yhx0zl.jpg',
    techName: 'AUGMENTED REALITY',
  },
  {
    id: 'carouselExampleControls14',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185620/jjr%20photos/Technology%206/Picture87_ily5r7.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185620/jjr%20photos/Technology%206/Picture87_ily5r7.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185620/jjr%20photos/Technology%206/Picture87_ily5r7.jpg',
    techName: 'VIRTUAL REALITY',
  },
  {
    id: 'carouselExampleControls15',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678874104/jjr%20photos/Technology%20images/Picture11_u3ok6s.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678874104/jjr%20photos/Technology%20images/Picture11_u3ok6s.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678874103/jjr%20photos/Technology%20images/Picture12_zodvko.png',
    techName: 'LED BICYCLES',
  },
];

// ================ Testimonials data =============
export const tesiData = [
  {
    id: 1,
    name: 'Elie Karam',
    job: 'Dubai TV',
    review:
      'On all the projects that we commissioned JJR Network they showed great dedication, commitment and punctual delivery timelines , they are a professional and resourceful production partner with a vast network of suppliers which can deliver to any given brief',
    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
    active: 'active',
  },
  {
    id: 2,
    name: 'Catherine Yacoub',
    job: 'Hilton',
    review:
      'Rapid, efficient, trustworthy, always available, and high quality work is something always to expect when working with JJR NETWORK.',
    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
  },
  {
    id: 3,
    name: 'Wael Karbala',
    job: 'National Bonds',
    review:
      'We choose to work with JJR because simply they are reliable. They are skilled and professional in production. These guys are good',
    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
  },
  {
    id: 4,
    name: 'Ziad Moghabghab',
    job: 'Uber',
    review:
      'Over my years of working with JJR, they have never shown anything less than the highest quality of work whether it was from a business relationship perspective or from high quality deliverables.The one thing I cherish the most is the fact that they always go farther than the extra mile to meet requests even in the shortest of timelines and in the toughest of times.',
    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
  },
  {
    id: 5,
    name: 'Yasmina Ali Hassan',
    job: 'Amazon',
    review:
      'In business, it’s important to find people you can count on. JJR is one of those reliable partners. Thanks for all your hard work!',
    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
  },

  {
    id: 6,
    name: 'Hadi Bashir',
    job: 'Microsoft',
    review: 'Always providing the best quality and service. Keep it up!					',
    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
  },
];

// ================ Production data =============
export const productionAllData = [
  {
    id: 'carouselExampleControls13',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678094857/jjr%20photos/saudi%20cup/Picture4_bewtrk.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678094857/jjr%20photos/saudi%20cup/Picture5_wp8i9p.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678094857/jjr%20photos/saudi%20cup/Picture2_uhywag.jpg',
    eventName: 'saudi cup',
  },
  {
    id: 'carouselExampleControls3',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678095212/jjr%20photos/diriyah%20season/Picture8_ytvixm.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678095211/jjr%20photos/diriyah%20season/Picture9_lm9ild.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678095211/jjr%20photos/diriyah%20season/Picture10_uqypmr.jpg',
    eventName: 'diriyah season-ksa',
  },
  {
    id: 'carouselExampleControls',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678095767/jjr%20photos/Al-mirkaz%20Ramadan%20Tent/Picture11_um4hcq.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1677241311/jjr%20photos/Al-mirkaz%20Ramadan%20Tent/ramadan_tent_idh7jb.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678095767/jjr%20photos/Al-mirkaz%20Ramadan%20Tent/Picture11_um4hcq.jpg',
    eventName: 'Al-mirkaz Ramadan Tent',
  },
  {
    id: 'carouselExampleControls14',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678095829/jjr%20photos/sok%20okaz/Picture13_ofoa8f.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678095829/jjr%20photos/sok%20okaz/Picture12_oq6cmh.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1677241413/jjr%20photos/sok%20okaz/Screenshot_40_nltev9.png',
    eventName: 'souk okaz',
  },
  {
    id: 'carouselExampleControls6',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678095864/jjr%20photos/global%20village/Picture14_s19psu.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678095863/jjr%20photos/global%20village/Picture15_dntj2g.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1677241379/jjr%20photos/global%20village/Screenshot_35_lzzhp8.png',
    eventName: 'global village',
  },
  {
    id: 'carouselExampleControls2',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096024/jjr%20photos/burj%20plaza/Picture17_z4fbkp.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096024/jjr%20photos/burj%20plaza/Picture16_j2jhzo.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096024/jjr%20photos/burj%20plaza/Picture18_zgkzbc.jpg',
    eventName: 'burj plaza',
  },
  {
    id: 'carouselExampleControls12',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096126/jjr%20photos/Retail%20shop/Picture21_mmloco.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1677241407/jjr%20photos/Retail%20shop/Screenshot_30_keshux.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096126/jjr%20photos/Retail%20shop/Picture19_vwzytg.jpg',
    eventName: 'Retail Shops',
  },
  {
    id: 'carouselExampleControls4',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1677241365/jjr%20photos/dyson/Screenshot_32_nqfz0c.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096242/jjr%20photos/dyson/Picture23_gvbuae.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096242/jjr%20photos/dyson/Picture22_mrxpbs.jpg',
    eventName: 'dyson',
  },
  // {
  //   id: 'carouselExampleControls9',
  //   img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679047027/jjr%20photos/noor%20riyadh/Picture1_rszdvk.png',
  //   img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679047026/jjr%20photos/noor%20riyadh/Picture4_v5npc2.png',
  //   img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679047025/jjr%20photos/noor%20riyadh/Picture3_gll7dr.png',
  //   eventName: 'noor riyadh',
  // },
  {
    id: 'carouselExampleControls30',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096822/jjr%20photos/osn%20game%20of%20throne%20dfc/Picture46_c0skgg.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096821/jjr%20photos/osn%20game%20of%20throne%20dfc/Picture44_l0hf9u.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096820/jjr%20photos/osn%20game%20of%20throne%20dfc/Picture45_q2wxbt.png',
    eventName: 'osn game of throne dfc',
  },
  {
    id: 'carouselExampleControls8',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096475/jjr%20photos/mother%20of%20the%20nation/Picture34_boik23.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096475/jjr%20photos/mother%20of%20the%20nation/Picture33_y60wyd.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1677241383/jjr%20photos/mother%20of%20the%20nation/Screenshot_39_zyjjvf.png',
    eventName: 'mother of the nation',
  },
  {
    id: 'carouselExampleControls7',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096594/jjr%20photos/monenpick%20permanent/Picture35_faq0yx.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096594/jjr%20photos/monenpick%20permanent/Picture36_q8agr3.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096594/jjr%20photos/monenpick%20permanent/Picture35_faq0yx.jpg',
    eventName: 'movenpick permanent kiosk',
  },
  {
    id: 'carouselExampleControls32',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096696/jjr%20photos/Promotional%20stand/Picture40_drqfk1.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096695/jjr%20photos/Promotional%20stand/Picture38_bbmopa.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096694/jjr%20photos/Promotional%20stand/Picture37_m2tvrv.jpg',
    eventName: 'Promotional stand',
  },
  {
    id: 'carouselExampleControls10',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096822/jjr%20photos/osn%20game%20of%20throne%20dfc/Picture46_c0skgg.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096821/jjr%20photos/osn%20game%20of%20throne%20dfc/Picture44_l0hf9u.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096820/jjr%20photos/osn%20game%20of%20throne%20dfc/Picture45_q2wxbt.png',
    eventName: 'osn game of throne dfc',
  },
  {
    id: 'carouselExampleControls17',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096941/jjr%20photos/vogue%20loves%20fashion/Picture47_mcy6fd.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096940/jjr%20photos/vogue%20loves%20fashion/Picture48_lfvgm8.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096939/jjr%20photos/vogue%20loves%20fashion/Picture49_vjcpoi.png',
    eventName: 'vogue loves fashion',
  },
  {
    id: 'carouselExampleControls5',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678097111/jjr%20photos/exhibition/Picture55_q57oyi.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678097110/jjr%20photos/exhibition/Picture56_vegryg.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678097110/jjr%20photos/exhibition/Picture53_xhne6d.png',
    eventName: 'exhibition',
  },
  {
    id: 'carouselExampleControls15',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679305881/jjr%20photos/styrofoam%20execution/WhatsApp_Image_2023-03-20_at_2.44.25_PM_tjibnq.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679305881/jjr%20photos/styrofoam%20execution/WhatsApp_Image_2023-03-20_at_2.45.06_PM_x06qia.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679305881/jjr%20photos/styrofoam%20execution/WhatsApp_Image_2023-03-20_at_2.44.51_PM_kc7d0x.jpg',
    eventName: 'styrofoam execution',
  },
  {
    id: 'carouselExampleControls33',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185356/jjr%20photos/styrofoam%20execution/Picture92_frcizb.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185356/jjr%20photos/styrofoam%20execution/Picture91_goonki.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185356/jjr%20photos/styrofoam%20execution/Picture94_uc26xy.jpg',
    eventName: 'STYROFOAM',
  },
  {
    id: 'carouselExampleControls34',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185380/jjr%20photos/STYROFOAM%20EXECUTION%201/Picture96_hkbabw.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185380/jjr%20photos/STYROFOAM%20EXECUTION%201/Picture95_zc0jtl.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185380/jjr%20photos/STYROFOAM%20EXECUTION%201/Picture96_hkbabw.jpg',
    eventName: 'SPECIAL HALLOWEEN EXECUTION WHITE DUBAI',
  },
  {
    id: 'carouselExampleControls35',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678185411/jjr%20photos/STYROFOAM%20EXECUTION%202/Picture100_nlzb9w.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185411/jjr%20photos/STYROFOAM%20EXECUTION%202/Picture97_sgebv1.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185411/jjr%20photos/STYROFOAM%20EXECUTION%202/Picture99_l1o5dj.jpg',
    eventName: 'STYROFOAM HARD COATING FIBER GLASS',
  },
  {
    id: 'carouselExampleControls31',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1677241396/jjr%20photos/pos%20material/Screenshot_38_khnz5k.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678185302/jjr%20photos/pos%20material/Picture4_fs1iq1.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678185302/jjr%20photos/pos%20material/Picture3_hsbtmd.jpg',
    eventName: 'pos material',
  },
  {
    id: 'carouselExampleControls16',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678096752/jjr%20photos/uber%20ksa/Picture42_hypivq.png',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678096756/jjr%20photos/uber%20ksa/Picture43_mplran.png',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678096752/jjr%20photos/uber%20ksa/Picture42_hypivq.png',
    eventName: 'uber ksa',
  },
  {
    id: 'carouselExampleControls111',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678184916/jjr%20photos/outdoor/Picture6_ntppye.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678184916/jjr%20photos/outdoor/Picture5_sovbeb.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678184916/jjr%20photos/outdoor/Picture7_l8mz7t.jpg',
    eventName: 'outdoor',
  },
  {
    id: 'carouselExampleControls112',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679395939/jjr%20photos/Sharjah%20Event/845a3282-2a55-4658-ac1d-aee4931c5570_xcwamd.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679395939/jjr%20photos/Sharjah%20Event/65c482e6-afa3-494d-a05a-0a1c6f23d1f8_d1vltu.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679395939/jjr%20photos/Sharjah%20Event/d4515e4a-f90f-4024-80d8-4c38b883ae25_of4k1y.jpg',
    eventName: 'Sharjah event',
  },
  {
    id: 'carouselExampleControls113',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1678266915/jjr%20photos/emirates_cyibkw.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1678266915/jjr%20photos/emirates_cyibkw.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1678266915/jjr%20photos/emirates_cyibkw.jpg',
    eventName: 'emirates',
  },
  {
    id: 'carouselExampleControls114',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679396080/jjr%20photos/TikTok/50359126-00bc-47ed-8d3d-8207e2d27015_rv3suu.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679396083/jjr%20photos/TikTok/ad6e86fc-e535-4134-9719-5aaf2e482e81_ppqa9c.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679396080/jjr%20photos/TikTok/50359126-00bc-47ed-8d3d-8207e2d27015_rv3suu.jpg',
    eventName: 'tiktok',
  },
  {
    id: 'carouselExampleControls115',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679396373/jjr%20photos/red%20bull/PHOTO-2022-01-24-12-55-44_1_ajtkiw.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679396350/jjr%20photos/red%20bull/PHOTO-2022-04-15-07-20-27_3_zu0ky7.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679396384/jjr%20photos/red%20bull/PHOTO-2022-04-07-09-26-28_3_nt66zb.jpg',
    eventName: 'Red Bull Mobile',
  },
];

// ================ our services data =============
export const serviceCard = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/manufacturing_jmsdko.png',
    title: 'Production',
    para: 'Whether from scratch or ready -made designs, we produce stands, kiosks, fit-outs, signages and POS materials. Our aim is to create a dynamic experience that leaves a lasting impression on everyone involved, while also ensuring that all technical elements are executed flawlessly to support the goal and objectives of the campaign or event.',
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/interaction_r25pu4.png',
    title: '360 Degree Events',
    para: 'We specialize in planning, organizing and executing events of all types, sizes and complexities. JJR NETWORK is equipped with the latest technology and tools to deliver an immersive experience for our clients and their attendees.',
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/unboxing_d6dxot.png',
    title: 'Merchandising/BTL',
    para: 'The goal in our BTL services is to create a more personalized and targeted marketing approach, as opposed to traditional advertising methods.',
  },
  // {
  //   id: 4,
  //   icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/food_ksevrq.png',
  //   title: 'Catering',
  //   para: ' Catering companies can take care of everything from menu planning and preparation to delivery and setup, making it easier for hosts to focus on other aspects of their event.',
  // },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/technology_scx2ty.png',
    title: 'Technology',
    para: 'We provide our clients with an array of the latest technology services. This will help our clients create a more engaging and interactive experience for attendees, while also providing valuable data and insights for our clients to use in future events.',
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/design-thinking_agzycd.png',
    title: 'Creative Decoration',
    para: 'Creating 3D sculptures or wall art by cutting Styrofoam into desired and customizable shapes. Styrofoam decorations for events can be painted, coated or covered with other materials to achieve a desired look and feel. They are durable and can withstand a variety of weather conditions making them suitable for indoor and outdoor events. ',
  },
];

export const noorRiyadh = [
  {
    id: 'carouselExampleControls9',
    img1: 'https://res.cloudinary.com/xcltech/image/upload/v1679397079/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/RED_8081_bajluq.jpg',
    img2: 'https://res.cloudinary.com/xcltech/image/upload/v1679397072/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/RED_8090_rif7g8.jpg',
    img3: 'https://res.cloudinary.com/xcltech/image/upload/v1679397073/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/RED_8720_e6rruk.jpg',
    img4: 'https://res.cloudinary.com/xcltech/image/upload/v1679397070/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/RED_8076_f9ncno.jpg',
    img5: 'https://res.cloudinary.com/xcltech/image/upload/v1679397063/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4805_lmeqdy.jpg',
    img6: 'https://res.cloudinary.com/xcltech/image/upload/v1679397063/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/RED_8072_sysiyw.jpg',
    img7: 'https://res.cloudinary.com/xcltech/image/upload/v1679397062/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/RED_8058_j5yhvc.jpg',
    img8: 'https://res.cloudinary.com/xcltech/image/upload/v1679397048/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/RED_8568_ysaeyj.jpg',
    img9: 'https://res.cloudinary.com/xcltech/image/upload/v1679397043/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/606A9591_yxcdhj.jpg',
    img10:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397042/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4794_pgur4a.jpg',
    img11:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397027/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4793_oqgajt.jpg',
    img12:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397027/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4810_wz9wlq.jpg',
    img13:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397025/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4770_nncl1i.jpg',
    img14:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397025/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4802_yjmrvf.jpg',
    img15:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397023/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_8626_eiueks.jpg',
    img16:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397016/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4804_gq7v9y.jpg',
    img17:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397010/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/31f5e8ad-6a58-4968-b5dd-5f9addf86d74_mb76kz.jpg',
    img18:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397009/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4812_lj7ysh.jpg',
    img19:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397009/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/IMG_4808_rslptp.jpg',
    img20:
      'https://res.cloudinary.com/xcltech/image/upload/v1679397008/jjr%20photos/noor%20riyadh/All%20New%20Noor%20Riyadh%20Pics/7c4dfa17-f9fa-4023-9ecf-7a1e0cd4a834_nzpubl.jpg',
    eventName: 'noor riyadh',
  },
];
