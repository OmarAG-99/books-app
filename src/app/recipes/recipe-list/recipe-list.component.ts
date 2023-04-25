import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('Test Recipe 01', 'This is a test of Recipe 01', 'https://img.freepik.com/premium-photo/open-recipe-book-with-fresh-herbs-spices_87394-45.jpg'),
    new Recipe('Test Recipe 02', 'This is a test of Recipe 02', 'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe.jpg'),
    new Recipe('Test Recipe 03', 'This is a test of Recipe 03', 'https://food-images.files.bbci.co.uk/food/recipes/breadandbutterpuddin_85936_16x9.jpg'),
    new Recipe('Test Recipe 04', 'This is a test of Recipe 04', 'https://theislandnow.com/wp-content/uploads/2022/07/istockphoto-1320857678-170667a.jpg'),
  ];

  constructor() { }

  ngOnInit(): void { }
}
