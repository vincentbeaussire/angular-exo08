export type Attack = {
    nom : string
    description : string
    degats : number
    type : string
}

export type PokemonType = {
    nom : string
    description : string
    types : string[]
    attacks : Attack[]
}