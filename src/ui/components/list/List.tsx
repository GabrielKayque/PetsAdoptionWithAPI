import {
    ListStyled,
    ItemList,
    Photo,
    Info,
    Name,
    Description
} from './List.style';
import { Button } from '@mui/material'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function List({ pets, onSelect}: ListProps) {
    const textMaxLength = 200;

  return (
      <ListStyled>
          {pets.map((pet) => (
              <ItemList key={pet.id}>
                  <Photo src={pet.photo} />
                  <Info>
                      <Name>{pet.name}</Name>
                      <Description>{TextService.limitText(pet.description, textMaxLength)}</Description>
                      <Button variant={'contained'} fullWidth onClick={() => onSelect(pet)}>Adopt</Button>
                  </Info>
              </ItemList>
          ))}
      </ListStyled>
  )
}
