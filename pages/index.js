import Head from 'next/head'
import Hero from '../components/Hero';
import Post from '../components/Post';

import Parser from 'rss-parser';
import fetchRSS from '../lib/fetchRSS';

export default function Home({ posts }) {
  console.log(posts);

  return (
    <>
      <Head>
        <title>Archive - Cjaewon</title>
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
    </>
  )
}

export async function getStaticProps(context) {
  const parser = new Parser();
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