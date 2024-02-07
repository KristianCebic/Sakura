import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
    <div><app-navbar></app-navbar></div>
    <div class="titel"><h1 class="fontRaleway">SAKURA RAMEN</h1><h2 class="fontRaleway">BEST RAMEN IN TOWN</h2></div>
    </section>
    `,
    styleUrls:['./landingPage.component.scss']
})
export class LandingPageComponent {}