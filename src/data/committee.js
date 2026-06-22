import defaultImage from '../assets/images/committee/1.jpg'

import abdulrahmanAlkhalifa from '../assets/images/committee/abdulrahman-alkhalifa.webp'
import aymanAfifi from '../assets/images/committee/ayman-afifi.webp'
import fahadAlromaih from '../assets/images/committee/fahad-alromaih.webp'
import hananTaib from '../assets/images/committee/hanan-taib.webp'
import mashaelAlbargawi from '../assets/images/committee/mashael-albargawi.webp'
import mervatAlAsnaj from '../assets/images/committee/mervat-al-asnaj.webp'
import meshalAlOtaibi from '../assets/images/committee/meshal-al-otaibi.webp'
import moawadEidAlotaibi from '../assets/images/committee/moawad-eid-alotaibi.webp'
import mostafaKofi from '../assets/images/committee/mostafa-kofi.webp'
import najlaaKhalil from '../assets/images/committee/najlaa-khalil.webp'
import nawafAlAqeel from '../assets/images/committee/nawaf-al-aqeel.webp'
import nawafMohammedBasulaib from '../assets/images/committee/nawaf-mohammed-basulaib.webp'
import noufAlTurkey from '../assets/images/committee/nouf-aiturkey.webp'
import safaSedra from '../assets/images/committee/safa-sedra.webp'
import tarekAlSaid from '../assets/images/committee/tarek-alSaid.webp'
import turkiAlHarbi from '../assets/images/committee/turki-al-harbi.webp'
import haifaAlOtaibi from '../assets/images/committee/haifa-al-otaibi.webp'

const memberImages = {
  // Scientific Committee
  1: moawadEidAlotaibi,
  2: mostafaKofi,
  3: tarekAlSaid,
  4: aymanAfifi,
  5: defaultImage,
  6: defaultImage,
  7: defaultImage,
  8: abdulrahmanAlkhalifa,
  9: safaSedra,
  10: nawafMohammedBasulaib,
  11: hananTaib,
  12: najlaaKhalil,
  13: mashaelAlbargawi,

  // Organizing Committee
  14: turkiAlHarbi,
  15: defaultImage,
  16: meshalAlOtaibi,
  17: noufAlTurkey,
  18: nawafAlAqeel,
  19: fahadAlromaih,
  20: najlaaKhalil,

  // Research Committee
  21: mervatAlAsnaj,
  22: haifaAlOtaibi,
}

