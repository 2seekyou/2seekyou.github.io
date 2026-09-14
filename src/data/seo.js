const person = {
  '@type': 'Person',
  '@id': 'https://cq.seekyou.top/#person',
  name: '崔全',
  alternateName: ['Quan Cui', 'Cui Quan'],
  givenName: 'Quan',
  familyName: 'Cui',
  url: 'https://cq.seekyou.top/',
  image: 'https://cq.seekyou.top/img/profile/quan-cui.jpg',
  description: '湘潭大学控制科学与工程硕士研究生，研究方向为遥感目标检测、少样本遥感分割与视觉基础模型。',
  email: 'mailto:cuiquan@smail.xtu.edu.cn',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: '湘潭大学',
    alternateName: 'Xiangtan University',
    url: 'https://www.xtu.edu.cn/',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: '湘潭大学',
    alternateName: 'Xiangtan University',
  },
  jobTitle: ['控制科学与工程硕士研究生', 'M.S. Student in Control Science and Engineering'],
  sameAs: [
    'https://github.com/cowqer',
    'https://dblp.org/pid/234/7752.html',
  ],
  knowsAbout: [
    '遥感智能解译',
    'Remote Sensing',
    'Computer Vision',
    'Oriented Object Detection',
    'Few-shot Semantic Segmentation',
    'Vision Foundation Models',
  ],
};

export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'WebSite',
      '@id': 'https://cq.seekyou.top/#website',
      url: 'https://cq.seekyou.top/',
      name: '崔全 Quan Cui · 个人学术主页',
      inLanguage: ['zh-CN', 'en'],
      about: {'@id': 'https://cq.seekyou.top/#person'},
      author: {'@id': 'https://cq.seekyou.top/#person'},
    },
  ],
};

export const profilePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://cq.seekyou.top/introduce#profile-page',
  url: 'https://cq.seekyou.top/introduce',
  dateModified: '2026-09-14',
  mainEntity: person,
};

export const scholarStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ScholarlyArticle',
      '@id': 'https://doi.org/10.1109/JSTARS.2025.3629101',
      headline: 'Multidirectional Rotation-Aware Network for Oriented Ship Detection From Remote Sensing Imagery',
      author: {'@id': 'https://cq.seekyou.top/#person'},
      datePublished: '2026',
      isPartOf: { '@type': 'Periodical', name: 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing' },
      identifier: 'https://doi.org/10.1109/JSTARS.2025.3629101',
      url: 'https://doi.org/10.1109/JSTARS.2025.3629101',
    },
    {
      '@type': 'ScholarlyArticle',
      headline: 'Few-Shot Segmentation of Mining Areas via Adaptive Prior Enhancement and Selective Edge Attention',
      author: {'@id': 'https://cq.seekyou.top/#person'},
      datePublished: '2026',
      isPartOf: { '@type': 'Event', name: '2026 IEEE International Geoscience and Remote Sensing Symposium' },
      url: 'https://2026.ieeeigarss.org/search.php?show=search',
    },
  ],
};
