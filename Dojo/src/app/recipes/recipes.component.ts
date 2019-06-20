import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe = null;
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe){
    // console.log('onSelectedRecipe', recipe);
    this.recipe = recipe;
  }

}
