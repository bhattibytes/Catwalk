import React from 'react';

const Navbarheader = (props) => {

  return (
  <div>
    <form className="search">
        <input type="text" name="name" value={props.search} onChange={props.change}/>
      <input type="submit" value="Search" onClick={props.handleSearch}/>
    </form>
  </div>
  )
}

export default Navbarheader;