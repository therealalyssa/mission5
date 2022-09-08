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
            How do I make a car insurance claim? </p>
                <p>Will all of my claim be covered</p>
<p>What should I do if there is a car accident? </p>
<p>Someone drove into my car, what do I do?</p>
<p>What if I caused the accident and the other person wants to make a claim against me?</p>

<p>What if my windscreen or window is damaged?</p>
<p>If a repairer needs to dismantle the car, who will pay for the cost?</p>
             

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
              Is my policy refundable or transferable?
              </p>
              <p>How can I make a premium payment by credit card?</p>
            </div>
          </article>
          </div>
      </section>
    
  )
}

export default FAQs