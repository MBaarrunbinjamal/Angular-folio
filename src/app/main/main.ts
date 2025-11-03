import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class Main implements OnInit {
  texts = [
    'I’m Muhammad Baarrun Bin Jamal',
    'I’m a Developer',
    'I’m a Frontend Designer',
    'I’m a SEO Expert',
    'I’m a Fullstack Developer'
  ];

  index = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.animateText(), 300);
    }
  }

  animateText() {
    const fadeDuration = 800;   // match with CSS transition (0.8s)
    const holdDuration = 2000;  // how long text stays visible
    const textElement = document.getElementById('animatedText');
    if (!textElement) return;

    // Start with first text
    textElement.textContent = this.texts[this.index];
    textElement.classList.remove('hidden');

    // Infinite loop using setInterval
    setInterval(() => {
      // Fade out
      textElement.classList.add('hidden');

      // After fade-out, update and fade-in
      setTimeout(() => {
        this.index = (this.index + 1) % this.texts.length;
        textElement.textContent = this.texts[this.index];
        textElement.classList.remove('hidden');
      }, fadeDuration);
    }, fadeDuration + holdDuration);
  }
}
