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
export const MenusData = [{
        id: 1,
        name: 'Home',
        icon: < AiFillHome / > ,
        linkUrl: '/',
        class: 'homeIcon',
    },
    {
        id: 2,
        name: 'About us',
        icon: < BsBookmarkFill / > ,
        linkUrl: '/about-us',
        class: 'about',
    },
    {
        id: 10,
        name: 'Our Work',
        icon: < FaVideo / > ,
        linkUrl: '/all-videos',
        class: 'videoIcon',
    },
    {
        id: 9,
        name: 'Testimonials',
        icon: < MdReviews / > ,
        linkUrl: '/testimonials',
        class: 'testimo',
    },
    {
        id: 3,
        name: 'Production',
        icon: < MdOutlinePrecisionManufacturing / > ,
        linkUrl: '/production',
        class: 'production',
    },
    {
        id: 4,
        name: 'Events Activation',
        icon: < BsCalendar2EventFill / > ,
        linkUrl: '/events',
        class: 'eventactivation',
    },
    {
        id: 5,
        name: 'Technology',
        icon: < AiTwotoneSetting / > ,
        linkUrl: '/technology',
        class: 'tech',
    },
    {
        id: 6,
        name: 'BTL / Merchandising',
        icon: < GiChipsBag / > ,
        linkUrl: '/btl-merchand',
        class: 'btl',
    },
    {
        id: 7,
        name: 'Catalog',
        icon: < BiCategory / > ,
        linkUrl: 'https://jjrnetwork.com/catalog2023/',
        newTab: '_blank',
        class: 'catalog',
    },
    {
        id: 8,
        name: 'Our Partners',
        icon: < FaUsers / > ,
        linkUrl: '/ourPartners',
        class: 'ourPartner',
    },
    {
        id: 9,
        name: 'Contact',
        icon: < RiContactsFill / > ,
        linkUrl: '/contact-us',
        class: 'contact',
    },
];

// ===================== Home page slider ================
export const dataWorld = [{
        id: '1',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678436922/jjr%20photos/all%20jjr%20video/Media8_fahcwh.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678444484/jjr%20photos/all%20jjr%20video/media_8_z8wmzw.png',
    },
    {
        id: '2',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678437197/jjr%20photos/all%20jjr%20video/Media14_axzjpf.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678444483/jjr%20photos/all%20jjr%20video/media_14_fq7jjp.png',
    },
    {
        id: '3',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678437060/jjr%20photos/all%20jjr%20video/Media12_pfzjbc.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678444482/jjr%20photos/all%20jjr%20video/media12_qkscqy.png',
    },
    {
        id: '4',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678436718/jjr%20photos/all%20jjr%20video/Media8_equqzw.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678444481/jjr%20photos/all%20jjr%20video/Media8_equqzw_arqq0x.png',
    },
    {
        id: '5',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678437034/jjr%20photos/all%20jjr%20video/Media11_jpuhij.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678444481/jjr%20photos/all%20jjr%20video/media11_hubodg.png',
    },
    {
        id: '6',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678436865/jjr%20photos/all%20jjr%20video/Media10_d97giq.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678787396/jjr%20photos/all%20jjr%20video/Media10_pr3vgi.png',
    },
    {
        id: '7',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678436747/jjr%20photos/all%20jjr%20video/Media6_xoas2g.mov',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678444480/jjr%20photos/all%20jjr%20video/Media6_xoas2g_ee20r1.png',
    },
    {
        id: '8',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678436737/jjr%20photos/all%20jjr%20video/page_34_grhtj0.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678444477/jjr%20photos/all%20jjr%20video/page_34_grhtj0_n3734k.png',
    },
    {
        id: '9',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678351348/jjr%20photos/Technology%202/Media9_uzypxv.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678787396/jjr%20photos/all%20jjr%20video/Media9_uzypxv_bs3asl.png',
    },
    {
        id: '10',
        videoUrl: 'https://res.cloudinary.com/xcltech/video/upload/v1678436979/jjr%20photos/all%20jjr%20video/Media10_uf2mg2.mp4',

        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1678444479/jjr%20photos/all%20jjr%20video/media_10_jocznb.png',
    },
];

// ================ our partners logo =============

export const partnersLogo = [{
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

// =============== Technology ===============

// ================ Testimonials data =============
export const tesiData = [{
        id: 1,
        name: 'Elie Karam',
        job: 'Dubai TV',
        review: 'On all the projects that we commissioned JJR Network they showed great dedication, commitment and punctual delivery timelines , they are a professional and resourceful production partner with a vast network of suppliers which can deliver to any given brief',
        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
        active: 'active',
    },
    {
        id: 2,
        name: 'Catherine Yacoub',
        job: 'Hilton',
        review: 'Rapid, efficient, trustworthy, always available, and high quality work is something always to expect when working with JJR NETWORK.',
        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
    },
    {
        id: 3,
        name: 'Wael Karbala',
        job: 'National Bonds',
        review: 'We choose to work with JJR because simply they are reliable. They are skilled and professional in production. These guys are good',
        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
    },
    {
        id: 4,
        name: 'Ziad Moghabghab',
        job: 'Uber',
        review: 'Over my years of working with JJR, they have never shown anything less than the highest quality of work whether it was from a business relationship perspective or from high quality deliverables.The one thing I cherish the most is the fact that they always go farther than the extra mile to meet requests even in the shortest of timelines and in the toughest of times.',
        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
    },
    {
        id: 5,
        name: 'Yasmina Ali Hassan',
        job: 'Amazon',
        review: 'In business, it’s important to find people you can count on. JJR is one of those reliable partners. Thanks for all your hard work!',
        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
    },

    {
        id: 6,
        name: 'Hadi Bashir',
        job: 'Microsoft',
        review: 'Always providing the best quality and service. Keep it up!					',
        imgUrl: 'https://res.cloudinary.com/xcltech/image/upload/v1677759307/jjr%20photos/testimonial%20pic/man_ehshr7.png',
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
export const serviceCard = [{
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