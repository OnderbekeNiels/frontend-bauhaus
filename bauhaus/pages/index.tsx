import Head from 'next/head'
import Article from '../components/Article'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head><title>Bauhaus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section>
          <Article title='It’s time to listen to the ones who know best' type='Listen' duration='10:00 min' date='June 2018' description='This is a descriptive sub-headline that introduces the whole content of this text to the audience who is interested in reading about this topic.'></Article>
        </section>
        <section>about</section>
      </main>
    </div>)
}
