import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillGift, AiFillSafetyCertificate } from "react-icons/ai"
import { BsBatteryCharging } from "react-icons/bs";
import { FaSnapchatSquare, FaPinterestSquare, FaRegLightbulb } from "react-icons/fa"
import { RiWirelessChargingFill } from "react-icons/ri";
import { IoIosColorPalette } from "react-icons/io"

// NAVIGATION
export const NAV_LINKS = [
    { href: '#shop', key: 'shop', label: 'Shop' },
    { href: '#features', key: 'features', label: 'Features' },
    { href: '#faq', key: 'faq', label: 'FAQ' },
    { href: '#contact', key: 'contact', label: 'Contact' },
    { href: '/orders', key: 'myorders', label: 'My Orders' },
]

export const QUESTIONS = [
    {
        id: 1,
        question: "How long is shipping?",
        answer: "Shipping is between 5-10 business days",
    },
    {
        id: 2,
        question: "What if I want a refund?",
        answer: "Moonlamps.com does 100% refund if you are not satisfied",
    },
    {
        id: 3,
        question: "Can I just purchase the stand?",
        answer: "Unfortunatley, we are only selling the bundle which includes the stand",
    },
    {
        id: 4,
        question: "How can I track my order?",
        answer: "You can go to your dashboard and view all of your orders",
    },
    {
        id: 5,
        question: "How many years does this lamp last?",
        answer: "We would hope a lifetime, but you never know what could happen. ",
    },
];

export const FOOTER_LINKS = [
    <li>
        <AiFillFacebook size={25} />
    </li>,
    <li>
        <AiFillInstagram size={25} />
    </li>,
    <li>
        <AiFillTwitterSquare size={25} />
    </li>,
    <li>
        <FaSnapchatSquare size={25} />
    </li>,
    <li>
        <FaPinterestSquare size={25} />
    </li>,
];

export const BATTERY_ITEMS_LEFT = [
    {
      title: 'Battery Life',
      icon: <BsBatteryCharging size={25} />,
      description: 'Crafted with precision, our moonlamp radiates soft, ambient light and lasts for hours on a single charge.',
    },
    {
      title: '16 Color Variations',
      icon: <IoIosColorPalette size={25} />,
      description: 'Explore a palette of moods with our moonlamp, offering sexteen hues to match any occasion or decor.',
    },
    {
      title: 'Perfect Gift',
      icon: <AiFillGift size={25} />,
      description: 'A unique and thoughtful token, our moonlamp lights up moments and smiles, making memories brighter.',
    },
];

export const BATTERY_ITEMS_RIGHT = [
    {
      title: 'Child Safety',
      icon: <AiFillSafetyCertificate size={25} />,
      description: 'Designed with care, our moonlamp ensures a gentle glow free of harmful elements, keeping young ones enchanted and secure.',
    },
    {
      title: '100% Wireless',
      icon: <RiWirelessChargingFill size={25} />,
      description: 'Iluminate spaces without cords; our moonlamp is sleek and clutter-free.',
    },
    {
      title: 'Bright & Dim Modes',
      icon: <FaRegLightbulb size={25} />,
      description: 'Choose the ambiance; our moonlamp adjusts from a radiant glow to a soft whisper of light.',
    },
];