const committeeMembers = [
  // Organizing Committee
  {
    id: 14,
    image: memberImages[14] || defaultImage,
    name: 'Dr. Turki Al Harbi',
    role:
      'General Supervisor of Diabetes Clinical Service',
    organization: 'MOD-HS',
    contactNumber: '+966 55 599 9493',
    email: 'tjalharbi@psmmc.med.sa',
    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 1,
        tag: 'Chairman',
      },
    ],
  },
  {
    id: 15,
    image: memberImages[15] || defaultImage,
    name: 'Dr. Faris Al Otaibi',
    role:
      'Consultant of Family Medicine \\ Supervisor of Allied Health Services in family Medicine',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 355 5547',
    email: 'fm-alotaibi@psmmc.med.sa',
    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 2,
        tag: 'Member',
      },
    ],
  },
  {
    id: 16,
    image: memberImages[16] || defaultImage,
    name: 'Dr. Meshal Al Otaibi',
    role: 'Consultant of  Family Medicine',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 511 3488',
    email: 'mmiteb@psmmc.med.sa',
    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 3,
        tag: 'Member',
      },
    ],
  },
  {
    id: 17,
    image: memberImages[17] || defaultImage,
    name: 'Dr. Nouf Al Turkey',
    role:
      'Consultant of Family Medicine and in charge Royal guard clinic in family medicine department',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 336 0423',
    email: 'NTURKI@psmmc.med.sa',
    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 4,
        tag: 'Member',
      },
    ],
  },
  {
    id: 18,
    image: memberImages[18] || defaultImage,
    name: 'Dr. Nawaf Al Aqeel',
    role: 'Consultation of Family Medicine \\ Deputy Director of Family Medicine Department',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 55 201 1114',
    email: 'Naokeil@psmmc.med.sa',
    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 5,
        tag: 'Member',
      },
    ],
  },
  {
    id: 19,
    image: memberImages[19] || defaultImage,
    name: 'Dr. Fahad Al Romaih',
    role:
      'Consultant  of Family Medicine and Mental Health\\ head of physics affairs in family and community department',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 646 4427',
    email: 'Fromaih@psmmc.med.sa',
    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 6,
        tag: 'Member',
      },
    ],
  },
  {
    id: 20,
    image: memberImages[20] || defaultImage,
    name: 'Ms. Najlaa khalil',
    role: 'Head of Training & Academic Affairs Office',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 54 852 3323',
    email: 'Najlaakhalil@hotmail.com',
    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 8,
        tag: 'Member',
      },
    ],
  },

  // Scientific Committee
  {
    id: 1,
    image: memberImages[1] || defaultImage,
    name: 'Dr. Moawad Eid Al Otaibi',
    role:
      'Assistant Director of Training and Academic Affair in Family Medicine Department',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 555 9824',
    email: 'Me.alotaibi@psmmc.med.sa',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 1,
        tag: 'Chairman',
      },
    ],
  },
  {
    id: 2,
    image: memberImages[2] || defaultImage,
    name: 'Prof. Mostafa Kofi',
    role: 'Consultant & Senior Trainer in Occupational Medicine',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '0501 436 859',
    email: 'Moustafafouad@yahoo.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 2,
        tag: 'Member',
      },
      {
        name: 'Research Committee',
        categoryOrder: 3,
        pageOrder: 1,
        tag: 'Chairman',
      },
    ],
  },
  {
    id: 3,
    image: memberImages[3] || defaultImage,
    name: 'Prof. Tarek Al Said',
    role: 'Consultant and senior trainer in family medicine',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '0509 631 775',
    email: 'Telsaid@psmmc.med.sa',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 3,
        tag: 'Member',
      },
    ],
  },
  {
    id: 4,
    image: memberImages[4] || defaultImage,
    name: 'Prof. Ayman Afifi',
    role:
      'Consultant and senior trainer in family medicine\\ Director of Lifestyle Medicine Fellowship',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 283 4270',
    email: 'iymen16@gmail.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 4,
        tag: 'Member',
      },
    ],
  },
  {
    id: 5,
    image: memberImages[5] || defaultImage,
    name: 'Dr. Najla Aodh',
    role:
      'Consultant and  trainer in family medicine \\ Director of Family Medicine Residency Program',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '550 617 218',
    email: 'nja-1@hotmail.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 5,
        tag: 'Member',
      },
    ],
  },
  {
    id: 6,
    image: memberImages[6] || defaultImage,
    name: 'Dr. Ghada Al Arfaj',
    role: 'Consultant and senior trainer in family medicine',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 542 3097',
    email: 'Dr_ghada199@yahoo.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 6,
        tag: 'Member',
      },
    ],
  },
  {
    id: 7,
    image: memberImages[7] || defaultImage,
    name: 'Dr. Jawharah Al Osimi',
    role: 'Consultant of Family medicine and Women Health',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '550 720 999',
    email: 'Joharh.al@gmail.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 7,
        tag: 'Member',
      },
    ],
  },
  {
    id: 8,
    image: memberImages[8] || defaultImage,
    name: 'Dr. Abdulrahman Al Khalifa',
    role:
      'Family Medicine and Mental Health Consultant\\ Program Director of Primary Mental Healthcare Fellowship',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 55 513 9342',
    email: 'Akalkhalifah@psmmc.med.sa',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 8,
        tag: 'Member',
      },
    ],
  },
  {
    id: 9,
    image: memberImages[9] || defaultImage,
    name: 'Dr. Safa Sedra',
    role:
      'Consultant of Preventive medicine \\ Program Director of Preventive medicine residency program',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '505 241 415',
    email: 'dr.sedrah@hotmail.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 9,
        tag: 'Member',
      },
    ],
  },
  {
    id: 10,
    image: memberImages[10] || defaultImage,
    name: 'Dr. Nawaf Mohammed Basulaib',
    role: 'Emergency medicine consultant \\ Urgent care fellowship director',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '0560 277 778',
    email: 'Nbasulaib@gmail.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 10,
        tag: 'Member',
      },
    ],
  },
  {
    id: 11,
    image: memberImages[11] || defaultImage,
    name: 'Dr. Hanan Taib',
    role:
      'Consultant, Family Medicine and Diabetes',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '0555 960 015',
    email: 'Hanan.altaib@gmail.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 11,
        tag: 'Member',
      },
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 7,
        tag: 'Member',
      },
    ],
  },
  {
    id: 12,
    image: memberImages[12] || defaultImage,
    name: 'Ms. Najla Khaleel',
    role: 'Head of Training & Academic Affairs Office',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 54 852 3323',
    email: 'Najlaakhalil@hotmail.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 12,
        tag: 'Member',
      },
    ],
  },
  {
    id: 13,
    image: memberImages[13] || defaultImage,
    name: 'Dr. Mashael Al Bargawi',
    role:
      'Consultant of Family Medicine and Diabetes \\ Patient Experience Team Leader, Family Medicine Department',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 55 611 5604',
    email: 'Dr-albargawi@hotmail.com',
    categories: [
      {
        name: 'Scientific Committee',
        categoryOrder: 1,
        pageOrder: 13,
        tag: 'Member',
      },
    ],
  },

  // Research Committee
  {
    id: 21,
    image: memberImages[21] || defaultImage,
    name: 'Dr. Mirvat Al Asnag',
    role: 'Saudi Medical Journal Editor in Chief',
    organization: 'King Fahad Armed Forces Hospital',
    contactNumber: '+966 50 903 2333',
    email: 'Mirvat@kfafh.med.sa',
    categories: [
      {
        name: 'Research Committee',
        categoryOrder: 3,
        pageOrder: 2,
        tag: 'Member',
      },
    ],
  },
  {
    id: 22,
    image: memberImages[22] || defaultImage,
    name: 'Dr. Haifa Al Otaibi',
    role: 'Deputy Director of the MOD-HS Research Institute',
    organization: 'MOD-HS',
    contactNumber: '+966 50 418 1309',
    email: 'haifaotaibe@gmail.com',
    categories: [
      {
        name: 'Research Committee',
        categoryOrder: 3,
        pageOrder: 3,
        tag: 'Member',
      },
    ],
  },
]

export default committeeMembers