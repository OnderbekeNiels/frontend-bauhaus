import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ArticleContent from '../components/articles/ArticleContent'
import Header from '../components/Header'
import Poll from '../components/Poll'

export default function Home() {
  return (
    <div>
      <Head><title>Bauhaus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className='o-row--md'>
          <ArticleContent title='Bigger, Better, Faster, Stronger but what if you age is 70+?' type='Read' duration='467 words' date='June 2018' description='Times are changing fast and whilst some of us were simply born into this meteoric times there are others who were not. How do our grandparents feel about change?' action='Read more' headliner={true}></ArticleContent>
        </section>
        <section className='o-row--lg'>
          <div className="c-article-container c-article-container__1-1">
            <img className='c-image-tile__sm' src="/img/png/cowboy.png" alt="Picture of old man" />
            <ArticleContent title='It’s time to listen to the ones who know best' type='Listen' duration='10:00 min' date='June 2018' description='This is a descriptive sub-headline that introduces the whole content of this text to the audience who is interested in reading about this topic.' action='Listen now'></ArticleContent>
          </div>
          <div className="c-article-container c-article-container__1-1">
            <img className='c-image-tile__sm' src="/img/png/camera-women.png" alt="Picture of old women with camera" /><ArticleContent title='There is always a solution.
Just go for it!' type='Read' duration='467 words' date='June 2018' description='Times are changing fast and whilst some of us were simply born into this meteoric times there are others who were not.' action='Read more'></ArticleContent>
          </div>
        </section>
        <section className='o-row--md'>
          <Poll title='What a fancy poll!' description='Times are changing fast and whilst some of us were simply
born into this meteoric times there are others who were not.
How do you feel about change?' options={[{ name: 'opinion', value: 'yes', label: 'Love it! Show me the next big thing.' }, { name: 'opinion', value: 'change', label: 'Change is the only constant.' }, { name: 'opinion', value: 'no', label: 'Mehh! Don’t like it!' }]} action='Send opinion' destination='/api'></Poll>
        </section>
        <section className='o-row--sm'>
          <ArticleContent title='Find places in Berlin' type='Read' duration='502 words' date='June 2018' action='Read more'></ArticleContent>
          <ArticleContent title='How do pepole live in such' type='Read' duration='345 words' date='May 2018' action='Read more'></ArticleContent>
          <ArticleContent title='Find places in Berlin' type='Read' duration='520 words' date='May 2018' action='Read more'></ArticleContent>
        </section>
        <section>about</section>
      </main>
    </div>)
}
