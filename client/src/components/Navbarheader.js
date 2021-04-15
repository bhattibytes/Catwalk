import React from 'react';

const Navbarheader = (props) => {

  return (
  <div>
    <form>
      <label>
        <input type="text" name="name" value={props.search} onChange={props.change}/>
      </label>
      <input type="submit" value="Search" onClick={props.handleSearch}/>
    </form>
  </div>
  )
}

export default Navbarheader;