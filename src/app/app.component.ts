import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(delay(1000));
}
