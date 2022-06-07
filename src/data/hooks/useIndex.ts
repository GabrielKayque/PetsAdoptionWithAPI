import { useEffect, useState } from "react";
import { Pet } from '../@types/Pet'
import { ApiService as Api} from '../services/ApiService'
import {AxiosError } from 'axios'

const toGet = '/pets'
const toPost = '/pets/adoption'

export function useIndex() {
    const [petList, setPetList] = useState<Pet[]>([])

    const [selectedPet, setSelectedPet] = useState<Pet|null>(null),
        [email, setEmail] = useState(''),
        [amount, setAmount] = useState(''),
        [message, setMessage] = useState('');

    useEffect(() => {
        Api.get(toGet)
            .then((response) =>{
                setPetList(response.data);
            })
    }, [])

    useEffect(() => {
        if (selectedPet === null) cleanForm();
    }, [selectedPet])
    
    function adopt(){
         if(selectedPet === null) return
         if (validateDataAdoption()) { 
             Api.post(toPost, { 
                 pet_id: selectedPet.id, 
                 email,
                 value: amount, 
             }).then(() => { 
                 setSelectedPet(null)
                 setMessage(`You successfully adopted ${selectedPet.name}`)
             }).catch((error: AxiosError) => {
                 if(error instanceof AxiosError) setMessage(error.response?.data.message)
             })
         }else {
             setMessage('Complete all the fields correctly')
         }
    }

    function validateDataAdoption() {
        return email.length > 0 && amount.length > 0
    }

    function cleanForm() {
        setEmail('')
        setAmount('')
    }

    
    return ({
        petList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        amount,
        setAmount,
        message,
        setMessage,
        adopt
    }
  )
}
