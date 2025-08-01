import { Component, OnInit } from '@angular/core';
import { ApiService, Pokemon } from '../../services/api-service';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-pokemon-viewer',
  templateUrl: './pokemon-viewer.html',
  imports: [
    UpperCasePipe,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./pokemon-viewer.css']
})
export class PokemonViewer implements OnInit {
  pokemon?: Pokemon;
  currentId: number = 1;
  maxId: number = 150;

  loading: boolean = false;
  error: string = '';

  constructor(private pokeService: ApiService) {}

  ngOnInit(): void {
    this.loadPokemon(this.currentId);
  }

  loadPokemon(id: number) {
    if (id < 1 || id > this.maxId) return;

    this.loading = true;
    this.error = '';
    this.pokeService.getPokemonById(id).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.currentId = data.id;
        this.loading = false;
      },
      error: () => {
        this.error = 'Pokemon not found.';
        this.loading = false;
      }
    });
  }

  searchPokemonById(value: string) {
    const id = Number(value);
    if (!isNaN(id)) {
      this.loadPokemon(id);
    }
  }

  previousPokemon() {
    if (this.currentId > 1) {
      this.loadPokemon(this.currentId - 1);
    }
  }

  nextPokemon() {
    if (this.currentId < this.maxId) {
      this.loadPokemon(this.currentId + 1);
    }
  }
}
