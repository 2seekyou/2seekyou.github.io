import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

//镇站三喵
const FeatureList = [
  {
    title: 'Life is a Good Thing',
    Svg: require('@site/static/img/water.svg').default,
    description: (
      <>
        This website is used to record some interesting moments in my life.
        Regardless of happy or sad, each is unique.
      </>
    ),
  },
  {
    title: 'Focus on What Really Matters',
    Svg: require('@site/static/img/orange.svg').default,
    description: (
      <>
        Also, I&apos;ll record some promblems in work or study.
        Suming up is a good habbit. So start to focus on thinking
        what we have done instead of working all the time.
      </>
    ),
  },
  {
    title: 'Powered by Passions',
    Svg: require('@site/static/img/sandwith.svg').default,
    description: (
      <>
        Extend and maintain own website is a significant thing for me. 
        Passions is a good thing, maybe the best thing, and mine will never, ever dies.
      </>
    ),
  },
];
//组件 类似于函数 给定上面的输入 返回的是安顿好位置的html页面
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.fadeIn)}> 
        <Svg className={clsx(styles.featureSvg)} role="img" />
      </div>
      <div className={clsx('text--center padding-horiz--md', styles.fadeIn)}> 
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
