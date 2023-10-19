import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from './services/book-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookList$: Observable<string[]> | undefined;

  constructor(
    private _bookServive: BookService
  ) {
    this.bookList$ = this._bookServive.bookList$;
  }

}
