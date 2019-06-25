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

  getServerStatus() {

    if (this.serverId % 2 === 0) {
      this.serverStatus = 'Online';
    }
    return this.serverStatus;
  }
}
