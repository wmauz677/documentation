import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import AboutFeatures from '../components/AboutFeatures';

export default function About() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="About my blog & myself">
      <main>
        <AboutFeatures />
      </main>
    </Layout>
  );
}
