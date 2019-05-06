import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {

  room: Room;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  start(parametro: number) {
    this.getRooms(parametro);
  }

  getRooms(parametro: number): void {
    this.messageService.getRooms(parametro)
      .subscribe(rooms => {
        this.room = rooms;
      });
  }
}
