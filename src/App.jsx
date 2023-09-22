import { useGetAllPostsQuery } from './redux/listApi'
import { ListItem } from './components/listItem/ListItem'
import { useState, memo, useCallback } from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { VariableSizeList } from 'react-window'
import './styles/index.scss'

export const App = () => {
	const [page, setPage] = useState(1)
	const {
		data = [],
		isLoading,
		isError,
		isFetching
	} = useGetAllPostsQuery(page)

	const handleItemsRendered = useCallback(
		({ visibleStartIndex, visibleStopIndex }) => {
			if (
				visibleStopIndex === data.posts.length - 1 &&
				data.posts.length < data.totalCount
			) {
				if (!isFetching) {
					setPage(page + 1)
				}
			}
		},
		[data, isFetching, page]
	)

	const MemoListItem = memo(ListItem)

	if (isLoading) {
		return <h2>Loading...</h2>
	}
	if (isError) return <h2>Error...</h2>

	return (
		<div className='containerForVirtualList'>
			<AutoSizer>
				{({ width, height }) => (
					<VariableSizeList
						width={width}
						height={height}
						itemCount={data.posts.length}
						itemSize={() => 120}
						overscanCount={5}
						onItemsRendered={handleItemsRendered}
					>
						{({ index, style }) => (
							<div style={style}>
								<MemoListItem
									key={data.posts[index].id}
									id={data.posts[index].id}
									title={data.posts[index].title}
									body={data.posts[index].body}
								/>
							</div>
						)}
					</VariableSizeList>
				)}
			</AutoSizer>
		</div>
	)
}
