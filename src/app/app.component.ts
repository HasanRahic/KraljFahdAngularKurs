import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ZadatakComponent } from './components/zadatak/zadatak.component';
import { Zadatak2Component } from "./components/zadatak2/zadatak2.component";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZadatakComponent, Zadatak2Component, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KraljFahdAngularKurs';
}
