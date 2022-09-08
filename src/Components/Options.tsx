import React from "react";
import "../Styles/Options.css";


function Options() {
  const tick = require("../images/Tick Icon.png");
  const cross = require("../images/Cross Icon.png");
  const download=require("../images/Status=Default.png")
  return (
    <div className="options">
      <table>
        <tr>
          <th className="border-top"></th>
          <th>Third Party , Fire and Theft</th>
          <th>
            Most Popular <br /> Comprehensive{" "}
          </th>
          <th>Third Party</th>
        </tr>
        <tr className="border-top">
          <td>Damage by an uninsured vehicle
          <div className="avatar" data-tooltip="We'll repair your car if it's damaged by an uninsured vehicle for comprehensive covers. For third party fire and theft and third party covers we'll repair your car if you can identify the person at fault and the fault was at least 50% theirs."> 
            </div>
            <br></br>
          </td>
          
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>Damaging someone else's car or other property

          <div className="avatar" data-tooltip="If you're in an accident and you cause damage to someone else's car or property, we'll cover you for your legal liability to repair it."> 
            </div>
            <br></br>
          </td>
          
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>Claims that were not your fault
          <div className="avatar" data-tooltip="You’ll keep your no claims bonus and you won’t pay an excess if you’vebeen involved in an accident during the period of insurance, and 1. you’ve identified the party at fault (name, phone number, and registration number of that other party’s vehicle), and 2. we’re satisfied that the other party was more than 50% at fault."> 
            </div>
            <br></br>
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>Towing
          <div className="avatar" data-tooltip="We’ll pay for removing your car to the nearest repairer or place of safety if it can’t be driven after a loss covered under this policy.">
            </div>
            <br></br>
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>Fire damage and theft
          <div className="avatar" data-tooltip="We’ll cover your car if it’s damaged by fire, stolen or someone attempted to steal it.">
            </div>
            <br></br>
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>Natural disaster damage
          <div className="avatar" data-tooltip="We’ll pay for natural disaster damage to your car during the period of insurance.">
           </div>
           <br></br>
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>Replacement and additional cars
          <div className="avatar" data-tooltip="If you replace your car or buy a new one, we’ll automatically cover it for 14 days. If you paid more than $125,000 for the car, this benefit doesn’t apply, so please call us to arrange insurance before you purchase the replacement car.">
           </div>
           <br></br>
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>OPTIONAL ADD ON MECHANICAL BREAKDOWN INSURANCE
          <br></br>
          <br></br>
          </td>
        
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
        
          <td>  Comprehensive cover for mechanical and
          <div className="avatar" data-tooltip="While standard vehicle insurance might cover theft 
           and damage from accidents. Mechanical Insurance can cover mechanical faults 
           and repairs, like steering problems, engine repairs, electric battery replacements 
           or auto-electrical issues."> 
           </div>
          electrical breakdown
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>AA Roadservice and 24/7 breakdown assistance
          <div className="avatar" data-tooltip="We’ll cover anyone who’s driving your car if they need help with things like changing a tyre, jump starts, or getting into your car if the keys are locked inside.">
           </div>
           <br></br>
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td>Parts and Labour
          <div className="avatar" data-tooltip="Covers any reasonable costs of certain mechanical and electrical parts failure if a vehicle suffers a sudden and unforeseen breakdown, and is not caused by general wear and tear.">
           </div>
           <br></br>
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
          <td>
            <img src={String(tick)} alt="tick" />
          </td>
          <td>
            <img src={String(cross)} alt="tick" />
          </td>
        </tr>
        <tr className="border-top">
          <td></td>
          <td>
            <a id="test" href="https://content.tgstatic.co.nz/webassets/globalassets/terms-and-conditions/turners-third-party-fire-and-theft-policy-wording-0622.pdf" download="myimage" target="_blank" className="download2"><img src={String(download)} alt="tick" /></a>
            <div className='quote-buttons3'>
            <div className='green-button2'>
              Get a quote
            </div>
            </div>
          </td>
          <td>
            <a id="test" href="https://content.tgstatic.co.nz/webassets/globalassets/terms-and-conditions/turners-third-party-fire-and-theft-policy-wording-0622.pdf" download="myimage" target="_blank"><img src={String(download)} alt="tick" /></a>
            <div className='quote-buttons2'>
            <div className='green-button'>
              Get a quote
            </div>
            </div>
          </td>
          <td>
          <a id="test" href="https://content.tgstatic.co.nz/webassets/globalassets/terms-and-conditions/turners-third-party-fire-and-theft-policy-wording-0622.pdf" download="myimage" target="_blank"><img src={String(download)} alt="tick" /></a>
          <div className=' quote-buttons2'>
          <div className='green-button'>
            Get a quote
          </div>
          </div>
          </td>
        </tr>
        <tr className="border-right">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Options;

// extra tooltip stuff

/* <td>Comprehensive cover for mechanical and electrical breakdown <a href="https://www.urbandictionary.com/define.php?term=techninja" data-tool-tip="While standard vehicle insurance might cover theft 
           and damage from accidents, Mechanical Insurance can cover mechanical faults 
           and repairs, like steering problems, engine repairs, electric battery replacements 
           or auto-electrical issues. " target="_blank"><i className="fas fa-2x fa-user-ninja" id="tech--ninja"></i></a></td> */
