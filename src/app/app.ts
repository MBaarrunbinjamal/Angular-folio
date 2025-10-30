import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Header } from './header/header';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Footer } from "./footer/footer";
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
declare var $: any;
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatSlideToggleModule, MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, Footer,About,Skills,Contact,Projects,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfoli');
}
