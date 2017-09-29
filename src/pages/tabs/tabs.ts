import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MessagingPage } from '../messaging/messaging';
import { CalendarPage } from '../calendar/calendar';
import { GamingPage } from '../gaming/gaming';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagingPage;
  tab3Root = CalendarPage;
  tab4Root = GamingPage;

  constructor() {

  }
}
