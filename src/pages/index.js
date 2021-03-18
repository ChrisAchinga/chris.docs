import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Projects</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        My Projects documentations all in one place. I explain what they do and
        why I built them. The docs also explains how and what tech stack the
        projects use.
      </>
    ),
  },
  {
    title: <>Who Is Chris</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        I am a self taught developer who has to keep proving my skills and my
        abilities to the world. I also love sharing my knowledge through
        technical writing and participating in Tech Communities and their
        activities.
      </>
    ),
  },
  {
    title: <>Articles</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        I am not the best writer out here, but I give it my best shot everytime
        I take a bullet for the technical article. I understand the struggles of
        keeping up to date with the dev tools, so I try as much as possible to
        create reasonable technical articles/tuts
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Chris Achinga - Technical Documentations for all my projects and technical stuff <head />'
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/content')}
            >
              Table of Contents
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
