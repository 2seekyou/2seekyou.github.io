import React from 'react';
import Layout from '@theme/Layout';
import {AwardList, InterestGrid, ProjectGrid, PublicationList, SectionTitle} from '../components/Academic';
import {awards, projects, publications, researchInterests} from '../data/academic';

export default function ScholarPage() {
  return (
    <Layout title="学者" description="崔全的研究方向、论文成果、科研项目与学术经历。">
      <main>
        <header className="academicPageHero"><div className="container"><span>ACADEMIC PROFILE</span><h1>研究与成果</h1><p>Research, publications and selected projects in remote sensing and computer vision.</p></div></header>
        <section className="academicSection"><div className="container"><SectionTitle eyebrow="Research Agenda" title="研究方向" description="聚焦遥感影像中的可靠视觉感知，连接方法研究与真实场景需求。"/><InterestGrid items={researchInterests}/></div></section>
        <section className="academicSection academicSection--tint" id="publications"><div className="container"><SectionTitle eyebrow="Publications" title="论文成果" description="仅列出已经正式发表或录用的成果，姓名加粗标识第一作者。"/><PublicationList items={publications}/></div></section>
        <section className="academicSection"><div className="container"><SectionTitle eyebrow="Projects" title="研究与工程项目"/><ProjectGrid items={projects}/></div></section>
        <section className="academicSection academicSection--tint"><div className="container academicNarrow"><SectionTitle eyebrow="Selected Honors" title="代表性荣誉" description="智能系统与工程实践阶段的代表性竞赛成果。"/><AwardList items={awards}/></div></section>
      </main>
    </Layout>
  );
}
