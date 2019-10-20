import React from 'react';
import { softByPost } from '../../helper';

class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags : []
    }
  }
  componentDidMount() {
    fetch(`http://localhost:3001/tags`)
    .then(res => res.json())
    .then(data => {
      const sortedTags = softByPost(data.tags);
      this.setState({tags: sortedTags});
    })
    .catch(error => console.log(error, "error here"))
  }
  render() {
    return this.state.tags.length > 0 ? 
    (<div className = "tags"> 
      <h3>Tags</h3>
      {
        this.state.tags.slice(0, 10).map(tag => {
          return <div key = { tag.ID } >
            <a href = {tag.feed_url}>{tag.name}</a>
          </div>
        })    
      }
    </div>)
    : null
  }
}
export default Tags;