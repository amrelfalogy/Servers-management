import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../services/servers.service';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string } = {
    id: 0,
    name: '',
    status: '',
  };

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    const server = this.serversService.getServer(1);
    if (server) {
      this.server = server;
    } else {
      console.error('Server not found');
    }
  }
}
