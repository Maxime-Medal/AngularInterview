import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(delay(1000));
}
