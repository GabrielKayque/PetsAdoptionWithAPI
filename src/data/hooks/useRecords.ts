import { useState, useEffect } from "react"
import { ApiService as Api } from "../services/ApiService"
import { Record } from '../@types/Record'

export default function useRecords() {
    const [donations, setDonations] = useState<Record[]>([])

    useEffect(() => {
        Api.get('/pets/adoption').then((response) => {
            setDonations(response.data)
        })
    }, [])

    return {
        donations
    }
}