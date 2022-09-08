import React, { useState } from "react";
import InsDropDown from "./InsDropDown";
import "../Styles/InsuranceMenu.css";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectInsOption, setInsOption] = useState<string>("");
  const insOptions = () => {
    return ["Get Insurance", "Make a Claim", "Contact Us"];
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
        className={showDropDown ? "ins-active" : "ins-inactive"}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="ins-text">Insurance</div>
        <p className={showDropDown ? "chevron-up" : "chevron-down"}></p>
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

export default Menu;