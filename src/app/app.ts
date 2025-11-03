import { Component, Inject, PLATFORM_ID, signal, isDevMode } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    Footer,
    About,
    Skills,
    Contact,
    Projects,
    RouterModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfoli');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId) && !isDevMode()) {
      // only run these in production builds
      document.addEventListener('contextmenu', (event) => event.preventDefault());
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) e.preventDefault();
        if (e.key === 'F12') e.preventDefault();
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') e.preventDefault();
      });
    }
  }
}
