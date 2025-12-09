import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'user/:id', component: UserDetailsComponent},
    {path: '**', component: NotFoundComponent},
];


// Susret 7: Zadaci
// Zadatak 1: 
// •	Napraviti 3 stranice: Home, About, Contact i povezati ih rutama.
// •	Dodati navigacijski meni pomoću routerLink direktive.
// •	Napraviti 404 stranicu i dodati wildcard rutu.
// •	Napraviti rutu sa parametrima (npr. /user/:id) i prikazati ID na ekranu.
// •	Navigirati na rutu preko TypeScript metode.
// •	Napraviti komponentu FooterComponent i ubaciti je u root layout.
// •	Napraviti omot (wrapper) layout sa headerom, footerom i <router-outlet>.
// •	Dodati barem minimalne stilove.
// Na Home stranici uraditi sljedeće:
// •	Prikazati neki naslov koristeći interpolaciju.
// •	Napraviti dugme koje mijenja tekst kada se klikne (event binding: (click)).
// •	Napraviti input polje i ispod njega prikazivati unesenu vrijednost u realnom vremenu ([(ngModel)]).
// •	Napraviti listu (niz stringova) i prikazati je koristeći *ngFor.
// •	Napraviti uslovni prikaz (*ngIf) koji se pali/gasi klikom.
// •	Dodati ngClass i ngStyle za dinamičke stilove.
    