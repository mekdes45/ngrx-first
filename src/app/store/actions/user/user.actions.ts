import { Post } from './../../../models/post';
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadPost = createAction(
  '[Post] Load Posts'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[] }>()
);
export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ data: Post[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const selectUser = createAction(
  '[User] select User',
  props<{ data: User }>(),
  
)
export const selectPost = createAction(
  '[Post] select Post',
  props<{ data: Post }>(),
)