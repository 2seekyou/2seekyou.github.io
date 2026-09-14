import React from 'react';
import Layout from '@theme/Layout';
import {AwardList, SectionTitle} from '../components/Academic';
import {awards} from '../data/academic';

const levelCounts = awards.reduce((counts, award) => {
  counts[award.level] = (counts[award.level] ?? 0) + 1;
  return counts;
}, {});

export default function AwardsPage() {
  return (
    <Layout title="获奖成果" description="崔全的奖学金、荣誉称号与代表性竞赛获奖记录。">
      <main>
        <header className="academicPageHero">
          <div className="container"><span>HONORS & AWARDS</span><h1>获奖成果</h1><p>Scholarships, university honors and competition awards.</p></div>
        </header>
        <section className="academicSection">
          <div className="container academicNarrow">
            <div className="awardStats" aria-label="获奖统计">
              <div><strong>{awards.length}</strong><span>项代表性成果</span></div>
              <div><strong>{levelCounts['国际级'] ?? 0}</strong><span>项国际级</span></div>
              <div><strong>{levelCounts['国家级'] ?? 0}</strong><span>项国家级</span></div>
              <div><strong>{levelCounts['校级'] ?? 0}</strong><span>项校级</span></div>
            </div>
            <SectionTitle eyebrow="Chronology" title="荣誉与竞赛记录" description="按获奖时间倒序排列，级别采用赛事或学校公布口径。" />
            <AwardList items={awards} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
