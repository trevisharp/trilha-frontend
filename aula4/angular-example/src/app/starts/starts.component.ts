import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-stars',
  imports: [ MatIconModule ],
  templateUrl: './starts.component.html',
  styleUrl: './starts.component.css'
})
export class StartsComponent implements OnInit, OnChanges {

  @Input() stars: number = 0;
  starsArray: number[] = []

  ngOnChanges(changes: SimpleChanges): void {
    this.updateStars();
  }

  ngOnInit(): void {
    this.updateStars();
  }

  updateStars() {
    this.starsArray = [];
    for (let i = 0; i < this.stars; i++) {
      this.starsArray.push(i);
    }
  }

}