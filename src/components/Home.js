import React , {useState , useEffect }from 'react';
import HomeDataService from '../services/HomeDataService'
import {Link} from 'react-router-dom'


function Home() {

  const [data, setData] = useState([])
  // 預設每偵刷新 useEffect  
  useEffect(()=>{
    const getData = async() => {
      const _data = (await HomeDataService.index()).data
      
      setData(_data)
    }
    getData()
    
    // 最後的 []  觀測裡面值改變後 刷新   若空白  則只在初始時刷新一次
    // 相當於 watch 
  }, []  )




  // div dataList 判斷是否有資料  a ? () : () 
  const dataList = data.length ? (
    data.map(_data => {
      return (
        <div className="post card" key={_data.id}>
          <div className="card-content">
            {/* 連結至 id */}
            <Link to={"/" + _data.id} >
              <span className="card-title">{_data.title}</span>
            </Link>
            <p>{_data.body}</p>
          </div>
        </div>
      )
    })
  ) : (
    <div className="center">No Data</div>
  )

  return (
    <div className='container'>
      <h4 className="center">HomePage</h4>
      {dataList}
    </div>
  )
}

export default Home
