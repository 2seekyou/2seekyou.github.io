// CustomFooter.js

import React from 'react';
import MusicPlayer from './src/components/HomepageFeatures/MusicPlayer'; // 导入你的音乐组件

const CustomFooter = () => {
    return (
      <footer>
        <MusicPlayer /> {/* 将音乐组件放在页脚中 */}
      </footer>
    );
  };
  

export default CustomFooter;
