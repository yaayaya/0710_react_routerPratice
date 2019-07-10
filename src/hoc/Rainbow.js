import React from 'react'

// 物件包裝物件 HOC  high order component
function Rainbow(WrappedComponent) {
  
  const colours = ['red' , 'pink' , 'orange' , 'blue' , 'green' ,'yellow']
  //  Math floor 無條件捨去  Math.random 0 ~ 1 隨機數
  const randomColour = colours[Math.floor(Math.random() * 5)]
  const className = randomColour + '-text';

  return (props) =>{
    
    return(
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Rainbow
