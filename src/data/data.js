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
    name: 'Feature Work',
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

// =============== Technology ===============

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
  // {
  //   id: 8,
  //   name: '',
  //   job: ' ',
  //   review: '',
  //   imgUrl:
  //     'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
  // },
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
