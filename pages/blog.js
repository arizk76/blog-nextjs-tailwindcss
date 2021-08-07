import Head from 'next/head';
import { blogPosts } from '../lib/postsData';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Sample blog website</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1   container gap-6 mx-auto px-24 sm:px-4 xs:px-2'>
        {blogPosts.map((post) => (
          <div className='my-5 ' key={post.slug}>
            <h1 className='font-semibold text-3xl'> {post.title} </h1>

            <p className='font-extralight text-sm mb-1'>{post.date}</p>

            <p className='text-md'>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
