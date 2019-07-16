import React from 'react'

// 聯絡頁面  目前僅存放Lorem預設文字
function Contact(props) {
  // 兩秒後跳轉至about
  // setTimeout(()=>{
  //   props.history.push('/about')
  // } , 2000)
  return (
    <div className='container'>
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime praesentium, quaerat soluta porro nesciunt, illo minima necessitatibus vel odio asperiores in! Quis alias nihil officiis reiciendis inventore ratione, molestias beatae!</p>
    </div>
  )
}

export default Contact
