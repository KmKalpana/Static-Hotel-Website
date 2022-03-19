import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <i className='fa fa-phone item1'>&nbsp;123545433</i>
      <div className='social'>
        <a href='https://www.instagram.com/kalpana_kathait_11/' className='instragram icon'>
          <FontAwesomeIcon icon={faInstagram} size='1x' />
        </a>
        <a href='https://www.facebook.com/kalpana.kathait.92' className='facebook icon'>
          <FontAwesomeIcon icon={faFacebook} size='1x' />
        </a>
        <a href='https://twitter.com/Kalpanakathait1' className='twitter icon'>
          <FontAwesomeIcon icon={faTwitter} size='1x' />
        </a>
      </div>
      <p
        className='col-sm' style={
          {
            textAlign: 'center',
            fontSize: '25px',
            paddingTop: '14px'
          }
          }
      >
        &copy;{new Date().getFullYear()}  Hotel Abhinandan, Inc. All Right Reservation.
      </p>
    </div>
  )
}
export default Footer
