
import { ContactLink, SupervisionContact } from './types';

export const TOP_CONTACTS: ContactLink[] = [
  { 
    name: 'চাঁপাইনবাবগঞ্জ জেলা প্রশাসক', 
    designation: 'জেলা রিটার্নিং অফিসার', 
    phone: '+8801318320100',
    icon: 'fa-solid fa-building-columns',
    iconColor: 'bg-blue-50 text-blue-600'
  },
  { 
    name: 'গৌতম কুমার বিশ্বাস', 
    designation: 'পুলিশ সুপার, চাঁপাইনবাবগঞ্জ', 
    phone: '+8801320125500',
    icon: 'fa-solid fa-award',
    iconColor: 'bg-indigo-50 text-indigo-600'
  },
  { 
    name: 'জনাব মোঃ হাসান তারেক', 
    designation: 'অতিরিক্ত পুলিশ সুপার (গোমস্তাপুর সার্কেল) চাঁপাইনবাবগঞ্জ', 
    phone: '01320125549',
    icon: 'fa-solid fa-user-shield',
    iconColor: 'bg-emerald-50 text-emerald-600'
  },
  { 
    name: 'জনাব মোঃ আব্দুল বারিক', 
    designation: 'অফিসার ইনচার্জ, গোমস্তাপুর থানা, চাঁপাইনবাবগঞ্জ', 
    phone: '01320125521',
    icon: 'fa-solid fa-user-tie',
    iconColor: 'bg-emerald-50 text-emerald-600'
  },
  { 
    name: 'কন্ট্রোল রুম, পুলিশ সুপার কার্যালয়', 
    designation: 'চাঁপাইনবাবগঞ্জ', 
    phone: '+8801320126498',
    icon: 'fa-solid fa-tower-broadcast',
    iconColor: 'bg-amber-50 text-amber-600'
  },
  { 
    name: 'ডিউটি অফিসার', 
    designation: 'গোমস্তাপুর থানা', 
    phone: '+8801320125626',
    icon: 'fa-solid fa-shield-halved',
    iconColor: 'bg-slate-100 text-slate-600'
  },
  { 
    name: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স স্টেশন', 
    designation: 'গোমস্তাপুর, চাঁপাইনবাবগঞ্জ', 
    phone: '01901022313',
    icon: 'fa-solid fa-fire-extinguisher',
    iconColor: 'bg-red-50 text-red-600'
  },
];

export const FOOTER_SUPERVISION: SupervisionContact[] = [
  {
    name: 'গৌতম কুমার বিশ্বাস',
    designation: 'পুলিশ সুপার, চাঁপাইনবাবগঞ্জ',
    phone: '+৮৮০১৩২০-১২৫৫০০',
    profileUrl: 'https://police.chapainawabganj.gov.bd/bn/site/officer_list/xSCR-%E0%A6%9C%E0%A6%A8%E0%A6%BE%E0%A6%AC-%E0%A6%8F-%E0%A6%8F%E0%A6%87%E0%A6%9A-%E0%A6%8F%E0%A6%AE-%E0%A6%86%E0%A6%AC%E0%A6%A6%E0%A7%81%E0%A6%B0-%E0%A6%B0%E0%A6%95%E0%A6%BF%E0%A6%AC-%E0%A6%AC%E0%A6%BF%E0%A6%8F%E0%A6%AE-%E0%A6%AA%E0%A6%BF%E0%A6%AA%E0%A6%BF%E0%A6%8F%E0%A6%AE-%E0%A6%AC%E0%A6%BE%E0%A6%B0'
  },
  {
    name: 'জনাব মোঃ হাসান তারেক',
    designation: 'অতিরিক্ত পুলিশ সুপার (গোমস্তাপুর সার্কেল)',
    phone: '০১৩২০১২৫৫৪৯',
    profileUrl: 'https://police.chapainawabganj.gov.bd/bn/site/officer_list/%E0%A6%AE%E0%A7%8B%E0%A6%83-%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%A8-%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%96'
  },
  {
    name: 'জনাব মোঃ আব্দুল বারিক',
    designation: 'অফিসার ইনচার্জ, গোমস্তাপুর থানা',
    phone: '০১৩২০-১২৫৫২১',
    profileUrl: 'https://police.chapainawabganj.gov.bd/bn/site/officer_list/%E0%A6%9C%E0%A6%A8%E0%A6%BE%E0%A6%AC-%E0%A6%AE%E0%A7%8B%E0%A6%83-%E0%A6%AE%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A7%81-%E0%A6%B0%E0%A6%B9%E0%A6%AE%E0%A6%BE%E0%A6%A8'
  }
];

// Removed ehbc parameter as it sometimes fails on certain network configurations
export const MAP_EMBED_URL = "https://www.google.com/maps/d/embed?mid=1GQloFi8nGuKX7baApzOgDZ0wJKVyKqU";
