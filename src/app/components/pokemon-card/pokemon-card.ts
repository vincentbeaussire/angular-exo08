import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonType } from '../../utils/types/pokemon.type';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {
  @Input() pokemon!: PokemonType

  @Output() deleteEvent = new EventEmitter<PokemonType>()

  deletePokemon(){
    this.deleteEvent.emit(this.pokemon)
  }

}
