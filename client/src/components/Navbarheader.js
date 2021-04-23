import React from 'react';

const Navbarheader = (props) => {

  return (
  <div className="navBar">
    <img src={'https://dcassetcdn.com/design_img/149409/115124/115124_2152832_149409_image.png'} className="logo-img"/>
    <form className="search">
        <input type="text" name="name" value={props.search} onChange={props.change}/>
      <input type="submit" value="Search" onClick={props.handleSearch}/>
    </form>
  </div>
  )
}

export default Navbarheader;