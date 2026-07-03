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
import farisalotaibi from '../assets/images/committee/faris-al-otaibi.webp'
import mohammedalqahtani from '../assets/images/committee/mohammed-al-qahtani.webp'

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
13: mashaelAlbargawi,

// Organizing Committee - display sequence
14: turkiAlHarbi,          // pageOrder: 1
18: nawafAlAqeel,          // pageOrder: 2
15: farisalotaibi,         // pageOrder: 3
19: defaultImage,          // pageOrder: 4
16: meshalAlOtaibi,        // pageOrder: 5
17: noufAlTurkey,          // pageOrder: 6
// 11: hananTaib,          // pageOrder: 7 — already defined above, do not duplicate
23: mohammedalqahtani,     // pageOrder: 8
20: najlaaKhalil,          // pageOrder: 9

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
      'Chairman, Organizing Committee \\ General Supervisor Of Diabetes Clinical Service MOD-HS',
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
    name: 'Dr. Faris Alotaibi',
    role:
      'Supervisor of Allied Health Services in Family Medicine \\ Family Medicine Consultant',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 355 5547',
    email: 'fm-alotaibi@psmmc.med.sa',
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
    id: 16,
    image: memberImages[16] || defaultImage,
    name: 'Dr. Meshal Al Otaibi',
    role: ' Family Medicine Consultant',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 511 3488',
    email: 'mmiteb@psmmc.med.sa',
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
    id: 17,
    image: memberImages[17] || defaultImage,
    name: 'Dr. Nouf Alturkey',
    role:
      'In Charge of Royal Guard Clinic in Family Medicine Department \\ Family Medicine Consultant',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 336 0423',
    email: 'NTURKI@psmmc.med.sa',
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
    id: 18,
    image: memberImages[18] || defaultImage,
    name: 'Dr. Nawaf Al Aqeel',
    role: 'Deputy Director Of Family Medicine Department \\ Family Medicine Consultant',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 55 201 1114',
    email: 'Naokeil@psmmc.med.sa',
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
    id: 19,
    image: memberImages[19] || defaultImage,
    name: 'Dr. Fahad Alromaih',
    role:
      'Head Of Physician  Affairs In Family Medicine \\ Family Medicine And Mental Health Consultant',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 646 4427',
    email: 'Fromaih@psmmc.med.sa',
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
        pageOrder: 9,
        tag: 'Member',
      },
    ],
  },
  {
    id: 23,
    image: memberImages[23] || defaultImage,
    name: 'Dr. Mohammed Al Qahtani',
    role: 'Senior Registrar , Family Medicine at Prince Sultan Military Medical City',
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
    name: 'Dr. Moawad Eid Alotaibi',
    role:
      'Chairperson, Scientific Committee \\ Assistant Director Of Training And Academic Affair In Family Medicine Department',
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
    name: 'Prof. Tarek AlSaid',
    role: 'Consultant and Senior Trainer in Family Medicine',
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
      'Director of Lifestyle Medicine Fellowship Program \\ Consultant and Senior Trainer in Family Medicine',
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
      'Director of Family Medicine Residency Program \\ Consultant and Trainer In Family Medicine',
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
    role: 'Consultant and Senior Trainer in Family Medicine',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '+966 50 542 3097',
    email: 'Dr_ghada199@yahoo.com',
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
    id: 7,
    image: memberImages[7] || defaultImage,
    name: 'Dr. Jawharah Al Osimi',
    role: 'Director Of  Women Health Fellowship Program \\ Family Medicine Consultant',
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
    name: 'Dr. Abdulrahman Alkhalifa',
    role:
      'Director of Primary Mental Healthcare Fellowship Program \\ Family Medicine and Mental Health Consultant',
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
      'Director of Preventive Medicine Residency Program \\ Preventive Medicine Consultant',
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
    role: 'Director of Urgent Care Fellowship Program \\ Emergency Medicine Consultant',
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
      'Consultant of Family Medicine and Diabetes ',
    organization: 'Prince Sultan Military Medical City',
    contactNumber: '0555 960 015',
    email: 'Hanan.altaib@gmail.com',
    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 2,
        pageOrder: 7,
        tag: 'Member',
      },
    ],
  },
  {
    id: 13,
    image: memberImages[13] || defaultImage,
    name: 'Dr. Mashael Albargawi',
    role:
      'Consultant of Family Medicine and Diabetes \\ Patient Experience Team Leader.',
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
    name: 'Dr. Mervat Al-Asnaj',
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
    name: 'Dr. Haifa Al-Otaibi',
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