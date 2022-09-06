//Ranju
import React from 'react'
import '../Styles/Profile.css'
function Profile() {
  const badge1 = require('../images/Badge1.png')
  const badge2 = require('../images/Badge2.png')
  const badge3 = require('../images/Badge3.png')
  const turnerText = require('../images/Turners Insurance.png')
  return (
    <div className='profile-section'>
      <div className='profile-bg'>
        <div className='turner-text'>
          <img src={String(turnerText)} alt="turner" />
        </div>
        <div className=' quote-buttons'>
          <div className='blue-button'>
            Get a quote
          </div>
          <div className='transparent-button'>
            <p>
            Retrieve a quote
            </p>
          </div>
        </div>
      </div>
      <div className='ins-types'>
        <div className='ins-type'>
          <h4>Third Party, Fire and Theft</h4>
          <p>Turners third party car insurance provides cover against
              fire and theft , plus cover for damage caused to someone
              else's property by your vehicle .</p>
        </div>
        <hr></hr>
        <div className='ins-type'>
          <h4>Comprehensive</h4>
          <p>Turners comprehensive insurance keeps you and your
              car protected . Key benefits include lifetime guarantee of
              repairs , replacement of locks and keys , and cover for
              personal property .</p>
        </div>
        <hr></hr>
        <div className='ins-type'>
          <h4>Third Party</h4>
          <p>Turners third party property damage car insurance
              covers you for damage your car causes to other people's
              property .</p>
        </div>
      </div>
      <div className='honors'>
        <div className='badges'>
          <img src={String(badge1)} alt="badge" />
        </div>
        <div className='badges'>
          <img src={String(badge2)} alt="badge" />
        </div>
        <div className='badges'>
          <img src={String(badge3)} alt="badge" />
        </div>
        <div>
          <p>
            We've won the Reader's Digest Trusted Brand award three years in a row . Which
            is better than winning it two years in a row , but not quite as good as four .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile