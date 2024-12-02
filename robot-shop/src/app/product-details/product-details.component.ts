import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProducts } from '../catalog/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProducts;
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProducts) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  onBuyClick(product: IProducts) {
    this.buy.emit();
  }
}
