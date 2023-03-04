// ========= Menus ==================
// import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
// import { motion } from 'framer-motion';
import { MdReviews } from 'react-icons/md';
import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai';
import { BsCalendar2EventFill, BsBookmarkFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import { BiCategory } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md'; //production icon
import { GiChipsBag } from 'react-icons/gi';
export const MenusData = [
  {
    id: 1,
    name: 'Home',
    icon: <AiFillHome />,
    linkUrl: '/',
  },
  {
    id: 2,
    name: 'About us',
    icon: <BsBookmarkFill />,
    linkUrl: '/about-us',
  },
  {
    id: 3,
    name: 'Production',
    icon: <MdOutlinePrecisionManufacturing />,
    linkUrl: '/production',
  },
  {
    id: 4,
    name: 'Events Activation',
    icon: <BsCalendar2EventFill />,
    linkUrl: '/events',
  },
  {
    id: 5,
    name: 'Technology',
    icon: <AiTwotoneSetting />,
    linkUrl: '/technology',
  },
  {
    id: 6,
    name: 'BTL / Merchandising',
    icon: <GiChipsBag />,
    linkUrl: '/btl-merchand',
  },
  {
    id: 7,
    name: 'Catalog',
    icon: <BiCategory />,
    linkUrl: 'https://jjrnetwork.com/catalog2023/',
    newTab: '_blank',
  },
  {
    id: 8,
    name: 'Our Partners',
    icon: <FaUsers />,
    linkUrl: '/ourPartners',
  },
  {
    id: 9,
    name: 'Contact',
    icon: <RiContactsFill />,
    linkUrl: '/contact-us',
  },
  {
    id: 9,
    name: 'Testimonials',
    icon: <MdReviews />,
    linkUrl: '/testimonials',
  },
];

// ===================== Home page slider ================
export const dataWorld = [
  {
    id: '1',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677322585/ppt%20videos%20for%20jjr/Media4_n2owol.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677322584/ppt%20videos%20for%20jjr/thumb_4_j3mtib.png',
  },
  {
    id: '2',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677322646/ppt%20videos%20for%20jjr/Media6_wws7ya.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677322642/ppt%20videos%20for%20jjr/thumb_6_aqxq2l.png',
  },
  {
    id: '3',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677322757/ppt%20videos%20for%20jjr/Media7_nr8jjy.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677322749/ppt%20videos%20for%20jjr/thumb_7_pu6uyf.png',
  },
  {
    id: '4',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677322794/ppt%20videos%20for%20jjr/Media8_hr3xsc.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677322788/ppt%20videos%20for%20jjr/thumb_8_xm2iqx.png',
  },
  {
    id: '5',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677322834/ppt%20videos%20for%20jjr/Media9_ba8gko.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677322824/ppt%20videos%20for%20jjr/thumb_9_frbw2j.png',
  },
  {
    id: '6',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677322866/ppt%20videos%20for%20jjr/Media11_gi84yh.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677322865/ppt%20videos%20for%20jjr/thumb_11_ulyf3h.png',
  },
  {
    id: '7',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677322935/ppt%20videos%20for%20jjr/Media12_ki8z4s.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677322904/ppt%20videos%20for%20jjr/thumb_12_hez0fs.png',
  },
  {
    id: '8',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677322961/ppt%20videos%20for%20jjr/Media14_qyfel1.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677322939/ppt%20videos%20for%20jjr/thumb_14_twat0z.png',
  },
  {
    id: '9',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677323183/ppt%20videos%20for%20jjr/Media15_jbhkja.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677323144/ppt%20videos%20for%20jjr/thumb_15_iq19uc.png',
  },
  {
    id: '10',
    imgUrl:
      'https://res.cloudinary.com/xcltech/video/upload/v1677323260/ppt%20videos%20for%20jjr/Media16_qp98gh.mp4',

    pic: 'https://res.cloudinary.com/xcltech/image/upload/v1677323226/ppt%20videos%20for%20jjr/thumb_16_o8seis.png',
  },
];

// ================ our partners logo =============

export const partnersLogo = [
  {
    id: 1,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498257/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo32_l9uoaa.png',
    // class: 'logo1',
  },
  {
    id: 2,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498257/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo11_yzwgeg.png',
  },
  {
    id: 3,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498257/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo13_fqn8nq.png',
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
    width: 'logo1',
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
  },
  {
    id: 22,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498254/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo20_ulryqh.png',
  },
  {
    id: 23,
    logo: 'https://res.cloudinary.com/xcltech/image/upload/v1677498254/jjr%20photos/our%20partners%20logo%20jjr%20networ/logo25_h6evez.png',
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
];

// ================== Event Production ================
export const eventProduction = [
  {
    id: 1,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241311/jjr%20photos/Al-mirkaz%20Ramadan%20Tent/ramadan_tent_idh7jb.png',
    eventName: 'Al-mirkaz Ramadan Tent',
  },
  {
    id: 2,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241354/jjr%20photos/diriyah%20season/Screenshot_31_pjxs1c.png',
    eventName: 'Diriyah Season',
  },

  {
    id: 4,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241370/jjr%20photos/exhibition/ilko_iera3g.jpg',
    eventName: 'Exhibition',
  },
  {
    id: 5,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241375/jjr%20photos/Games%20of%20throne/pic8_r8vcvj.jpg',
    eventName: 'Games Of Throne',
  },
  {
    id: 6,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241379/jjr%20photos/global%20village/Screenshot_35_lzzhp8.png',
    eventName: 'Global Village',
  },
  {
    id: 7,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241383/jjr%20photos/mother%20of%20the%20nation/Screenshot_39_zyjjvf.png',
    eventName: 'mother of the nation',
  },
  {
    id: 8,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241391/jjr%20photos/outdoor/Screenshot_37_tck2dd.png',
    eventName: 'outdoor',
  },
  {
    id: 9,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241406/jjr%20photos/Promotional%20stand/promotional_stand_ip73cw.png',
    eventName: 'Promotional stand',
  },
  {
    id: 10,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241407/jjr%20photos/Retail%20shop/Screenshot_30_keshux.png',
    eventName: 'Retail shop',
  },
  {
    id: 11,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677241409/jjr%20photos/saudi%20cup/Screenshot_28_csbglc.png',
    eventName: 'saudi cup',
  },
  {
    id: 12,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928123/jjr%20photos/other%20events%20pics/SOK_OKAZ_jrjpml.jpg',
    eventName: 'sok okaz',
  },
  {
    id: 13,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928130/jjr%20photos/other%20events%20pics/WORKSHOP_mrkogl.jpg',
    eventName: 'WORKSHOP',
  },
  {
    id: 14,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928129/jjr%20photos/other%20events%20pics/MOVENPICK_r01buq.jpg',
    eventName: 'MOVENPICK',
  },
  {
    id: 15,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928123/jjr%20photos/other%20events%20pics/MOVENPICK_PERMENENT_KIOSK_iejs1v.jpg',
    eventName: 'MOVENPICK PERMENENT KIOSK',
  },
  {
    id: 16,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928121/jjr%20photos/other%20events%20pics/VOGUE_LOVES_FASHION_AVENUE_gdvcuc.jpg',
    eventName: 'VOGUE LOVES FASHION AVENUE',
  },
  {
    id: 17,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928116/jjr%20photos/other%20events%20pics/BURJ_PKLAZA_UAE_sju909.jpg',
    eventName: 'BURJ PKLAZA UAE',
  },
  {
    id: 18,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928113/jjr%20photos/other%20events%20pics/VOGUE_LOVES_FASHION_yyfopz.jpg',
    eventName: 'VOGUE LOVES FASHION',
  },
  {
    id: 19,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928111/jjr%20photos/other%20events%20pics/PROMOTIONAL_STANDS_ubojaq.jpg',
    eventName: 'PROMOTIONAL STANDS',
  },
  {
    id: 20,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928107/jjr%20photos/other%20events%20pics/OSN_GAMES_OF_THRONE_koom34.jpg',
    eventName: 'OSN GAMES OF THRONE',
  },
  {
    id: 21,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928105/jjr%20photos/other%20events%20pics/UBER_KSA_w5dpkq.jpg',
    eventName: 'UBER KSA',
  },
  {
    id: 22,
    eventImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677928096/jjr%20photos/other%20events%20pics/POS_MATERIAL_mvztot.jpg',
    eventName: 'POS MATERIAL',
  },
];

// =============== Technology ===============
export const technology = [
  {
    id: 1,
    techName: 'BLOWER PHOTOBOOTH',
    techImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677582875/jjr%20photos/Technology%20images/BLOWER_PHOTOBOOTH_zizmfz.jpg',
  },
  {
    id: 2,
    techName: 'DIGITAL POST- IT',
    techImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677582876/jjr%20photos/Technology%20images/DIGITAL_POST-_IT_zmewqk.jpg',
  },
  {
    id: 3,
    techName: 'DIGITAL SLINGSHOT',
    techImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677582876/jjr%20photos/Technology%20images/DIGITAL_SLINGSHOT_ux9uhc.png',
  },
  {
    id: 4,
    techName: 'INTERACTIVE VENDING MACHINE',
    techImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677582875/jjr%20photos/Technology%20images/INTERACTIVE_WALL_o0kzsr.png',
  },
  {
    id: 5,
    techName: 'INTERACTIVE WALL',
    techImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677582875/jjr%20photos/Technology%20images/INTERACTIVE_VENDING_MACHINE_sxqbyr.png',
  },
  {
    id: 6,
    techName: 'MOTION EXPERIENCES',
    techImg:
      'https://res.cloudinary.com/xcltech/image/upload/v1677582875/jjr%20photos/Technology%20images/MOTION_EXPERIENCES_hjpgkm.jpg',
  },
];

// ================ Testimonials data =============
export const tesiData = [
  {
    id: 1,
    name: 'Elie Karam',
    job: 'Uber',
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
    job: 'Wael Karbala',
    review:
      'We choose to work with JJR because simply they are reliable. They are skilled and professional in production. These guys are good',
    imgUrl:
      'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
  },
];

// ================ our services data =============
export const serviceCard = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/manufacturing_jmsdko.png',
    title: 'Production',
    para: 'We offer stands, kits, fit-outs, signage, and POS materials.Production is the process of creating goods and services to meet the needs and wants of customers',
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/interaction_r25pu4.png',
    title: '360 Degree Events',
    para: 'A 360 degree event activation gives you complete control over the production, models, and promoters',
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/unboxing_d6dxot.png',
    title: 'Merchandising/BTL',
    para: 'Effective merchandising helps in attracting customers to the store, encourages them to stay longer, and increases the likelihood of them making a purchase.',
  },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/food_ksevrq.png',
    title: 'Catering',
    para: ' Catering companies can take care of everything from menu planning and preparation to delivery and setup, making it easier for hosts to focus on other aspects of their event.',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/technology_scx2ty.png',
    title: 'Technology',
    para: 'Technology has been a driving force behind many of the major advancements in human society, from the printing press and steam engine to the internet and smartphones.',
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/xcltech/image/upload/v1677760258/jjr%20photos/services%20card%20pics/design-thinking_agzycd.png',
    title: 'Creative Decoration',
    para: 'Creating 3D sculptures or wall art by cutting Styrofoam into desired shapes and gluing them together.',
  },
];
