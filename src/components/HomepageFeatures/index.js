import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

export default function HomepageFeatures() {
  function Feature({ Svg, title, description }) {
    return (
      <div className={clsx('col col--4')}>
        <div className={clsx('text--center', styles.fadeIn)}> 
          <Svg className={clsx(styles.featureSvg)} role="img" />
        </div>
        <div className={clsx('text--center padding-horiz--md', styles.fadeIn)}> 
          <Heading as="h2" className={styles.featureTitle}>
            {title}
          </Heading>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature
            title={
              <Translate>
                Life is a Good Thing
              </Translate>
            }
            Svg={require('@site/static/img/water.svg').default}
            description={
              <Translate>
                This website is used to record some interesting moments in my life. Regardless of happy or sad, each is unique.
              </Translate>
            }
          />
          <Feature
            title={
              <Translate>
                Focus on What Really Matters
              </Translate>
            }
            Svg={require('@site/static/img/orange.svg').default}
            description={
              <Translate>
                Also, I&apos;ll record some problems in work or study. Summing up is a good habit. So start to focus on thinking what we have done instead of working all the time.
              </Translate>
            }
          />
          <Feature
            title={
              <Translate>
                Powered by Hope
              </Translate>
            }
            Svg={require('@site/static/img/sandwith.svg').default}
            description={
              <Translate>
                Hope is a good thing, maybe the best thing, and mine will never, ever dies. And this site will be my first hope.
              </Translate>
            }
          />
        </div>
      </div>
    </section>
  );
}

