import clsx from 'clsx';
//import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';
import MusicPlayer from '../components/HomepageFeatures/MusicPlayer';
import Translate, {translate} from '@docusaurus/Translate';

//调用自congig.js中的siteConfig
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const handleImageClick = (event) => {
    event.preventDefault();
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>
          Seekyou's site
          </Translate>
        </Heading>
        <a href="https://git.io/typing-svg" onClick={handleImageClick}>//动态字显示功能
          <img
            src="https://readme-typing-svg.demolab.com?font=Roboto&size=25&duration=4500&pause=50000&color=F7F7F7&center=true%C2%A0%E7%9C%9F&vCenter=Ture%C2%A0%E5%81%87&repeat=true%C2%A0%E7%9C%9F&random=false%C2%A0%E5%81%87&width=441&lines=Hello!++This+is+seekyou(*%C2%B4%E2%88%80%60)~%E2%99%A5"
            alt="Typing SVG"
          />
        </a>
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
    </Layout>
  );
}
