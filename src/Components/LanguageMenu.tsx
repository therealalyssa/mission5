import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import LangDropDown from "./LangDropDown";
import "../Styles/LanguageMenu.css";

const Menu: React.FC = (): JSX.Element => {
  const [buttonClosed, setButtonClosed] = useState<boolean>(false);
  const [selectInsOption, setInsOption] = useState<string>("");
  const langOptions = () => {
    return ["Māori", "普通话"];
  };
  console.log(selectInsOption);

  /**
   * Toggle the drop down menu and chevron
   */
  const toggleDropDown = () => {
    setButtonClosed(!buttonClosed);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      //setShowDropDown(false);
      setButtonClosed(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param insOption  The selected city
   */
  const langSelection = (insOption: string): void => {
    setInsOption(insOption);
  };

  return (
    <>
      <button
        className={buttonClosed ? "lang-active" : "lang-inactive"}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div
          className={buttonClosed ? "lang-button-content-open" : "lang-button-content" }
        >
          <FontAwesomeIcon icon={faGlobe} />
          <p>English</p>
          <p className={buttonClosed ? "chevron-up" : "chevron-down"}></p>
        </div>
        {buttonClosed && (
          <LangDropDown
            language={langOptions()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            langSelection={langSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
