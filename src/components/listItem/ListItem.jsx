import { Link, useNavigate } from 'react-router-dom'
import styles from './listItem.module.scss'
import { Button } from '../ui/button/Button'

export const ListItem = ({ title, body, id }) => {
	const navigate = useNavigate()

	const maxLength = 160

	const trancatedText = body.slice(0, maxLength)

	const clickHandler = () => {
		navigate(`/post/${id}`)
	}

	return (
		<div className={styles.item}>
			<Link to={`/post/${id}`}>
				<h2>
					{id}) {title}
				</h2>
			</Link>
			<p>
				{trancatedText}
				{body.length > maxLength && '...'}
			</p>
			{body.length > maxLength && (
				<Button clickHandler={clickHandler}>Просмотр</Button>
			)}
		</div>
	)
}
