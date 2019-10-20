import React, {useState} from 'react';
import { getTimeDifference } from '../../helper';
import './card.css';

const Card = ({post ={}}) => {
  const [hiddenContent, contentHandler] = useState(true)
  const [relatedPosts, postHandler] = useState([])
  const currentDate = new Date();
  const datePublised = new Date(post.date);
  const time = getTimeDifference(currentDate, datePublised);
  const thumbnailUrl = post.post_thumbnail && post.post_thumbnail.URL
  function getReleventPost(postId) {
    fetch(`http://localhost:3001/post?postId=${postId}`)
    .then(res => res.json())
    .then(data => postHandler(relatedPosts.push(data)))
    .catch(error => console.log(error))
  }
  function getRelatedPost(postId) {
    fetch(`http://localhost:3001/related?postId=${postId}`, {
      method: 'POST',
      ignore_errors: true,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        data.hits.forEach(relatedPost => {
          getReleventPost(relatedPost.fields.post_id)
        });
      })
      .catch(error => console.log(error, "error here"))
  }
  function handleClick(e) {
    e.preventDefault();
    getRelatedPost(post.ID);
    contentHandler(!hiddenContent)
  }
  return <div className="card-container">
    <figure className="thumbnail-wrapper">
      <img src = {thumbnailUrl}  className="thumbnail" />
    </figure>
    <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
    <article dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    <time>{ time }</time>
    <button className = {hiddenContent ? "showContent" : "hideContent"} onClick = {handleClick}>Continue Reading ...</button>
    <div className = {!hiddenContent ? "showContent" : "hideContent"}>
      <div dangerouslySetInnerHTML = {{ __html: post.content }}/>
      
    </div>
  </div>
}
export default Card;