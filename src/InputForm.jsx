import { randEmoji } from "./App";

const InputForm = () => {
  return (
    <form>
      <div id='formDiv'>
        <div>
          <label>{`🍕Enter Pizza : `}</label>
          <input type='text'></input> <br/>
        </div>
        <div>
          <label>{`${randEmoji()}Enter Side(s) : `}</label>
          <input type='text'></input>
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default InputForm;