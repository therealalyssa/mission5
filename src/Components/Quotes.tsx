import React from 'react'

function Quotes() {
  const myimage = require('../images/sarah-brown-3eg3Iuq-3gQ-unsplash.jpg')
  return (
    
    <div className='profile-section'>
      <div className='quotes-bg'>
        <div>
        <div className='turner-text2'>
        </div>
      </div>
      <div className='badges2'>
          <img src={String(myimage)} alt="myimage" />
        </div>

        <div className='rightquotes'>
      <h1 className='quotestext'>Insuring more than one car? We’ve got <br></br> you covered. Get 5% discount with our<br></br>  Multi Car Policy
</h1>
      <p className="quotestext">
      Hey baby. I love you.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et at montes, pulvinar. <br></br>
      Eu habitasse donec ligula sit. Egestas sagittis nec nulla tincidunt vitae. Nec suscipit eget nunc proin. <br></br>Eu eget sed diam morbi.</p>

{/* 
      <p className="quotestext">pulvinar. Eu habitasse donec ligula sit. Egestas sagittis nec nulla tincidunt</p>
      <p className="quotestext">vitae. Nec suscipit eget nunc proin. Eu eget sed diam morbi
          </p> */}
        <div className=' quote-buttons'>
          <div className='green-button'>
            Get a quote
          </div>
          <div className='transparent-button2'>
            <p>
            Find out more
            </p>
          </div>
        </div>
        </div>
        
      </div>
      
  
    </div>
  )
}

export default Quotes