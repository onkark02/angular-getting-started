import { Component, OnInit} from "@angular/core"
import { IProduct } from "./product";

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[]=[{
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    }];

    toggleImage() : void{
        this.showImage = ! this.showImage;
    }

    ngOnInit(): void{
        console.log('OnInit implemented');
    }
    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart' ;
    }
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter ((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message: string): void{
        this.pageTitle = 'Product list: '+ message;
    }
}