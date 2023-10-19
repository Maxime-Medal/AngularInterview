import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from './services/book-service.service';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookList$: Observable<Book[]> | undefined;

  constructor(
    private _bookServive: BookService
  ) {
    this.bookList$ = this._bookServive.bookList$;
  }

}
