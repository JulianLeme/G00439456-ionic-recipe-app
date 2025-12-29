import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,CommonModule, IonContent, IonButton, IonList, IonItem, IonLabel  ],
})
export class DetailsPage {
  recipe: any;
  apiKey = '70759a4f7911402abcc53d3c51d3b759';

  constructor(
    private route: ActivatedRoute,private http: HttpClient) {
    const id = this.route.snapshot.paramMap.get('id');
        if (id) {
      this.loadRecipe(id);
    }
  }

  loadRecipe(id: string) {
    const url =
      `https://api.spoonacular.com/recipes/${id}/information` +
      `?apiKey=${this.apiKey}`;

    this.http.get<any>(url).subscribe(res => {
      this.recipe = res;
      });
  }
    
  addToFavourites() {
    const favs = JSON.parse(localStorage.getItem('favourites') ?? '[]');
    favs.push({
      id: this.recipe.id,
      title: this.recipe.title
    });
    localStorage.setItem('favourites', JSON.stringify(favs));
  }
}