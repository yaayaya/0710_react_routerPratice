// import React , {useState, useEffect} from 'react'
import React from 'react';
// import HomeDataService from '../services/HomeDataService'
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions';

// 詳細內容
function Post(props) {  
  
/*
  // 建立一個data state變數  = null
  const [data,setData] = useState(null)
  useEffect(() => {
    // 設置當前頁面id
    let _id = (props.match.params.post_id)
    // 抓取資料方法 by Id
    const getDataById = async(_id) =>{
      const _data = (await HomeDataService.indexById(_id)).data
      // 放置setData  = _data
      setData(_data)
    }

    // 使用當前id 抓取後端資料
    getDataById(_id)
  }, [props.match.params.post_id])
*/

// 按下刪除btn 後執行
  const handleClick = () =>{
    props.deletePost(props.post.id)
    props.history.push('/')
  }

  // data 存在時迴圈渲染 dataPlat  未存在時顯示loading
  const dataPlat = props.post ? (
    <div className="post">
      <h1 className="center ">{props.post.title}</h1>
      <p>{props.post.body}</p>
      <div className="center">
        <button className="btn grey" onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  ):(
    <div className="center">Loading </div>
  )

    // 回傳 dataPlate
  return (
    <div className="container">
      <h4>{dataPlat}</h4>
    </div>
  )
}

// 取得資料by id 從 redux    (redux state , 本物件props)
const mapStateToProps = (state , ownProps) =>{
  let id = ownProps.match.params.post_id
  return {
    // find =  傳回 for迴圈state.posts 符合條件 true 之值
    post : state.posts.find((post) =>{
      return post.id === id
    })
    // post : state.posts.find (post => post.id === id)
  }
}

// 刪除
const mapDispatchToProps = (dispatch) =>{
  return {
    deletePost : (id) => { dispatch(deletePost(id))}
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Post)
