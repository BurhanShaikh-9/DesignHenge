import React from 'react'

export const CarouselItem = (props) => {
  return (
  <React.Fragment>
    <div className="item">
      <div className='productCard'>
        <div className="img__wrap">
          <img src={props.itemImg} />
        </div>
          <h6>{props.itemTitle}</h6>
          <div className="rating-img">
            <img src={props.itemRating} alt="" />
          </div>
          <div className="productPrice">
            <span className='discountPrice'>{props.discountedPrice}</span>
            <span className='price'>{props.productPrice}</span>
          </div>
          <div className="buttonContainer">
            <button className='themeBtn'><i className="ri-shopping-bag-line"></i>ADD TO CART</button>
          </div>
      </div>
    </div>
  </React.Fragment>
//   <React.Fragment>
//   <div className="item" style={{backgroundColor:'red', width:'100px', height:'100px'}}></div>
// </React.Fragment>
  )
}
