import { loadUsersSuccess, selectUser, selectPost } from './store/actions/user/user.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-first';

  constructor(
    private store:Store
  ) {
 
    this.store.dispatch(loadUsersSuccess({ data: [{ id: 9, name: 'Moe' }] }))
    this.store.dispatch(selectUser({
      data: {
        id
          : 9, name: "name"
      }
    }))
    this.store.dispatch(selectPost({data:{postId:9,title:'mekdes'}}))
  }
}

