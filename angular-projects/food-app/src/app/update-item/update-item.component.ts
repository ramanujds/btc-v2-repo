import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItemService } from '../food-item.service';
import { FoodItem, foodType } from '../FoodItem';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit , OnChanges{


  ngOnChanges(){
    this._route.params.subscribe(
      params=>{
        let itemCode=params['item-code'];
        this.foodItem=this._foodItemService.getFoodItem(itemCode);
        // this.itemCode=this.foodItem.itemCode;
        // this.itemName=this.foodItem.itemName;
        // this.price=this.foodItem.price;
        // this.isVeg=this.foodItem.isVeg;
        // this.type=this.foodItem.type;


        console.log(this.foodItem);
      })
  }

  foodItem:FoodItem=new FoodItem();

  itemName?:string;
  itemCode:number=0;
  price?:number;
  type?:string;
  isVeg?:foodType;

  constructor(private _route:ActivatedRoute, public _foodItemService:FoodItemService) { }

  ngOnInit(): void {

    this._route.params.subscribe(
      params=>{
        let itemCode=params['item-code'];
        this.itemCode=itemCode;
        this.foodItem=this._foodItemService.getFoodItem(itemCode);
        // this.itemCode=this.foodItem.itemCode;
        // this.itemName=this.foodItem.itemName;
        // this.price=this.foodItem.price;
        // this.isVeg=this.foodItem.isVeg;
        // this.type=this.foodItem.type;


        console.log(this.foodItem);
      }
    )


  }

  updateFoodItem(foodItem:FoodItem){
      this._foodItemService.updateFoodItem(foodItem);
  }

}
