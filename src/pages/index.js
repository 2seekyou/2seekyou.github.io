import clsx from 'clsx';
//import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BottomFeatures from '../components/HomepageFeatures/bottom';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';
import MusicPlayer from '../components/HomepageFeatures/MusicPlayer';
import Translate, {translate} from '@docusaurus/Translate';
import kunkun from '../components/HomepageFeatures/kunkun'; // 导入组件 必要的 不然会导致下方显示出bug

//调用自congig.js中的siteConfig
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const handleImageClick = (event) => {
    event.preventDefault();
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1
          style={{
            fontSize: '3.5rem',  // 调整字体大小
            fontWeight: 'bold',
            color: '#fff',
            fontDisplay: 'swap',  // 需要在 CSS 中使用 `font-display`，内联样式可能不支持
            textAlign: 'center',
            marginTop: '0',
            marginBottom: '1rem'
          }}
        >
          <Translate>
          Seekyou's site
          </Translate>
        </h1>
        <a href="https://git.io/typing-svg" onClick={handleImageClick} className={styles.linkRight}>
          <img
            src="https://readme-typing-svg.demolab.com?font=Roboto&size=25&duration=1500&pause=50000&color=F7F7F7&center=true%C2%A0%E7%9C%9F&Center=Ture%C2%A0%E5%81%87&repeat=true%C2%A0%E7%9C%9F&random=false%C2%A0%E5%81%87&width=441&lines= ->>+++Hello!++This+is+seekyou++(*%C2%B4%E2%88%80%60)++~++%E2%99%A5++<<-"
            alt="Typing SVG"
          />
        </a>
        <div className="button-container">
          <BottomFeatures />
        </div>
      </div>
    </header>
  );
}



//主页结构
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}的小站`}
      description="Blog of Seekyou | Hello from cq">
      <HomepageHeader />
      <MusicPlayer />
      <main>
      <HomepageFeatures />
      </main>
      <div className="custom-image-container">
      <img
        src="https://gw.alicdn.com/imgextra/O1CN01rOGq191KlTe1YyiZM_!!6000000001204-2-yinhe.png_.webp"
        alt=""
        className="custom-image"
      />
      
    </div>
    </Layout>
    
  );
}
