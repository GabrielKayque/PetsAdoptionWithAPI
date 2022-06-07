import { useState } from "react";
import { Pet } from '../@types/Pet'

export function useIndex() {
    const [petList, setPetList] = useState(
        [
            {
              id: 1,
              name: 'Bidu',
              description: ' loruaasdjifoajsdof jas dofi jsad fioja siofdj asi dfj aiosfdj iaosjd faisjd foias df asif jaiojf',
              photo: 'https://osasco.sp.gov.br/wp-content/uploads/2022/05/1k1a0509_ccexpress.jpeg',
    
            },
            {
              id: 2,
              name: 'Simbad',
              description: ' loruaasdjifoajsdof jas dofi jsad fioja siofdj asi dfj aiosfdj iaosjd faisjd foias df asif jaiojf',
              photo: 'https://osasco.sp.gov.br/wp-content/uploads/2022/05/1k1a0509_ccexpress.jpeg',
    
            }, 
            
          ]
    )

    const [selectedPet, setSelectedPet] = useState<Pet|null>(null),
        [email, setEmail] = useState(''),
        [amount, setAmount] = useState(''),
        [message, setMessage] = useState('asdfasdf')

  
    return ({
        petList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        amount,
        setAmount,
        message,
        setMessage
    }
  )
}
