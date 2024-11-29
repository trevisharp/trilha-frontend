import { Component } from '@angular/core';
import { AddItemComponent } from "../add-item/add-item.component";
import { Language, TranslatePipe } from '../translate.pipe';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'todo-list',
  imports: [ AddItemComponent, TranslatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  items: string[] = []
  lang: Language = 'en';

  addItem(ev: string) {
    this.items.push(ev);
  }

  alterarLang() {
    if (this.lang === 'en')
      this.lang = 'pt';
    else this.lang = 'en'
  }
}
