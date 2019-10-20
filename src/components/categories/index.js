import React from 'react';

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories : []
    }
  }
  componentDidMount() {
    fetch(`http://localhost:3001/categories`)
    .then(res => res.json())
    .then(data => this.setState({categories:data.categories}))
    .catch(error => console.log(error, "error here"))
  }
  render() {
    return this.state.categories.length > 0 ? 
    (<div className = "categories"> 
      <h3>Categories</h3>
      {
        this.state.categories.map(category => {
          return <div key = { category.ID } >
            <a href = {category.feed_url}>{category.name}</a>
          </div>
        })    
      }
    </div>)
    : null
  }
}
export default Categories;