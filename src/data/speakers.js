import speaker1 from '../assets/images/speakers/1.jpg'
import speaker2 from '../assets/images/speakers/2.jpg'
import speaker3 from '../assets/images/speakers/3.jpg'
import speaker4 from '../assets/images/speakers/4.jpg'
import speaker5 from '../assets/images/speakers/4.jpg'

// Add more speaker image imports here as needed
// import speaker5 from '../assets/images/speakers/5.jpg'

const speakers = [
  {
    id: 1,
    image: speaker1,
    name: 'Dr. Speaker One',
    role: 'Family Medicine Consultant',

    featured: true,
    homeOrder: 1,

    categories: [
      {
        name: 'Keynote Speakers',
        categoryOrder: 1,
        pageOrder: 1,
        tag: 'Keynote',
      }
    ],
  },
  {
    id: 2,
    image: speaker2,
    name: 'Dr. Speaker Two',
    role: 'Public Health Specialist',

    featured: true,
    homeOrder: 2,

    categories: [
      {
        name: 'Keynote Speakers',
        categoryOrder: 1,
        pageOrder: 2,
        tag: 'Keynote',
      }
    ],
  },
  {
    id: 3,
    image: speaker3,
    name: 'Dr. Speaker Three',
    role: 'Healthcare Researcher',

    featured: true,
    homeOrder: 4,

    categories: [
      {
        name: 'Keynote Speakers',
        categoryOrder: 1,
        pageOrder: 3,
        tag: 'Keynote',
      }
    ],
  },
  {
    id: 4,
    image: speaker4,
    name: 'Dr. Speaker Four',
    role: 'Clinical Practitioner',

    featured: true,
    homeOrder: 3,

    categories: [
      {
        name: 'Keynote Speakers',
        categoryOrder: 1,
        pageOrder: 4,
        tag: 'Keynote',
      }
    ],
  }
]

export default speakers