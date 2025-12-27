import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonItem , IonLabel } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone : true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonItem, IonLabel, CommonModule],
})
export class HomePage {
recipes = [
    {
      name: 'Sushi',
      description: 'Classic Japanese'
    },
    {
      name: 'Lasagna',
      description: 'Classic Italian'
    }
  ];




  constructor() {}
}
