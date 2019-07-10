import React , {useState, useEffect} from 'react'
import HomeDataService from '../services/HomeDataService'


function Post(props) {
  const [data,setData] = useState(null)

  useEffect(() => {
    // 設置當前頁面id
    let _id = (props.match.params.post_id)

    // 抓取資料方法 by Id
    const getDataById = async(_id) =>{
      console.log(_id);
      const _data = (await HomeDataService.indexById(_id)).data
      console.log(_data);
      setData(_data)
    }

    // 使用當前id 抓取後端資料
    getDataById(_id)
  }, [props.match.params.post_id])

  const dataPlat = data ? (
    <div className="post">
      <h1 className="center ">{data.title}</h1>
      <p>{data.body}</p>
    </div>
  ):(
    <div className="center">Loading </div>
  )


  return (
    <div className="container">
      <h4>{dataPlat}</h4>
    </div>
  )
}

export default Post
