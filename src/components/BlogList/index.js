import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem/index'
import './index.css'

class BlogList extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(item => ({
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      topic: item.topic,
      author: item.author,
    }))
    this.setState({data: updatedData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          data.map(item => <BlogItem item={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
