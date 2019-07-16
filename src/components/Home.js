// import React , {useState, useEffect} from 'react'
import React from 'react';
// import HomeDataService from '../services/HomeDataService'
// Link 使頁面可部分刷新
import {Link} from 'react-router-dom'
// 連結 redux
import {connect} from 'react-redux'
import PokeBall from '../image/pokeball.png'

// 主頁面 資料標題
function Home(props) {
  // 取得Redux資料
  const data = props.posts

  // const [data, setData] = useState([])
  // 預設每偵刷新 useEffect  
  /*useEffect(()=>{
    // 取得資料
    const getData = async() => {
      const _data = (await HomeDataService.index()).data
      setData(_data)
    }
    getData()
    // 最後的 []  觀測裡面值改變後 刷新   若空白  則只在初始時刷新一次  類似 watch
  }, []  )*/




  // div dataList 判斷是否有資料  a ? () : () 
  const dataList = data.length ? (
    data.map(_data => {
      return (
        <div className="post card" key={_data.id}>
          <img src={PokeBall} alt="A PokeBall"/>
          <div className="card-content">
            {/* 連結至 id */}
            <Link to={"/" + _data.id} >
              <span className="card-title red-text">{_data.title}</span>
            </Link>
            <p>{_data.body}</p>
          </div>
        </div>
      )
    })
  ) : (
    <div className="center">No Data</div>
  )

  // 回傳render
  return (
    <div className='container home'>
      <h4 className="center">HomePage</h4>
      {dataList}
    </div>
  )
}

// 只抓取Redux State裡的posts元素 
const mapStateToPosts = (state) =>{
  return {
    posts : state.posts
  }
}

// connect(mapStateToProps) 使其變成HOC 後 export (Home)
export default connect(mapStateToPosts)(Home)
