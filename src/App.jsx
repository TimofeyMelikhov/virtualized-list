import { memo, useCallback, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import AutoSizer from 'react-virtualized-auto-sizer'
import { VariableSizeList } from 'react-window'

import { ListItem } from './components/listItem/ListItem'

import { useGetAllPostsQuery } from './redux/listApi'
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

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const itemSize = isMobile ? 270 : 120

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
						itemSize={index => itemSize}
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
