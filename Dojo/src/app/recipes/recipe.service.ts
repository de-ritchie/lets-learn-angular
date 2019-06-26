import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

@Injectable()

export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
            'Test recipe 1', 
            'THis is a test recipe 1', 
            'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bread', 1)
            ]
        ),
        new Recipe(
            'Test recipe 2', 
            'THis is a test recipe 2', 
            'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg',
            [
                new Ingredient('Frenc fries', 10),
                new Ingredient('Bread', 1)
            ]
        ),
        new Recipe('Test recipe 3', 
            'THis is a test recipe 3', 
            'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bun', 1)
            ]
        )
    ]

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        //to get only the copy of the array
        return this.recipes.slice();
    }
    addToIngredients(ingredients){
        this.shoppingListService.addIngredients(ingredients);
    }
}