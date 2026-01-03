import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonItem , IonLabel, IonButtons, IonButton, IonIcon, IonInput, IonThumbnail, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import { heart, settings } from 'ionicons/icons';
import {Router, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone : true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonItem, IonLabel, CommonModule, IonButtons, IonButton, IonIcon,
  RouterLink, IonInput, FormsModule , IonThumbnail,IonGrid, IonRow, IonCol],
})

export class HomePage {
studentNumber: string = 'G00439456';
ingredients: string = ''; //Stores the ingredients typed by the user
recipes: any[] = []; //Stores list of recipes returned  by API 
apikey: string = '70759a4f7911402abcc53d3c51d3b759';

constructor(private http: HttpClient, private router:Router) {
addIcons({ heart, settings });
}

searchRecipes() { //Search recipes using the Spoonacular API
  const q = this.ingredients.trim();
  if (!q) return; //Do not search if input is empty

  const url =
    'https://api.spoonacular.com/recipes/complexSearch' +
    '?query=' + encodeURIComponent(q) +
    '&number=5' +
    '&apiKey=' + this.apikey;

  this.http.get<any>(url).subscribe(res => {
    this.recipes = res?.results ?? [];
  }); //GET recipes from the API
}

openDetails(id: number) {
    this.router.navigate(['/details', id]);
}} //Navigates to the Details page of recipe
