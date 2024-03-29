import './App.css';
import {useState} from 'react';
import Pizzas from './Pizzas.jsx';
import InputForm from './InputForm.jsx';

export const randEmoji = () => {
  const foodEmojis = ['🍔','🌭','🥙','🍗','🍟','🥖','🥗','🍨','🍲',
                      '🍎','🥫','🥕','🥬','🍉','🍓','🍈','🧋','☕️',
                      '🍵','🍺','🥛','🍩','🧁','🥟','🥠','🍡','🥧',
                      '🥞','🍖','🌭','🥑','🥦','🥝','🍊','🍮','🍪'];
  return foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
}

function App() {
  const [pizzaList, setPizzaList] = useState(
    [
      {
        pizza: 'Cheese',
        sides: ['Baked Clams', 'Salad']
      },
      {
        pizza: 'Grandma',
        sides: ['Garlic Knots', 'Garlic Bread']
      },
      {
        pizza: 'Sicilian',
        sides: ['Broccoli w/ Garlic & Oil', 'Italian Ice',]
      },
      {
        pizza: 'Calzone',
        sides: ['Buffalo Wings',]
      },
    ]
  );

  let display;
  if (pizzaList.length) {
    display = <Pizzas pizzaList={pizzaList}/>
  } else {
    display = <h3>No Pizzas Yet!</h3>
  };
 
  return (
    <>
      <h1>🍕Pizza List🍕</h1>
      <InputForm pizzaList={pizzaList} setPizzaList={setPizzaList}/>
      {display}
    </>
  );
};

export default App;