import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
	addCustomerAction,
	addManyCustomersAction,
	removeCustomerAction,
} from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
	// -- Чтобы изменить состояние, нужен dispatch. Для этого используем хук useDispatch()
	const dispatch = useDispatch();

	// -- Чтобы получить состояние, нужно воспользоваться хуком useSelector()
	// -- Параметром он принимает стрелочную функцию, а это функция принимает в качестве параметра состояние
	const cash = useSelector((store) => store.cashReducer.cash);
	const customers = useSelector((store) => store.customerReducer.customers);

	const addCash = (cash) => {
		console.log("dispatch: ", dispatch({ type: "ADD_CASH", payload: cash }));
	};

	const getCash = (cash) => {
		dispatch({ type: "GET_CASH", payload: cash });
	};

	// -- Рефакторинг кода
	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now(),
		};
		dispatch(addCustomerAction(customer));
	};

	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id));
	};

	return (
		<div className="App">
			<div style={{ display: "flex" }}>
				<div style={{ fontSize: "3rem" }}>{cash}</div>
				<button onClick={() => addCash(Number(prompt()))}>
					Пополнить счет
				</button>
				<button onClick={() => getCash(Number(prompt()))}>
					Снять со счета
				</button>
				<button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
				<button onClick={() => dispatch(fetchCustomers())}>
					Получить клиентов из базы
				</button>
			</div>
			{customers.length > 0
				? customers.map((value, index, array) => (
						<div
							style={{
								fontSize: "2rem",
								border: "1px solid black",
								padding: "10px",
								marginTop: 5,
							}}
							onClick={() => removeCustomer(value)}
						>
							{value.name}
						</div>
				  ))
				: "Клиенты отсутсвуют"}
		</div>
	);
}

export default App;
