import Head from 'next/head'
import React from 'react'
import Article from '../components/Article'
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
        <section className='u-mb--xxl'>
          <Article title='It’s time to listen to the ones who know best' type='Listen' duration='10:00 min' date='June 2018' description='This is a descriptive sub-headline that introduces the whole content of this text to the audience who is interested in reading about this topic.' action='Listen now'></Article>
          <Article title='There is always a solution.
Just go for it!' type='Read' duration='467 words' date='June 2018' description='Times are changing fast and whilst some of us were simply born into this meteoric times there are others who were not.' action='Read more'></Article>
        </section>
        <section className='u-mb--xxl'>
          <Poll title='What a fancy poll!' description='Times are changing fast and whilst some of us were simply
born into this meteoric times there are others who were not.
How do you feel about change?' options={[{ name: 'opinion', value: 'yes', label: 'Love it! Show me the next big thing.' }, { name: 'opinion', value: 'change', label: 'Change is the only constant.' }, { name: 'opinion', value: 'no', label: 'Mehh! Don’t like it!' }]} action='Send opinion' destination='/api'></Poll>
        </section>
        <section className='u-mb--xxl'>
          <Article title='Find places in Berlin' type='Read' duration='502 words' date='June 2018' action='Read more'></Article>
          <Article title='How do pepole live in such' type='Read' duration='345 words' date='May 2018' action='Read more'></Article>
          <Article title='Find places in Berlin' type='Read' duration='520 words' date='May 2018' action='Read more'></Article>
        </section>
        <section>about</section>
      </main>
    </div>)
}
