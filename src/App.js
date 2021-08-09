import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import './App.css';

import { addOne, applyNumber, changeOperator, clearDisplay, memoryRegister, memoryRecall, memoryClear } from './actions/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
const [ state, dispatch ] = useReducer(reducer, initialState)

// const handleAddClick = () => {
//   dispatch(addOne(1))
// }

const addNumber = (number) => {
  dispatch(applyNumber(number))
}

const addOperator = () => {
  dispatch(changeOperator('+'))
}

const multiplyOperator = () => {
  dispatch(changeOperator('*'))
}

const subtractOperator = () => {
  dispatch(changeOperator('-'))
}

const clearOperator = () => {
  dispatch(clearDisplay())
}

const registerMemory = (number) => {
  dispatch(memoryRegister(number))
}
const recallMemory = () => {
  dispatch(memoryRecall())
}
const clearMemory = () => {
  dispatch(memoryClear())
}



  return (
		<div className="App">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					<img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
					Challenge
				</a>
			</nav>

			<div className="container row mt-5">
				<div className="col-md-12 d-flex justify-content-center">
					<form name="Cal">
						<TotalDisplay value={state.total} />
						<div className="row details">
							<span id="operation">{state.operation}</span>
							<span id="memory">{state.memory}</span>
						</div>

						<div className="row">
							<CalcButton value={"M+"} onClick={registerMemory} />
							<CalcButton value={"MR"} onClick={recallMemory} />
							<CalcButton value={"MC"} onClick={clearMemory} />
						</div>

						<div className="row">
							<CalcButton value={1} onClick={() => addNumber(1)} />
							<CalcButton value={2} onClick={() => addNumber(2)} />
							<CalcButton value={3} onClick={() => addNumber(3)} />
						</div>

						<div className="row">
							<CalcButton value={4} onClick={() => addNumber(4)} />
							<CalcButton value={5} onClick={() => addNumber(5)} />
							<CalcButton value={6} onClick={() => addNumber(6)} />
						</div>

						<div className="row">
							<CalcButton value={7} onClick={() => addNumber(7)} />
							<CalcButton value={8} onClick={() => addNumber(8)} />
							<CalcButton value={9} onClick={() => addNumber(9)} />
						</div>

						<div className="row">
							<CalcButton value={"+"} onClick={addOperator} />
							<CalcButton value={"*"} onClick={multiplyOperator} />
							<CalcButton value={"-"} onClick={subtractOperator} />
						</div>

						<div className="row ce_button">
							<CalcButton value={"CE"} onClick={clearOperator} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
