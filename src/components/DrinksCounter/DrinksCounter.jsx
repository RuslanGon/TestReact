import { useEffect } from "react";

const DrinksCounter = ({handleLogDrink, handleReset, onToggleBarIsVisible, drinksTotal}) => {

  useEffect(() => {
    const onKeydown = (event) => {
      if (event.code === "Escape") {
        onToggleBarIsVisible();
      }
    };

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [onToggleBarIsVisible]);

  
  return (
    <div>
      <button onClick={() => handleLogDrink('beer')}>Beer 🍺</button>
      <button onClick={() => handleLogDrink('whiskey')}>Whiskey 🥃</button>
      <button onClick={() => handleLogDrink('wine')}>Wine 🍷</button>
      {drinksTotal !== 0 && <button onClick={handleReset}>Reset ⥀</button> }
      
    </div>
  );
};

export default DrinksCounter;
