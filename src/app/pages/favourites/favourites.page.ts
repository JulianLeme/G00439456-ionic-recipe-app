import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonItem, IonList } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonLabel, IonButton , IonItem , IonList]
})

export class FavouritesPage {

  favourites :any[]=[] ;

  constructor(private router: Router) { }
  ionViewWillEnter() {
    this.loadFavourites();
  }

  loadFavourites() {
    this.favourites = JSON.parse(localStorage.getItem('favourites') ?? '[]');
  }
  
  openDetails(id:number){
    this.router.navigate(['/details',id])
  }

 remove(id:number){
    this.favourites = this.favourites.filter((f: any)=> f.id !== id);
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }
}
