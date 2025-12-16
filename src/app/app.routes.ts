import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListaKorisnikaComponent } from './ispit/lista-korisnika/lista-korisnika.component';
import { DetaljiKorisnikaComponent } from './ispit/detalji-korisnika/detalji-korisnika.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'user/:id', component: UserDetailsComponent},
    {path: 'create-product', component: CreateProductComponent},
    {path: 'korisnik-list', component: ListaKorisnikaComponent},
    {path: 'korisnik-list/:id', component: DetaljiKorisnikaComponent},
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
    


//testni ispit 
// Priprema za ispit – Angular

// Opis zadatka
// Potrebno je napraviti Angular aplikaciju za upravljanje korisnicima i njihovom korpom (cart) koristeći DummyJSON API.
// Aplikacija treba imati dvije glavne stranice:
// 1.	Lista korisnika
// 2.	Detalji korisnika + njegova korpa
// Tehnički zahtjevi
// U aplikaciji OBAVEZNO koristiti:
// •	komponente
// •	servis
// •	modele (interface)
// •	rutiranje
// •	direktive
// •	GET i POST API pozive
// •	Bootstrap za osnovni izgled
// API podaci (DummyJSON)
// •	Svi korisnici:
// GET https://dummyjson.com/users
// •	Detalji korisnika:
// GET https://dummyjson.com/users/{id}
// •	Korpa korisnika:
// GET https://dummyjson.com/carts/user/{id}
// •	Dodavanje u korpu (simulacija):
// POST https://dummyjson.com/carts/add
// Struktura aplikacije
// 1. Komponente
// •	UsersComponent – prikaz liste korisnika
// •	UserDetailsComponent – detalji korisnika + cart
// •	NavbarComponent – navigacija
// 2. Servis – UserService
// Servis treba sadržavati sljedeće metode:
// •	getUsers() – dohvat svih korisnika
// •	getUserById(id: number) – dohvat jednog korisnika
// •	getUserCart(id: number) – dohvat korpe korisnika
// •	addToCart(data: any) – POST metoda
// 3. UsersComponent – zahtjevi
// •	Prikaz liste korisnika (ime, prezime, email)
// •	Dugme "Detalji" koje vodi na /user/:id
// •	Input za pretragu po imenu (koristiti ngModel + (input))
// 4. UserDetailsComponent – zahtjevi
// •	Dohvat korisnika na osnovu ID-a iz rute
// •	Prikaz osnovnih informacija o korisniku
// •	Dohvat i prikaz njegove korpe
// •	Prikaz proizvoda iz korpe
// •	Ako korisnik nema korpu, prikazati poruku
// •	Urediti iznose na proizvodima iz korpe da budu lijepo prikazani sa dvije decimale i sa valutom. 
// 5. Bootstrap zahtjevi
// Koristiti barem:
// •	container
// •	card
// •	btn btn-primary
// •	table ili list-group
// Dizajn ne mora biti kompleksan, ali mora biti pregledan.
// 6. Dodavanje u korpu (POST) - BONUS
// Na stranici detalja dodati formu:
// •	select za product(lista proizvoda)
// •	input za quantity
// •	dugme Dodaj u korpu
// Koristiti:
// •	ngModel
// •	(click) event
// •	POST metodu servisa
// 7. Github
// •	Projekat pushati na github
// Napomena: Fokus je na funkcionalnosti, pravilnoj strukturi Angular aplikacije i korištenju naučenih koncepata.
