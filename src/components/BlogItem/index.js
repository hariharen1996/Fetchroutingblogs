import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {item} = this.props
    const {id, imageUrl, avatarUrl, topic, title, author} = item
    return (
      <Link to={`/blogs/${id}`} className="blog-link">
        <div className="blog-item">
          <img src={imageUrl} className="blog-img" alt="" />
          <div className="blog-content">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} className="avt-img" alt="" />
              <p className="avatar-title">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
