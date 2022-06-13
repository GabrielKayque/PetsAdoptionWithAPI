import { useState } from 'react'
import { ApiService as Api, ApiService } from '../services/ApiService'
import { AxiosError } from 'axios'

export default function useRegister() {
    const [name, setName] = useState(''),
        [story, setStory] = useState(''),
        [photo, setPhoto] = useState(''),
        [message, setMessage] = useState('')

    function register() {
        if (validateForm()) {
            ApiService.post('/pets', {
                name,
                description: story,
                photo
            }).then(() => {
                cleanForm()
                setMessage('You successfully registered a PET')
                return
            }).catch((error: AxiosError) => {
                console.log(error)
                if (error instanceof AxiosError) {
                    setMessage(error.message)
                }
            })
        }
        return setMessage('Please complete all fields')
    }

    function validateForm() {
        return name.length > 2 && story.length > 20 && photo.length > 5

    }

    function cleanForm() {
        setName('')
        setStory('')
        setPhoto('')
    }


    return {
        name,
        story,
        photo,
        setName,
        setStory,
        setPhoto,
        register,
        message,
        setMessage
    }

}
