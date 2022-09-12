import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Cards', url: 'cards', icon: 'card' },
    { title: 'Buttons', url: 'buttons', icon: 'bowling-ball' },
    { title: 'Badges', url: 'badges', icon: 'archive' },
    { title: 'Datas', url: 'datas', icon: 'calendar' },
    { title: 'Inputs', url: 'inputs', icon: 'enter' },
    { title: 'Listas', url: 'lists', icon: 'list' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
