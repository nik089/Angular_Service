import { Component } from '@angular/core';
import {NewserviceService} from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewserviceService]
})
export class AppComponent {
  title = 'myapp';
  text: string;
  constructor(private ns: NewserviceService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.text = this.ns.display();
  }

}
