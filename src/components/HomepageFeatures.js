import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    target: '',
    link: 'blog',
    title: 'Blog',
    Svg: require('../../static/img/notebook.svg').default,
    description: (
      <>
        My personal blog: East Meets Weast
      </>
    ),
  },
  {
    target: '#',
    link: 'https://wmauz677.github.io/Mauz-Portfolio-Web/',
    title: 'Portfolio',
    Svg: require('../../static/img/folder.svg').default,
    description: (
      <>
        A more comprehensive look at my career + skills
      </>
    ),
  },
  {
    target: '#',
    link: 'https://github.com/wmauz677',
    title: 'Projects',
    Svg: require('../../static/img/github.svg').default,
    description: (
      <>
        My programming projects live here
      </>
    ),
  },
];

function Feature({Svg, link, title, description, target}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href = {link} target = {target}><Svg className={styles.featureSvg} alt={title} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
