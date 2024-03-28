import { randEmoji } from "./App";

const Pizzas = ({pizzaList}) => {
  return (
    <div>
      <div id='pizzaDiv'> 
        <h3>Pizza :</h3>
        {
          pizzaList.map((pizza, index) => {
            return <p key={index}>{`🍕${pizza.pizza}`}</p>
          })
        }
      </div>
      <div id='sidesDiv'>
        <h3>Sides :</h3>
        {
          pizzaList.map((pizza) => {
            return (
              <div>
                {
                  pizza.sides.map((side, index) => {
                    return <p key={index}>{`${randEmoji()}${side}`}</p>
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Pizzas;