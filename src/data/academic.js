/** @type {import('../types/academic').Profile} */
export const profile = {
  nameZh: '崔全',
  nameEn: 'Quan Cui',
  roleZh: '控制科学与工程硕士研究生',
  roleEn: 'M.S. Student in Control Science and Engineering',
  affiliation: '湘潭大学 · 自动化与电子信息学院',
  email: 'cuiquan@smail.xtu.edu.cn',
  github: 'https://github.com/cowqer',
  avatar: '/img/profile/quan-cui.jpg',
  bio: '我的研究聚焦遥感影像智能解译，关注复杂场景中的旋转目标检测、少样本语义分割与视觉基础模型适配，希望构建更可靠、更高效的数据驱动感知方法。',
};

/** @type {import('../types/academic').ResearchInterest[]} */
export const researchInterests = [
  {
    title: '遥感目标检测',
    english: 'Remote Sensing Object Detection',
    description: '面向遥感影像中方向任意、尺度变化显著与密集分布的目标，研究旋转感知表征与精确定位方法。',
    keywords: ['Oriented Detection', 'Ship Detection', 'Feature Alignment'],
  },
  {
    title: '少样本遥感分割',
    english: 'Few-shot Remote Sensing Segmentation',
    description: '关注标注稀缺场景下的知识迁移、先验增强与边界建模，提升模型对新类别和新区域的泛化能力。',
    keywords: ['Few-shot Learning', 'Semantic Segmentation', 'Mining Areas'],
  },
  {
    title: '视觉基础模型',
    english: 'Vision Foundation Models',
    description: '探索 SAM 等视觉基础模型在遥感场景中的高效适配、可靠记忆与结构语义协同。',
    keywords: ['SAM', 'Model Adaptation', 'Reliable Learning'],
  },
];

/** @type {import('../types/academic').Publication[]} */
export const publications = [
  {
    id: 'mdr-net-jstars-2026',
    year: 2026,
    type: 'Journal',
    status: 'Published',
    title: 'Multidirectional Rotation-Aware Network for Oriented Ship Detection From Remote Sensing Imagery',
    authors: 'Quan Cui, Yan Zhou, Gaodian Zhou, Jianxun Li, Xiaolin Zhu, Richard Irampaye',
    venue: 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, Vol. 19, pp. 190–208',
    note: 'First author',
    links: [
      {label: 'DOI', url: 'https://doi.org/10.1109/JSTARS.2025.3629101'},
      {label: 'Code', url: 'https://github.com/cowqer/MDR-Net'},
      {label: 'DBLP', url: 'https://dblp.org/rec/journals/staeors/CuiZZLZI26'},
    ],
  },
  {
    id: 'mining-fss-igarss-2026',
    year: 2026,
    type: 'Conference',
    status: 'Accepted',
    title: 'Few-Shot Segmentation of Mining Areas via Adaptive Prior Enhancement and Selective Edge Attention',
    authors: 'Quan Cui, Longzhou Hu, Yan Zhou, Gaodian Zhou',
    venue: '2026 IEEE International Geoscience and Remote Sensing Symposium (IGARSS)',
    note: 'Oral presentation · First author',
    links: [{label: 'Program', url: 'https://2026.ieeeigarss.org/search.php?show=search'}],
  },
];

/** @type {import('../types/academic').Project[]} */
export const projects = [
  {
    title: '自动驾驶多传感器数据采集平台',
    period: '2023.10 — 2024.04',
    organization: '上海交通大学人工智能学院',
    description: '参与面向无人系统深度学习与强化学习的车载高清毫米波雷达数据平台建设。',
    highlights: ['MQTT 多线程传感器通信', 'HDF5 统一数据封装', 'aarch64–amd64 跨平台编译环境'],
  },
  {
    title: '基于 PaddleDetection 的智能竞速车',
    period: '2022.10 — 2023.08',
    organization: '湘潭大学电工电子实验室',
    description: '完成道路感知、实时标志物检测、车端通信与底盘控制，面向全国大学生智能汽车竞赛开展系统研发。',
    highlights: ['OpenCV 车道线与路况识别', 'SSD-MobileNet 边缘部署', '增量式与位置式 PID 控制'],
  },
];

/** @type {import('../types/academic').Experience[]} */
export const experiences = [
  {period: '2024.09 — 2027.06', organization: '湘潭大学', role: '控制科学与工程 · 硕士研究生', description: '研究方向为遥感目标检测、少样本学习、遥感语义分割与视觉基础模型。'},
  {period: '2023.10 — 2024.04', organization: '上海交通大学', role: '交换学习实习生', description: '参与无人系统车载多传感器数据平台研发。'},
  {period: '2020.09 — 2024.06', organization: '湘潭大学', role: '自动化 · 工学学士', description: '在智能车竞赛与工程实践中建立控制、嵌入式系统和计算机视觉基础。'},
];

/** @type {import('../types/academic').Award[]} */
export const awards = [
  {year: '2024', title: '第十九届全国大学生智能汽车竞赛地平线智慧医疗组', level: '全国一等奖'},
  {year: '2023', title: '第十八届全国大学生智能汽车竞赛百度完全模型组', level: '全国二等奖'},
  {year: '2023', title: '第十八届全国大学生智能汽车竞赛大疆天途创意组', level: '全国二等奖'},
  {year: '2022', title: '第十七届全国大学生智能汽车竞赛室外专项赛', level: '全国一等奖'},
  {year: '2022', title: '第十七届全国大学生智能汽车竞赛百度完全模型组', level: '全国二等奖'},
];

export const skills = {
  research: ['PyTorch', 'OpenMMLab', 'PaddlePaddle', 'Computer Vision', 'Remote Sensing'],
  engineering: ['Python', 'C/C++', 'Linux', 'ROS', 'STM32', 'MQTT', 'Docker', 'Git'],
  academic: ['LaTeX', 'Markdown', 'Technical Writing', 'English Communication'],
};

export const featuredPosts = [
  {title: '关于遥感检测与分割', description: '从目标检测、语义分割与少样本学习出发，介绍当前研究方向。', to: '/blog/intro_me', tag: 'Research'},
  {title: '有关视觉识别领域发展的观点', description: '围绕视觉表征、域差异与开放域识别记录思考。', to: '/blog/CV-Talk', tag: 'Perspective'},
  {title: '竞赛经验分享', description: '从智能车与电子设计竞赛中总结工程实践和团队协作经验。', to: '/blog/shareing', tag: 'Experience'},
];
