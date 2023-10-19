import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookList: BehaviorSubject<string[]> = new BehaviorSubject(['📙', '📕', '📗', '📘']);
  public readonly bookList$: Observable<string[]> = this.bookList.asObservable();
}
