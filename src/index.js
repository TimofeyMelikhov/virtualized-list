import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { Router } from './routes/Router'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
)
