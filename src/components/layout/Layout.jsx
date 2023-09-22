import { useLocation } from 'react-router-dom'
import { Header } from '../header/Header'
import styles from './layout.module.scss'

export const Layout = ({ children }) => {
	const { pathname } = useLocation()

	return (
		<section className={styles.wrapper}>
			{pathname !== '/' && <Header />}
			{children}
		</section>
	)
}
