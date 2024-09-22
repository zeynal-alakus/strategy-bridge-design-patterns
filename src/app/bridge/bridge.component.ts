import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatToolbarRow} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-bridge',
  standalone: true,
  imports: [
    MatButton,
    MatToolbarRow,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './bridge.component.html',
  styles: ``
})
export class BridgeComponent {

}
