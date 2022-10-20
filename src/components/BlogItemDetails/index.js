import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {details: [], isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({details: updatedData, isLoading: false})
  }

  render() {
    const {details, isLoading} = this.state
    const {title, avatarUrl, imageUrl, content, author} = details
    return (
      <div className="details-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details">
            <h1 className="details-title">{title}</h1>
            <div className="details-author-container">
              <img src={avatarUrl} className="author-img" alt={author} />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} className="details-img" alt={title} />
            <p className="detail-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
