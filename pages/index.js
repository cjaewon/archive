import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Post from '../components/Post';
import Template from '../components/Template';

import fetchRSS from '../lib/fetchRSS';

export default function Home({ posts }) {
  return (
    <Template>
      <Head>
        <title>Archive - Cjaewon</title>
        <link rel="shortcut icon" type="image/png" href="/favicon-192x192.png" />
      </Head>
      <main>
        <Hero />
        <div className="Posts">
          { posts.map(post => (
            <Post
              key={post.link}
              title={post.title}
              description={post.contentSnippet || post.description}
              date={post.pubDate}
              url={post.link}
            />
          )) }
        </div>
      </main>
    </Template>
  )
}

export async function getStaticProps(context) {
  const posts = await fetchRSS();

  posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  })

  return {
    props: {
      posts,
    },
  }
}