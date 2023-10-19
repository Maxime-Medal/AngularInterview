import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../services/book-service.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  get title() { return this.bookForm.get('title') }
  get cover() { return this.bookForm.get('cover') }
  get author_firstname() { return this.bookForm.get('author_firstname') }
  get author_lastnameauthor_lastname() { return this.bookForm.get('author_lastnameauthor_lastname') }
  get pageCount() { return this.bookForm.get('pageCount') }
  get releaseDate() { return this.bookForm.get('releaseDate') }

  bookForm = this._fb.group({
    title: ["", Validators.required],
    cover: ["", Validators.required],
    author_firstname: ["", Validators.required],
    author_lastname: ["", Validators.required],
    pageCount: [0, Validators.required],
    releaseDate: ["", Validators.required]
  })

  constructor(
    private _fb: FormBuilder,
    private _bookService: BookService
  ) {
  }

  onSubmit() {
    const book = this.bookForm.value;
    const newBook: Book = {
      title: this.title?.value ?? "",
      cover: this.cover?.value ?? "",
      author_firstname: this.author_firstname?.value ?? "",
      author_lastname: this.author_firstname?.value ?? "",
      pageCount: this.pageCount?.value ?? 0,
      releaseDate: this.releaseDate?.value ?? ""
    }
    this._bookService.addBook(newBook)
    this.bookForm.reset(); // remise à zero du formulaire

  };

}



// export interface Book {
//   title: string;
//   cover: string;
//   author_firstname: string;
//   author_lastname: string;
//   pageCount: number;
//   releaseDate: string;
// }
