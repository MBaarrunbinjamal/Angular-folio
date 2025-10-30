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
      // delay slightly for DOM to fully load
      setTimeout(() => this.animateText(), 200);
    }
  }

  animateText() {
    const fadeDuration = 800;  // must match CSS transition (0.8s)
    const holdDuration = 2000; // visible duration before next change

    const textElement = document.getElementById('animatedText');
    if (!textElement) return;

    const loop = () => {
      // Fade out
      textElement.classList.add('hidden');

      setTimeout(() => {
        // Update text
        this.index = (this.index + 1) % this.texts.length;
        textElement.textContent = this.texts[this.index];

        // Fade in
        textElement.classList.remove('hidden');

        // Wait before looping again
        setTimeout(loop, holdDuration + fadeDuration);
      }, fadeDuration);
    };

    // Start the infinite loop
    loop();
  }
}
