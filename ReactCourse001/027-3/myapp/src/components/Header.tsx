import React from "react";

type Props = {
    name: string;
    age: number
}

const Header = ({name, age}: Props) => {
  return (
      <header>
          <h1>Hello {name} congratulations for yours {age} years</h1>
      </header>
  );
};

export default Header;
