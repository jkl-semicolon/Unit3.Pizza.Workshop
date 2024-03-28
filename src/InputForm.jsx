import { randEmoji } from "./App";

const InputForm = ({pizzaList, setPizzaList}) => {
  return (
    <form onSubmit={() => {
      event.preventDefault();
      const pizzaValue = document.querySelector('#pizzaInput').value;
      const sidesValue = document.querySelector('#sidesInput').value;
      const sidesValueArray = sidesValue.split(' ');
      setPizzaList([...pizzaList,
        {
          pizza: pizzaValue,
          sides: sidesValueArray,
        },
      ],)
      document.querySelector('#pizzaInput').value = '';
      document.querySelector('#sidesInput').value = '';
    }}>
      <div id='formDiv'>
        <div>
          <label>{`🍕Enter Pizza : `}</label>
          <input name='newPizza' type='text' id='pizzaInput'></input> <br/>
        </div>
        <div>
          <label>{`${randEmoji()}Enter Side(s) : `}</label>
          <input name='newSides' type='text' id='sidesInput'></input>
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default InputForm;