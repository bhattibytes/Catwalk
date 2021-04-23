import React from 'react';

const Navbarheader = (props) => {

  return (
  <div className="topNav">
    <h5>FREE DOMESTIC SHIPPING OVER $200. FREE INTERNATIONAL SHIPPING ABOVE $800. ALL SALE ITEMS ARE FINAL SALE.</h5>
    <div className="navBar">
      <img src={'https://dcassetcdn.com/design_img/149409/115124/115124_2152832_149409_image.png'} className="logo-img"/>
      <form className="search">
          <input type="text" name="name" value={props.search} onChange={props.change}/>
        <input type="submit" value="Search" onClick={props.handleSearch}/>
      </form>
    </div>
  </div>
  )
}

export default Navbarheader;