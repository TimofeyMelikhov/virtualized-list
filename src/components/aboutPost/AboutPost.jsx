import { useParams } from 'react-router-dom'

import { useGetPostInfoQuery } from '../../redux/listApi'
import { Layout } from '../layout/Layout'

export const AboutPost = () => {
	const { id } = useParams()

	const { data, isLoading, isError } = useGetPostInfoQuery(id)

	if (isLoading) {
		return <Layout>Loading...</Layout>
	}
	if (isError) return <Layout>Error...</Layout>

	return (
		<Layout>
			<div>AboutPost {id}</div>
			<div>
				<h2>{data.title}</h2>
				<p>{data.body}</p>
			</div>
		</Layout>
	)
}
