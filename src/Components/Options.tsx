import React from "react";
import "../Styles/Options.css";

function Options() {
  const tick = require("../images/Tick Icon.png");
  const cross = require("../images/Cross Icon.png");
  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>Third Party , Fire and Theft</th>
          <th>
            Most Popular <br /> Comprehensive{" "}
          </th>
          <th>Third Party</th>
        </tr>
        <tr className="border-top">
          <td>Damage by an uninsured vehicle</td>
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
          <td>Damaging someone else's car or other property</td>
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
          <td>Claims that were not your fault</td>
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
          <td>Towing</td>
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
          <td>Fire damage and theft</td>
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
          <td>Natural disaster damage</td>
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
          <td>Replacement and additional cars</td>
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
          <td>OPTIONAL ADD ON MECHANICAL BREAKDOWN INSURANCE</td>
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
          <td>Comprehensive cover for mechanical and electrical breakdown</td>
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
          <td>AA Roadservice & 24/7 breakdown assistance</td>
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
          <td>Parts & Labour</td>
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
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Options;
