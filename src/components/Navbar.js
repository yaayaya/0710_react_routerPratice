import React from 'react'
// 使用Link 使網頁不會刷新跳轉
// Link NavLink 效果一樣    NavLink 會在點選物件上多一個class 
import { Link , NavLink , withRouter} from 'react-router-dom'

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/contact')
  // }, 2000);  

  return (
    <nav className="nav-wrapper red darken3">
      <div className="container">
        <a href='/' className="brand-logo">Poke Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
