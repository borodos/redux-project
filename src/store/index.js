import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "../store/customerReducer";
import { cashReducer } from "../store/cashReducer";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cashReducer,
	customerReducer,
});

// -- Хранилище состояний. Первый параметр - релюьсеры. Второй параметр - middleware
export const store = configureStore(
	{ reducer: rootReducer },
	composeWithDevTools(applyMiddleware(thunk))
);
