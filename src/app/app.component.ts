import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng-lts/api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}
  
  ngOnInit() {
  		//console.log(this.primengConfig.ripple)
        this.primengConfig.ripple = true;
    }
}
