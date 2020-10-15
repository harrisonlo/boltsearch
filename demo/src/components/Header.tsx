import React from 'react'

const Header = () => (
  <div className='header'>
    <img src={process.env.PUBLIC_URL + '/cover.svg'} alt='cover' />
  </div>
)

export default Header