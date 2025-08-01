import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';
import { PokemonType } from '../../utils/types/pokemon.type';


@Component({
  selector: 'app-pokemon',
  imports: [ReactiveFormsModule, PokemonCard],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class Pokemon {
  pokeForm : FormGroup = new FormGroup({
    nom : new FormControl("", [Validators.required]),
    description : new FormControl(""),
    types: new FormControl([]),
    attacks: new FormArray([
      new FormGroup({
        nom : new FormControl(""),
        description : new FormControl(""),
        degats : new FormControl(0),
        type : new FormControl("")
      })
    ])
  }, [Validators.required])

  get attacks() {
    return this.pokeForm.controls["attacks"] as FormArray
  }

  addAttack() : void {
    this.attacks.push(new FormGroup({
      nom : new FormControl(""),
      description : new FormControl(""),
      degats : new FormControl(0),
      type : new FormControl("")
    }))
  }

  submitPokemon() : void {
    console.log(this.pokeForm);
    console.log(this.pokeForm.value);
  }

  types: string[] = ["eau", "feu", "plante", "electrique", "normal", "dragon", "vol", "glace", "normal", "insecte", "roche", "spectre", "poison" ,"acier", "tenebre", "fée", "psy", "combat"]

  pokemonList: PokemonType[] = [
    {
      nom: "Dracaufeu",
      description: "Un Pokémon volant et cracheur de feu.",
      types: ["feu", "vol"],
      attacks: [
        {
          nom: "Lance-Flammes",
          description: "Projette des flammes intenses pour brûler l'ennemi.",
          degats: 90,
          type: "feu"
        },
        {
          nom: "Danse Draco",
          description: "Augmente l'attaque et la vitesse.",
          degats: 0,
          type: "feu"
        }
      ]
    },
    {
      nom: "Tortank",
      description: "Un Pokémon tortue doté de canons à eau sur son dos.",
      types: ["eau"],
      attacks: [
        {
          nom: "Hydrocanon",
          description: "Lance un puissant jet d'eau pour submerger l'adversaire.",
          degats: 110,
          type: "eau"
        },
        {
          nom: "Ébullition",
          description: "Inflige des brûlures tout en attaquant.",
          degats: 80,
          type: "eau"
        }
      ]
    },
    {
      nom: "Gardevoir",
      description: "Un Pokémon capable de voir l'avenir et de protéger son dresseur.",
      types: ["psy", "fee"],
      attacks: [
        {
          nom: "Choc Psy",
          description: "Inflige des dégâts en utilisant la force mentale.",
          degats: 80,
          type: "psy"
        },
        {
          nom: "Pouvoir Lunaire",
          description: "Utilise la lumière de la lune pour infliger de gros dégâts.",
          degats: 95,
          type: "psy"
        }
      ]
    }
  ];

  deletePokemon(pokemon : PokemonType): void {
    let index = this.pokemonList.indexOf(pokemon)
    this.pokemonList.splice(index, 1)
  }
}
