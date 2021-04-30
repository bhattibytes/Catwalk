import React from 'react';
import $ from "jquery";

 var ProductSocial = () => {
  var mEnter = (e) => {
    $(e.target).addClass('highlight');
  }

  var mOut = (e) => {
    $(e.target).removeClass('highlight');
  }

  return (
    <div className='social-shares'>
      <a href="https://www.facebook.com/sharer/sharer.php?u="><img className="social-button facebook" src="http://www.transparentpng.com/thumb/facebook-logo-png/black-facebook-logo-hd-clipart-21.png" onMouseEnter={mEnter} onMouseOut={mOut} /></a>
      <a href="https://twitter.com/intent/tweet?text=Share your style with your friends at the Catwalk"><img className="social-button twitter" src="https://www.pinclipart.com/picdir/big/175-1750445_twitter-black-amp-white-icon-twitter-social-media.png" onMouseEnter={mEnter} onMouseOut={mOut}/></a>
      <a href="https://pinterest.com/pin/create/button/?url="><img className="social-button pin"src="https://www.seekpng.com/png/full/14-149139_white-pinterest-logo-png-icon-pinterest-png.png" onMouseEnter={mEnter} onMouseOut={mOut}/></a>
    </div>
  )
}

export default ProductSocial;