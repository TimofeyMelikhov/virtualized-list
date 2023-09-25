import cn from 'clsx'

import styles from './button.module.scss'

export const Button = ({ children, clickHandler, size = 'xl' }) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}
