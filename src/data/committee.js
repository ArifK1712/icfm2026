import member1 from '../assets/images/committee/1.jpg'
import member2 from '../assets/images/committee/2.jpg'
import member3 from '../assets/images/committee/3.jpg'
import member4 from '../assets/images/committee/4.jpg'

import member5 from '../assets/images/committee/4.jpg'
import member6 from '../assets/images/committee/3.jpg'
import member7 from '../assets/images/committee/2.jpg'


const committeeMembers = [
  {
    id: 1,
    image: member1,
    name: 'Dr. Committee One',
    role: 'Conference Chairperson',
    organization: '5th ICFM 2026',

    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 1,
        pageOrder: 1,
      }
    ],
  },
  {
    id: 2,
    image: member2,
    name: 'Dr. Committee Two',
    role: 'Scientific Committee Lead',
    organization: 'Family Medicine Symposium',

    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 1,
        pageOrder: 2,
      },
    ],
  },
  {
    id: 3,
    image: member3,
    name: 'Dr. Committee Three',
    role: 'Organizing Committee Member',
    organization: 'ICFM 2026',

    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 1,
        pageOrder: 3,
      },
    ],
  },
  {
    id: 4,
    image: member4,
    name: 'Dr. Committee Four',
    role: 'Advisory Board Member',
    organization: 'Healthcare Advisory Board',

    categories: [
      {
        name: 'Organizing Committee',
        categoryOrder: 1,
        pageOrder: 4,
      },
    ],
  },
{
  id: 5,
  image: member5,
  name: 'Dr. Committee Five',
  role: 'Advisory Board Member',
  organization: 'Healthcare Advisory Board',

  categories: [
    {
      name: 'Scientific Committee',
      categoryOrder: 2,
      pageOrder: 1,
    },
  ],
},
{
  id: 6,
  image: member6,
  name: 'Dr. Committee Six',
  role: 'Advisory Board Member',
  organization: 'Healthcare Advisory Board',

  categories: [
    {
      name: 'Scientific Committee',
      categoryOrder: 2,
      pageOrder: 2,
    },
  ],
},
{
  id: 7,
  image: member7,
  name: 'Dr. Committee Seven',
  role: 'Advisory Board Member',
  organization: 'Healthcare Advisory Board',

  categories: [
    {
      name: 'Scientific Committee',
      categoryOrder: 2,
      pageOrder: 3,
    },
  ],
},
]

export default committeeMembers