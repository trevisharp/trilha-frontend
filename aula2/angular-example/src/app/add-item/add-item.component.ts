import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'add-item',
  imports: [ FormsModule ],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  currentItem: string = "";

  @Input()
  placeholder: string = ""

  @Output()
  onSendInput = new EventEmitter<string>();

  textSended() {
    this.sendInput();
  }

  textTyped(ev: KeyboardEvent) {
    if (ev.key === "Enter") {
      this.sendInput();
    }
  }

  sendInput() {
    this.onSendInput.emit(this.currentItem);
    this.currentItem = "";
  }
}
