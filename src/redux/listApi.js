import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const listApi = createApi({
	reducerPath: 'listApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
		prepareHeaders: headers => {
			headers.set('Content-Type', 'application/json')
			return headers
		}
	}),
	endpoints: build => ({
		getAllPosts: build.query({
			query: page => ({
				url: '/posts',
				params: {
					_limit: 15,
					_page: page
				}
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName
			},
			merge: (currentCache, newItems) => {
				currentCache.posts.push(...newItems.posts)
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg
			},
			transformResponse(response, meta) {
				return {
					posts: response,
					totalCount: Number(meta.response.headers.get('X-Total-Count'))
				}
			}
		}),
		getPostInfo: build.query({
			query: id => ({
				url: `/posts/${id}`
			})
		})
	})
})

export const { useGetAllPostsQuery, useGetPostInfoQuery } = listApi
