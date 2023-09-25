import { AboutPost } from '../components/aboutPost/AboutPost'

import { App } from '../App'

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
