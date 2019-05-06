import { Component, OnInit } from '@angular/core';
import { PlayerOne } from '../playerone';
import { Room } from '../room';
import { ROOMS } from '../mock-rooms';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {

  rooms: Room[];

  playerOne: PlayerOne = {
    name: "IBMer",
    weapon: false,
    flashlight: false,
    map: false
  }

  constructor(private messageService: MessageService) { }

  ngOnInit() {

  }

  start(parametro: number) {
    // this.playerOne.name = "Danilo";
    this.getRooms(parametro);
  }

  getRooms(parametro: number): void {
    this.messageService.getRooms(parametro)
      .subscribe(rooms => {
        this.rooms = rooms['response'];
        console.log(this.rooms);
      });
  }
}
