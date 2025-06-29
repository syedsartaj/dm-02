import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Bottom from '../components/Bottom';
import Header from '../components/Header';
import { useData } from '../DataContext';

const slugify = (str) => str?.trim().toLowerCase().replace(/\s+/g, '-');

const BlogPost = () => {
  const { sheetData, loading } = useData();
  const [searchParams] = useSearchParams();
  const selectedId = (searchParams.get('id'));

  // Find the matching post based on ID
  const blogPost = sheetData.find(post => {
    const idFromLink = (post.id);
    return idFromLink === selectedId ;
  });

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Header />

      {loading ? (
        <div className="text-center py-10 font-semibold text-lg">Loading blog post...</div>
      ) : blogPost ? (
        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">{blogPost.title}</h1>
          <img
            src={blogPost.image_url}
            alt={blogPost.title}
            className="w-full h-60 object-cover rounded mb-4"
          />
          <p className="text-sm text-gray-600 mb-2">
            {blogPost.robottxt_publish_date} by {blogPost.robottxt_auther_name || 'Unknown'}
          </p>
          <p className="text-gray-800">{blogPost.robottxt_headline}</p>
          {blogPost.body && (
                <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.body }}
                />
            )}
            </div>
      ) : (
        <div className="text-center py-10 font-semibold text-lg text-red-600">
          Blog post not found.
        </div>
      )}

      <Bottom />
    </div>
  );
};

export default BlogPost;
