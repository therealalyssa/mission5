//Alyssa
import React from 'react'

function FAQs() {
  return (
    <section className="questions">
        <div>
          <h4>FREQUENTLY ASKED QUESTIONS</h4>
        </div>
        <div className="section-center">
       
          <article className="question">
           
            <div className="question-title">
              <p>Car Insurance</p>
              <button type="button" className="question-btn">
                <span className="plus-icon">
                  <i className="far fa-plus-square"></i>
                </span>
                <span className="minus-icon">
                  < i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text">
              <p>
                Who is the underwriter?
              </p>
              <p>
                What is an excess?
              </p>
              <p>How much does the policy cost?</p>
              <p>Can my policy be renewed after it has expired?</p>
              <p>Can I stop paying for my car insurance?</p>
              <p>Do you have discount for multiple vehicle insurance?</p>
              <p>Does the policy include the cost of both parts and labour?</p>
            </div>
          </article>
          
  
          <article className="question">
       
            <div className="question-title">
              <p>Mechanical Breakdown Insurance </p>
              <button type="button" className="question-btn">
                <span className="plus-icon">
                  <i className="far fa-plus-square"></i>
                </span>
                <span className="minus-icon">
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
        
            <div className="question-text">
            <p>
                What is Mechanical Breakdown Insurance?  </p>
                <p>Can I get Mechanical Breakdown Insurance if I didn’t buy my car from Turners? </p>
<p>Can I get Mechanical Breakdown Insurance with my loan? </p>
<p>How do I make a Mechanical Breakdown Insurance claim? </p>
<p>Do I need to service my car? </p>
            </div>
          </article>
          
       
          <article className="question">
         
            <div className="question-title">
              <p>Make a Claim</p>
              
              <button type="button" className="question-btn">
                <span className="plus-icon">
                  <i className="far fa-plus-square"></i>
                </span>
                <span className="minus-icon">
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>

            <div className="question-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                dolore illo dolores quia nemo doloribus quaerat, magni numquam
                repellat reprehenderit.
              </p>
            </div>
          </article>

          <article className="question">
         
            <div className="question-title">
              <p>Payment</p>
              
              <button type="button" className="question-btn">
                <span className="plus-icon">
                  <i className="far fa-plus-square"></i>
                </span>
                <span className="minus-icon">
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>

            <div className="question-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                dolore illo dolores quia nemo doloribus quaerat, magni numquam
                repellat reprehenderit.
              </p>
            </div>
          </article>
          </div>
      </section>
    
  )
}

export default FAQs