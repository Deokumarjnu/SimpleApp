import React from 'react';

const RelatedPost = ({post ={}}) => {
  return <div className="RelatedPost-container">
    <h2>Related Post</h2>
    <a href = {post.URL}>post.title</a>
  </div>
}
export default RelatedPost;