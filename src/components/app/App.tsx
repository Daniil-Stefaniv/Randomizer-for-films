import { useState } from "react";
import { allGenres } from "../../react-app-env";
import Btn from "../Btn/Btn";
import "./App.css";
import TitleContext from "../Context";

const App = () => {
  const firstValue = "Нажми на кнопку и случится магия!";
  const [titleValue, setTitleValue] = useState(firstValue);

  const allGenres: allGenres = {
    Боевик: ["Старикам тут не место", "Джеймс бонд", "Драйв",],
    Драма: ["2"],
    Комедия: [
      "Голый пистолет", 
      "Шпион", 
      "Охота на диких людей", 
      "Дьявол носит прада", 
      "Знакомство с родителями", 
      "Кадры", "Шанхайский полдень", 
      "Шанхайские рыцари", 
      "Кто наш папа, чувак?",
      "Час пик",
      "Доспехи бога",
      "Полицейская история",
    ],
    Романтика: ["4"],
    Анимация: ["5"],
    Детективы: ["6"],
    Приключения: ["7"],
  };

  const allGenresFilms = (): string[] => {
    let result: string[] = [];
    Object.values(allGenres).map((val: string[]) => {
      result = result.concat(val);
    });
    return result;
  };

  return (
    <TitleContext.Provider value={{ titleValue, setTitleValue }}>
      <div className="wrapper">
        <h1 className="title">{titleValue}</h1>
        <div className="btns__block">
          {Object.keys(allGenres).map((genre, idx) => {
            return <Btn value={genre} genre={allGenres[genre]} key={idx} />;
          })}
          <Btn
            value="Случайный жанр"
            genre={allGenresFilms()}
            activeClass={true}
          />
        </div>
      </div>
    </TitleContext.Provider>
  );
};

export default App;
