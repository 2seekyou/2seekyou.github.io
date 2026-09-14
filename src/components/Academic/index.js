import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export function SectionTitle({eyebrow, title, description, action}) {
  return (
    <div className={styles.sectionTitle}>
      <div>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <Heading as="h2">{title}</Heading>
        {description && <p>{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function InterestGrid({items}) {
  return (
    <div className={styles.interestGrid}>
      {items.map((item, index) => (
        <article className={styles.interestCard} key={item.english}>
          <span className={styles.cardIndex}>0{index + 1}</span>
          <Heading as="h3">{item.title}</Heading>
          <span className={styles.cardEnglish}>{item.english}</span>
          <p>{item.description}</p>
          <div className={styles.tags}>{item.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
        </article>
      ))}
    </div>
  );
}

export function PublicationList({items}) {
  const sorted = [...items].sort((a, b) => b.year - a.year);
  const renderAuthors = (authors) => {
    const [before, after = ''] = authors.split('Quan Cui');
    return <>{before}<strong>Quan Cui</strong>{after}</>;
  };
  return (
    <div className={styles.publicationList}>
      {sorted.map((publication) => (
        <article className={styles.publication} key={publication.id}>
          <div className={styles.publicationYear}>{publication.year}</div>
          <div className={styles.publicationBody}>
            <div className={styles.publicationMeta}>
              <span>{publication.type}</span>
              <span className={publication.status === 'Published' ? styles.published : styles.accepted}>{publication.status}</span>
              {publication.note && <span>{publication.note}</span>}
            </div>
            <Heading as="h3">{publication.title}</Heading>
            <p className={styles.authors}>{renderAuthors(publication.authors)}</p>
            <p className={styles.venue}>{publication.venue}</p>
            <div className={styles.linkRow}>
              {publication.links.map((link) => <Link href={link.url} key={link.url}>{link.label} ↗</Link>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Timeline({items}) {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <article className={styles.timelineItem} key={`${item.period}-${item.organization}`}>
          <span className={styles.timelineDot} aria-hidden="true" />
          <time>{item.period}</time>
          <Heading as="h3">{item.organization}</Heading>
          <strong>{item.role}</strong>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ProjectGrid({items}) {
  return (
    <div className={styles.projectGrid}>
      {items.map((project) => (
        <article className={styles.projectCard} key={project.title}>
          <div className={styles.projectMeta}><span>{project.period}</span><span>{project.organization}</span></div>
          <Heading as="h3">{project.title}</Heading>
          <p>{project.description}</p>
          <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      ))}
    </div>
  );
}

export function AwardList({items}) {
  return (
    <div className={styles.awardList}>
      {items.map((award) => (
        <article key={`${award.year}-${award.title}`}>
          <span>{award.year}</span>
          <div><Heading as="h3">{award.title}</Heading><strong>{award.level}</strong></div>
        </article>
      ))}
    </div>
  );
}

export function SkillGroup({title, items}) {
  return <div className={styles.skillGroup}><Heading as="h3">{title}</Heading><div className={styles.tags}>{items.map((item) => <span key={item}>{item}</span>)}</div></div>;
}
