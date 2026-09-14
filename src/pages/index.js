import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {InterestGrid, PublicationList, SectionTitle, Timeline} from '../components/Academic';
import {experiences, featuredPosts, profile, publications, researchInterests} from '../data/academic';
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
      <main>
        <Hero />
        <section className="academicSection">
          <div className="container">
            <SectionTitle eyebrow="Research Interests" title="研究兴趣" description="围绕数据稀缺、尺度变化和复杂空间结构，探索遥感影像理解中的可靠视觉学习方法。" />
            <InterestGrid items={researchInterests} />
          </div>
        </section>
        <section className="academicSection academicSection--tint">
          <div className="container">
            <SectionTitle eyebrow="Selected Publications" title="代表性成果" description="展示已正式发表或录用的研究成果。" action={<Link className="academicLink" to="/scholar">查看全部成果 →</Link>} />
            <PublicationList items={publications} />
          </div>
        </section>
        <section className="academicSection">
          <div className={`container ${styles.twoColumn}`}>
            <div>
              <SectionTitle eyebrow="Academic Path" title="研究经历" />
              <Timeline items={experiences} />
            </div>
            <div>
              <SectionTitle eyebrow="Writing" title="近期文章" />
              <div className={styles.postList}>
                {featuredPosts.map((post) => (
                  <Link to={post.to} className={styles.postCard} key={post.to}>
                    <span>{post.tag}</span><Heading as="h3">{post.title}</Heading><p>{post.description}</p><b>阅读全文 →</b>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
