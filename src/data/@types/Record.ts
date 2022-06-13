import { Pet } from './Pet'

export interface Record {
    id: number;
    email: string;
    value: string;
    pet: Pet;
}