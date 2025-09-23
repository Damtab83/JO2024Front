import { Component, signal } from '@angular/core';
import { Header } from './layouts/header/header';

@Component({
  selector: 'jo2024-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('jo2024Front');
}
