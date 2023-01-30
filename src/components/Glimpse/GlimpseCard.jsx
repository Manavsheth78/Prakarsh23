import React from 'react'

const GlimpseCard = (props) => {
  return (

    <div data-aos={props.item.Animation}>
      <img className='gimg mx-auto' src={props.item.EventimageSource} alt="" />
    </div>
  )
}

export default GlimpseCard