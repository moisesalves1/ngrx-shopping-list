import { Component } from '@angular/core';
import { IShoppingListItem } from './store/shopping-list.state';
import { Store, select } from '@ngrx/store';
import { getShoppingList } from './store/shopping-list.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // ingredients?: IShoppingListItem[] = [
  //   { name: "Apples", quantity: 5},
  //   { name: "Tomatoes", quantity: 10}
  // ]

  

  /**
   *
   */
  constructor(private store: Store) {
    
  }

  ingredients$ = this.store.pipe(
    select(getShoppingList)
  )
}
