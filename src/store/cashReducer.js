// -- State (состояние) - это объект, массив или примитивное значение.
const defaultState = {
	cash: 5,
};

// -- Action - это JS объект, у которого должно быть поле type, по которому определяется, как должно изменяться состояние
const action = { type: "", payload: "?" };

// -- Редьюсер - это чистая JS функция, которая отвечает за обновление состояния.
// -- Принимает два аргумента: state - значение текущего состояния, action - объект события
export const cashReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_CASH":
			// -- Изначально, состояние в Redux является неизменяемым, поэтоу каждый раз нужно возвращать новый объект
			return { ...state, cash: state.cash + action.payload };
		case "GET_CASH":
			return { ...state, cash: state.cash - action.payload };

		default:
			return state;
	}
};
