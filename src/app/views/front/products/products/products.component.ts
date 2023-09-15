import { Component } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  dataProducts: any

  constructor(private ds: DataService) {
    this.ds.getAllProducts().subscribe(data => {
      console.log(data)
      this.dataProducts = data
    })
  }

}
