import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    constructor() {}

    getShoppingList(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }
    addIngredients(ingredients){
        this.ingredients.push(...ingredients)
    }
}