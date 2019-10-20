import React from 'react';
import Card from '../card';
import './post.css';
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      number: 25,
      offset: 0,
      relatedPost: []
    }
    this.loadMore = this.loadMore.bind(this);
  }
  componentDidMount() {
    this.getPost();
  }
  getPost() {
    fetch(`http://localhost:3001/?number=${this.state.number}&offset=${this.state.offset}`)
    .then(res => res.json())
    .then(data => {
      const posts = this.state.posts.concat(data.posts);
      this.setState({posts})
    })
    .catch(error => console.log(error, "error here"))
  }
  loadMore() {
    const offset = this.state.offset+25;
    this.setState({ offset }, () => this.getPost());
  }
  
  render() {
    return this.state.posts.length > 0 ? (
      <div className="posts">
        {
          this.state.posts.map(post =>  <Card key = {post.ID} post = {post} />)
        }
        <div className="load-more">
         <button onClick = {this.loadMore} className="load-more__botton">Load More</button> 
        </div>
      </div>
    ) : null;
  }
}

export default Posts;