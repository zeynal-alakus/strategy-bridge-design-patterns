import { Component } from '@angular/core';
import {MatToolbarRow} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-strategy',
  standalone: true,
  imports: [
    MatToolbarRow,
    MatButton,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './strategy.component.html',
})
export class StrategyComponent {

}
