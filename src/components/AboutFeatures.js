import React from 'react';
import clsx from 'clsx';
import styles from './AboutFeatures.module.css';

const FeatureList = [
  {
    title: 'Weston Mauz',
    Svg: require('../../static/img/github.svg').default,
    description: (
      <>
        Winter Park - 2020
      </>
    ),
  },
];

const AbText = "Hello, my name is Weston Mauz, though most of my friends call me Weast (pronounced 'east' with a 'w'). I am a mechanical engineer / software developer from Golden, Colorado, U.S.A." +

" On May 5, 2021, I embarked on an 18-month engineering assignment in Taiwan with Taiwan Semiconductor Manufacturing Company. I will be stationed in the city of Tainan, where I will be trained to learn the most modern process of semiconductor manufacturing." +

" This blog will be a representation of what I see, experience, and learn while in the East. I will not glamorize the experience, nor display this time as fantasy. I intend to keep these depictions raw and unfiltered." +

" I look forward to sharing my experience with you."

function Feature({Svg, link, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <a href = {link} target = "#"><Svg className={styles.featureSvg} alt={title} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureII({Svg, link, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <p>{AbText}</p>
    </div>
  );
}

export default function AboutFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          // {FeatureII}
        </div>
      </div>
    </section>
  );
}
