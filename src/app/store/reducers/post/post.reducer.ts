import { selectPost, loadPostsSuccess } from './../../actions/user/user.actions';
import { Post } from './../../../models/post';
import { Action, createReducer, on } from '@ngrx/store';


export const postFeatureKey = 'post';

export interface State {
  posts: Post[];
  selectedPost: null | Post;

}

export const initialState: State = {
  posts: [],
  selectedPost: null

};


export const reducer = createReducer<State>(
  initialState,
  on(loadPostsSuccess, (state, action) => {
    return { ...state, users: action.data }
  }),
  on(selectPost, (state,action)=>{
    return { ...state, selectedUser: action.data }
  })
)