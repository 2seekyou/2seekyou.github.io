import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import {SectionTitle, SkillGroup, Timeline} from '../components/Academic';
import {experiences, profile, skills} from '../data/academic';
import {profilePageStructuredData} from '../data/seo';

export default function IntroducePage() {
  const avatar = useBaseUrl(profile.avatar);
  return (
    <Layout title="关于我" description="崔全的个人介绍、教育背景与研究经历。">
      <Head><script type="application/ld+json">{JSON.stringify(profilePageStructuredData)}</script></Head>
      <main>
        <header className="academicPageHero"><div className="container"><span>ABOUT</span><h1>关于我</h1><p>从智能系统工程实践走向遥感智能解译研究。</p></div></header>
        <section className="academicSection">
          <div className="container aboutLead">
            <img src={avatar} alt="崔全 Quan Cui"/>
            <div><span className="academicEyebrow">BIOGRAPHY</span><h2>{profile.nameZh} <small>{profile.nameEn}</small></h2><p>{profile.bio}</p><p>本科阶段的智能车竞赛与嵌入式项目，让我开始关注感知算法如何在真实系统中稳定工作。当前，我在湘潭大学攻读控制科学与工程硕士学位，将主要精力投入遥感目标检测、少样本语义分割与视觉基础模型研究。</p><div className="aboutLinks"><a href={`mailto:${profile.email}`}>Email</a><a href={profile.github}>GitHub</a><a href={profile.dblp}>DBLP</a><Link to="/scholar">学术成果</Link></div></div>
          </div>
        </section>
        <section className="academicSection academicSection--tint"><div className="container academicNarrow"><SectionTitle eyebrow="Education & Experience" title="教育与研究经历"/><Timeline items={experiences}/></div></section>
        <section className="academicSection"><div className="container"><SectionTitle eyebrow="Capabilities" title="研究与工程能力"/><div className="skillColumns"><SkillGroup title="研究工具" items={skills.research}/><SkillGroup title="工程技术" items={skills.engineering}/><SkillGroup title="学术表达" items={skills.academic}/></div></div></section>
        <section className="academicSection academicSection--tint"><div className="container academicNarrow"><SectionTitle eyebrow="Beyond Research" title="科研之外"/><p className="aboutProse">我也保留对旅行、摄影和技术写作的兴趣。博客记录研究之外的观察，也记录从竞赛工程实践到学术研究的成长过程。</p><Link className="academicLink" to="/blog">阅读文章与随笔 →</Link></div></section>
      </main>
    </Layout>
  );
}
