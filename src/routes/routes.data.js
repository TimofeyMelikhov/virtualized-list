import { App } from '../App'
import { AboutPost } from '../components/aboutPost/AboutPost'

export const routes = [
	{
		path: '/',
		component: App,
		isAuth: false
	},
	{
		path: '/post/:id',
		component: AboutPost,
		isAuth: false
	}
]
