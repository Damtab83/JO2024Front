import { Component, signal } from '@angular/core';
import { Header } from './layouts/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'jo2024-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('jo2024Front');
}
