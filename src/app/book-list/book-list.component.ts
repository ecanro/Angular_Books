import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './../api.service';
import { Link } from './../link-list/link-list.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookLinks: Link[];
  bookSubscription$: Subscription;

  constructor( private api: ApiService) { }

  ngOnInit(): void {

    console.log('books list was build');
    
    this.bookSubscription$ = this.api.getBooks().subscribe((book) => {
      const bookList = Object.values(book);

      console.log(bookList)

      this.bookLinks = bookList.map<Link>(book => {
        return {
          title: book.title,
          author: book.author,
          url: `/books/${book.id}`
        };
      });
    });
  }

  ngOnDestroy(): void {
    console.log('books-List was destroyed');
    this.bookSubscription$.unsubscribe();
  }

}
