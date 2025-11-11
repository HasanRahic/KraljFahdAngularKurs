import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZadatakComponent } from './components/zadatak/zadatak.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZadatakComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KraljFahdAngularKurs';
}
