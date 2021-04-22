import React from 'react';

const Navbarheader = (props) => {

  return (
  <div className="navBar">
    <img src={'https://www.seekpng.com/png/detail/361-3611583_fashion-trends-beauty-and-fashion-logo.png'} className="logo-img"/>
    <form className="search">
        <input type="text" name="name" value={props.search} onChange={props.change}/>
      <input type="submit" value="Search" onClick={props.handleSearch}/>
    </form>
  </div>
  )
}

export default Navbarheader;