import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem , IonLabel, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem, IonLabel, IonToggle]
})
export class SettingsPage implements OnInit {
  metric: boolean = true; 

  constructor() {
    const saved = localStorage.getItem('unitSystem');
    this.metric = saved ? saved === 'metric' : true; 
  }

  onToggleChange(event :any) {
     this.metric = event.detail.checked;
    localStorage.setItem('unitSystem', this.metric ? 'metric' : 'us');
}

  ngOnInit() {
  }

}
