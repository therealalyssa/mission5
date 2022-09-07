import React, { useEffect, useState } from "react";

type DropDownProps = {
  language: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  langSelection: Function;
};

const LangDropDown: React.FC<DropDownProps> = ({
  language: languages,
  langSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the city name
   * back to the parent component
   *
   * @param language  The selected city
   */
  const onClickHandler = (language: string): void => {
    langSelection(language);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "lang-dropdown" : "lang-dropdown"}>
        {languages.map((language: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(language);
              }}
            >
              {language}
            </p>
          );
        })}
      </div>
    </>
  );
};
export default LangDropDown;
