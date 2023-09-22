import styles from './header.module.scss'
import { IoMdArrowBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

export const Header = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname !== '/' && (
				<button onClick={() => navigate('/')}>
					<IoMdArrowBack />
				</button>
			)}
		</header>
	)
}
