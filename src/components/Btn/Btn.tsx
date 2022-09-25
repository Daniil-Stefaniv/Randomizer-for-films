import React, { useContext } from "react";
import "./Btn.css";
import titleContext from "../Context";

const Btn = (props: { [key: string]: any }) => {
  const { value, genre, activeClass } = props;
  const { setTitleValue }: any = useContext(titleContext);

  const randomFilm = (param: string[], min: 0, max: number) => {
    let counter = 100;
    const interval = setInterval(() => {
      const random: number = Math.floor(Math.random() * (min - max * -1));
      setTitleValue(param[random]);
      counter = counter + 100
      if(counter >= 2000) {
        clearInterval(interval)
      }
    }, counter);
  };

  return (
    <div className="btn__warpper">
      <button
        onClick={() => randomFilm(genre, 0, genre.length - 1)}
        className={activeClass === true ? "btn active" : "btn"}
      >
        {value}
      </button>
    </div>
  );
};

export default Btn;
