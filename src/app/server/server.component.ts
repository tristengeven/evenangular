import { Component } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverId: number = Math.floor(Math.random() * (9999 - 1000) + 1000);
  serverStatus = 'Offline';
  serverName = '';
  serverNickname = Math.floor(Math.random() * (500 - 0) + 0);
  detailsToggled = false;


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerName() {
    return this.serverName;
  }

  getColor() {
    return this.serverStatus === 'Offline' ? 'red' : 'green';
  }

  onToggleDetails() {
    this.detailsToggled = !this.detailsToggled;
    return this.detailsToggled;
  }
}
