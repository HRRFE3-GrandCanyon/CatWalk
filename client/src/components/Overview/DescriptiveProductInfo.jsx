import React from 'react';

const DescriptiveProductInfo = (props) => (

  <div className="descriptive-info">
    <div className="slogan" role="slogan">{props.productInfo.slogan}</div>
    <div className="description" role="description">{props.productInfo.description}</div>
    <i className="fab fa-facebook fa-2x social" role="facebook" style={{color: '#3B5998'}} onClick={()=> window.open('http://www.facebook.com', '_blank')}></i>
    <i className="fab fa-twitter fa-2x social" role="twitter" style={{color: '#00ACEE'}} onClick={()=> window.open('http://www.twitter.com', '_blank')}></i>
    <i className="fab fa-pinterest fa-2x social" role="pinterest" style={{color: '#E60023'}} onClick={()=> window.open('http://www.pinterest.com', '_blank')}></i>
  </div>

);

export default DescriptiveProductInfo;