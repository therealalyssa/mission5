import React, { useState } from "react";
import InsDropDown from "./InsDropDown";
import "../Styles/InsuranceMenu.css";

const FAQDropDown2: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectInsOption, setInsOption] = useState<string>("");
  const insOptions = () => {
    return [
    "What is Mechanical Breakdown Insurance?",
    "Can I get Mechanical Breakdown Insurance if I didn’t buy my car from Turners?",
    "Can I get Mechanical Breakdown Insurance with my loan?",
    "How do I make a Mechanical Breakdown Insurance claim?",
    "Do I need to service my car?"];
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
        <div className="ins-text">Mechanical Breakdown Insurance</div>
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

export default FAQDropDown2;