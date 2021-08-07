import React from 'react';
import Image from 'next/image';
import { blogPosts } from '../../lib/postsData';

const postPage = ({ title, date, image, content }) => {
  // console.log(props);
  return (
    <div>
      <h1> {title} </h1>
      <p> {date} </p>
      <Image src={image} alt={title} width={800} height={600} />
      <p> {content} </p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),

    fallback: true, // See the "fallback" section below
  };
}

export function getStaticProps(context) {
  const { params } = context;
  const props = blogPosts.find((post) => post.slug === params.slug);
  if (!props) {
    return {
      notFound: true,
    };
  }
  return {
    props, // will be passed to the page component as props
  };
}

export default postPage;
