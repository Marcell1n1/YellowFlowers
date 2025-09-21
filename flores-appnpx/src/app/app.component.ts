import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloresComponent } from "./flores/flores.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FloresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flores-appnpx';
}
