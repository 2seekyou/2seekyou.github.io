import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {SectionTitle} from '../components/Academic';
import {featuredPosts, homeHighlights, profile} from '../data/academic';
import {homeStructuredData} from '../data/seo';
import styles from './index.module.css';

function Hero() {
  const avatar = useBaseUrl(profile.avatar);
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>REMOTE SENSING · COMPUTER VISION</span>
          <Heading as="h1"><span>{profile.nameZh}</span><small>{profile.nameEn}</small></Heading>
          <p className={styles.role}>{profile.roleZh}<br/><span>{profile.roleEn}</span></p>
          <p className={styles.bio}>{profile.bio}</p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/scholar">研究与成果</Link>
            <Link className="button button--outline button--lg" to="/blog">文章与随笔</Link>
          </div>
          <div className={styles.contactRow}>
            <a href={`mailto:${profile.email}`}>Email</a><span>/</span>
            <a href={profile.github}>GitHub</a><span>/</span>
            <span>{profile.affiliation}</span>
          </div>
        </div>
        <div className={styles.portraitWrap}>
          <div className={styles.portraitFrame}><img src={avatar} alt="崔全 Quan Cui" /></div>
          <div className={styles.portraitNote}><b>Research Focus</b><span>Reliable perception for remote sensing imagery</span></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="学术主页" description="崔全的个人学术主页，研究方向包括遥感目标检测、少样本遥感分割与视觉基础模型。">
      <Head><script type="application/ld+json">{JSON.stringify(homeStructuredData)}</script></Head>
      <main>
        <Hero />
        <section className="academicSection">
          <div className="container">
            <SectionTitle eyebrow="Explore" title="了解我的工作" description="首页保留概览，完整研究、荣誉与个人经历分别进入独立栏目。" />
            <div className={styles.gatewayGrid}>
              <Link to="/scholar" className={styles.gatewayCard}><span>01</span><Heading as="h2">学术研究</Heading><p>研究方向、论文成果、审稿中工作与研究项目。</p><b>进入学者栏目 →</b></Link>
              <Link to="/awards" className={styles.gatewayCard}><span>02</span><Heading as="h2">获奖成果</Heading><p>奖学金、荣誉称号及智能汽车竞赛获奖记录。</p><b>查看荣誉记录 →</b></Link>
              <Link to="/introduce" className={styles.gatewayCard}><span>03</span><Heading as="h2">个人介绍</Heading><p>教育经历、技术能力、研究理念与科研之外。</p><b>阅读关于我 →</b></Link>
            </div>
          </div>
        </section>
        <section className="academicSection academicSection--tint"><div className="container"><SectionTitle eyebrow="Latest Highlights" title="近期动态"/><div className={styles.highlightList}>{homeHighlights.map((item) => <Link to={item.to} key={`${item.date}-${item.title}`}><time>{item.date}</time><span>{item.label}</span><strong>{item.title}</strong><b>→</b></Link>)}</div></div></section>
        <section className="academicSection"><div className="container"><SectionTitle eyebrow="Writing" title="近期文章" action={<Link className="academicLink" to="/blog">查看更多文章 →</Link>}/><div className={styles.postList}>{featuredPosts.map((post) => <Link to={post.to} className={styles.postCard} key={post.to}><span>{post.tag}</span><Heading as="h3">{post.title}</Heading><p>{post.description}</p><b>阅读全文 →</b></Link>)}</div></div></section>
      </main>
    </Layout>
  );
}
