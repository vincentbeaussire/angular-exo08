import { Component } from '@angular/core';
import { EmojiPipe } from '../../utils/pipes/emoji-pipe';
import { Book } from '../../utils/types/book.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-librairie',
  imports: [EmojiPipe, FormsModule],
  templateUrl: './librairie.html',
  styleUrl: './librairie.css',
})
export class Librairie {
  books : Book[] = [
    {title: "Livre 1", author: "Auteur 1", isRead: true},
    {title: "Livre 2", author: "Auteur 1", isRead: false},
    {title: "Livre 3", author: "Auteur 2", isRead: true},
    {title: "Livre 4", author: "Auteur 1", isRead: false},
    {title: "Livre 5", author: "Auteur 2", isRead: true},
  ]

  newBook : Book = {
    title: "",
    author: "",
    isRead: false
  }

  toggleIsRead(book: Book) : void {
    book.isRead = !book.isRead
  }

  submitNewBook(): void {
    const book : Book = {
      ...this.newBook
    }

    this.books.push(book)
    this.newBook.title = ""
    this.newBook.author = ""
  }
}
