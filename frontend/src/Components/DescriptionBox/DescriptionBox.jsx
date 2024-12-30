import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Ecommerce websites have revolutionized the way we think about retail and commerce. At its core, eCommerce or electronic commerce, refers to the buying and selling of goods or services using the internet. It encompasses a range of different transactions, from online shopping for clothes to ordering software services. eCommerce sales is not just a trend, it's are an integral part of modern business practices.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variations (eg. size, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox