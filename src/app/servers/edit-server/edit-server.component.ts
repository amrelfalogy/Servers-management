import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../services/servers.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string } = {
    id: 0,
    name: '',
    status: '',
  };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    const server = this.serversService.getServer(1);
    if (server) {
      this.server = server;
      this.serverName = server.name;
      this.serverStatus = server.status;
    } else {
      console.error('Server not found');
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
