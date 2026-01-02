import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem , IonLabel, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem, IonLabel, IonToggle]
})
export class SettingsPage {
  metric = true; 

  constructor() {
    const saved = localStorage.getItem('unitSystem');
    this.metric = saved ? saved === 'metric' : true; 
  }

  onToggleChange(value: boolean) {
     this.metric = value;
    localStorage.setItem('unitSystem', value ? 'metric' : 'us');
}
}
