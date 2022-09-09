import React, { useState } from "react";
import InsDropDown from "./InsDropDown";
import "../Styles/InsuranceMenu.css";

const FAQDropDown3: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectInsOption, setInsOption] = useState<string>("");
  const insOptions = () => {
    return ["How do I make a car insurance claim?",
    "Will all of my claim be covered",
    "What should I do if there is a car accident?",
    "Someone drove into my car, what do I do?",
    "What if I caused the accident and the other person wants to make a claim against me?",
    "What if my windscreen or window is damaged?",
    "If a repairer needs to dismantle the car, who will pay for the cost?"];
  };
  console.log(selectInsOption);
  console.log("testing.......");
  /**
   * Toggle the drop down menu and chevron
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param insOption  The selected city
   */
  const citySelection = (insOption: string): void => {
    setInsOption(insOption);
  };

  return (
    <>
      <button
        className={showDropDown ? "ins-active2" : "ins-inactive2"}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="ins-text">Make a Claim</div>
        <p className={showDropDown ? "chevron-up2" : "chevron-down2"}></p>
        {showDropDown && (
          <InsDropDown
            language={insOptions()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            citySelection={citySelection}
          />
        )}
      </button>
    </>
  );
};

export default FAQDropDown3;