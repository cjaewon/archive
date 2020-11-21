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
        <meta name="description" content="Cjaewon :: 여러 플랫폼에 작성한 글들을 아카이브 해둔 공간입니다." />
      </Head>
      <main>
        <Hero />
        <div className="Posts">
          { posts.map(post => (
            <Post
              key={post.link}
              title={post.title}
              description={post.contentSnippet || post.description || post['content:encodedSnippet']}
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