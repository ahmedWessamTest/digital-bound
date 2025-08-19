import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { HeroComponent } from "../../features/home/components/hero/hero.component";
import { AboutComponent } from "../../features/home/components/about/about.component";
import { ReviewsComponent } from "../../features/home/components/reviews/reviews.component";
import { ContactComponent } from "../../features/home/components/contact/contact.component";
import { FooterComponent } from "../../core/components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, AboutComponent, ReviewsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
