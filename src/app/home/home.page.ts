import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonItem , IonLabel, IonButtons, IonButton, IonIcon} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import { heart, settings } from 'ionicons/icons';
import {RouterLink} from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone : true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonItem, IonLabel, CommonModule, IonButtons, IonButton, IonIcon,
  RouterLink],
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
    constructor() {
    // Student comment: register icons used on the Home page toolbar
    addIcons({ heart, settings });
}}
