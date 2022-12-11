import { Component, Input, OnInit } from '@angular/core';
import { CartService } from "src/app/cart/cart.service";
import { Game } from '../../types/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: Game = {} as Game;

  isInCart: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  addToCart() {
    this.isInCart = true;
    this.cartService.addToFirestore(this.game);
  }

  removeFromCart() {
    this.isInCart = false;
    //this.cartService.remove(this.game);
  }

}
