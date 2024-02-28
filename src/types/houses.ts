export enum Houses {
  gryffindor = "Gryffindor",
  hufflepuff = "Hufflepuff",
  ravenclaw = "Ravenclaw",
  slytherin = "Slytherin",
}

export type THousesCharacters = Record<Houses, Array<Record<string, unknown[]>>>;
