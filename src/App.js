import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
	// -- Чтобы изменить состояние, нужен dispatch. Для этого используем хук useDispatch()
	const dispatch = useDispatch();

	// -- Чтобы получить состояние, нужно воспользоваться хуком useSelector()
	// -- Параметром он принимает стрелочную функцию, а это функция принимает в качестве параметра состояние
	const cash = useSelector((state) => state.cash);

	const addCash = (cash) => {
		dispatch({ type: "ADD_CASH", payload: cash });
	};

	const getCash = (cash) => {
		dispatch({ type: "GET_CASH", payload: cash });
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
			</div>
		</div>
	);
}

export default App;
