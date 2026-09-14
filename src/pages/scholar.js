import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {InterestGrid, ProjectGrid, PublicationList, SectionTitle} from '../components/Academic';
import {projects, publications, researchInterests, worksInReview} from '../data/academic';

export default function ScholarPage() {
  return (
    <Layout title="学者" description="崔全的研究方向、论文成果、科研项目与学术经历。">
      <main>
        <header className="academicPageHero"><div className="container"><span>ACADEMIC PROFILE</span><h1>研究与成果</h1><p>Research, publications and selected projects in remote sensing and computer vision.</p></div></header>
        <section className="academicSection"><div className="container"><SectionTitle eyebrow="Research Agenda" title="研究方向" description="聚焦遥感影像中的可靠视觉感知，连接方法研究与真实场景需求。"/><InterestGrid items={researchInterests}/></div></section>
        <section className="academicSection academicSection--tint" id="publications"><div className="container"><SectionTitle eyebrow="Publications" title="已发表与已录用成果" description="正式发表、见刊或已获会议录用的研究成果；作者信息不完整的条目标记为待补充。"/><PublicationList items={publications}/></div></section>
        <section className="academicSection" id="under-review"><div className="container"><SectionTitle eyebrow="Works in Review" title="审稿中成果" description="以下工作尚未正式发表，状态可能变化，不与已发表或已录用成果混列。"/><PublicationList items={worksInReview}/></div></section>
        <section className="academicSection academicSection--tint"><div className="container"><SectionTitle eyebrow="Projects" title="研究与工程项目" action={<Link className="academicLink" to="/awards">查看获奖成果 →</Link>}/><ProjectGrid items={projects}/></div></section>
      </main>
    </Layout>
  );
}
