import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverWaitStatus = 'waiting for server creation...';
  serverCreationStatus = '';
  serverCreatedName = '';
  serverCreated = false;

  servers = ['test1', 'test2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server successfully created with name ' + this.serverCreatedName;
    this.serverCreated = true;
    this.servers.push(this.serverCreatedName);
    setTimeout(() => {
      this.serverCreated = false;
    }, 3000);

  }

  onUpdateServerName(event: any) {
    this.serverCreatedName = (<HTMLInputElement>event.target).value;
  }
}
