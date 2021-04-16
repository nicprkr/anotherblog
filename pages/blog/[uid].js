import React from "react";
import Head from "next/head";
import { RichText, Date } from "prismic-reactjs";

import { queryRepeatableDocuments } from 'utils/queries'

// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/post";

// Project functions & styles
import { Client } from "utils/prismicHelpers";
import { postStyles } from "styles";

/**
 * Post page component
 */
const Post = ({ post }) => {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";
    // Format the date to M d, Y
      const dateFormat = {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }
      const displayDate = new Intl.DateTimeFormat('en-US', dateFormat).format(Date(post.data.date))
    return (
      <DefaultLayout>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="main">
          <div className="outer-container">
            <BackButton />
            <h1>{title}</h1>
            <p className="blog-post-meta">
              <time className="created-at">{displayDate}</time>
            </p>
          </div>
          <SliceZone sliceZone={post.data.body} />
        </div>
        <style jsx global>
          {postStyles}
        </style>
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const post = await Client().getByUID("post", params.uid, ref ? { ref } : null) || {}
  return {
    props: {
      preview,
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/blog/${doc.uid}`),
    fallback: true,
  }
}

export default Post;
