const defaultState = {
	customers: [],
};

// -- Хорошей практикой считается выносить названия action'ов в отдельные константы
const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MANY_CUSTOMERS:
			return { ...state, customers: [...state.customers, ...action.payload] };
		case ADD_CUSTOMER:
			// -- Возвращаем новый объект, в котором разворачиваем старое состояние. Полю customers
			// присваиваем новый массив, в котором разворачиваем уже сущетсвующий массив customres и к нему в конец добавляем объект,
			// передаваемый через action
			return { ...state, customers: [...state.customers, action.payload] };
		case DELETE_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter(
					(customer) => customer.id !== action.payload
				),
			};

		default:
			return state;
	}
};

export const addManyCustomersAction = (payload) => ({
	type: ADD_MANY_CUSTOMERS,
	payload,
});
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({
	type: DELETE_CUSTOMER,
	payload,
});
