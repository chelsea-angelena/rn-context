import createDataContext from './createDataContext';
import jsonserver from '../api/jsonserver';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'get_blogposts':
			return action.payload;
		case 'edit_blogpost':
			return state.map((blogPost) => {
				return blogPost.id === action.payload.id
					? action.payload
					: blogPost;
			});
		case 'delete_blogpost':
			return state.filter((blogPost) => blogPost.id !== action.payload);
		default:
			return state;
	}
};

// const addBlogPost = (dispatch) => {
// 	return () => {
// 		dispatch({ type: 'add_blogpost' });
// 	};
// };
const getBlogPosts = (dispatch) => {
	return async () => {
		//concat .get with the base URL by importing it
		const response = await jsonserver.get('/blogposts');
		//blogposts = repsonse.data ==== []
		dispatch({ type: 'get_blogposts', payload: response.data });
	};
};

const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		await jsonserver.post('/blogposts', { title, content });
		if (callback) {
			callback();
		}
	};
};
// const addBlogPost = (dispatch) => {
// 	return async  (title, content, callback) => {
//     try{
// await axios.post(API_URL, title, content)
// 		dispatch({
// 			type: 'add_blogpost',
// 			payload: { title, content },
// 		});
//   callback();
//     }catch (e){
//   };
// };
const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await jsonserver.delete(`/blogposts/${id}`);
		dispatch({ type: 'delete_blogpost', payload: id });
	};
};
const editBlogPost = (dispatch) => {
	return async (id, title, content, callback) => {
		await jsonserver.put(`/blogposts/${id}`, { title, content });
		dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
		if (callback) {
			callback();
		}
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
	[]
);

//third arg (empty array) is initial state
