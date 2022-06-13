import { NextPage } from "next"
import Title from '../../ui/components/title/Title'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import useRecords from "../../data/hooks/useRecords"

const Records: NextPage = () => {
    const { donations } = useRecords()
    return (
        <>
            <Title
                title={'Donations'}
                subtitle={'See the list of adopted Pets'}
            />
            <TableContainer component={Paper}
                sx={{ maxWidth: 850, mx: 'auto', p: { xs: 2, md: 4 } }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>{'Amount($) / Month'}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {donations.map((donate) => (

                            <TableRow key={donate.id}>
                                <TableCell>{donate.pet.name}</TableCell>
                                <TableCell>{donate.email}</TableCell>
                                <TableCell align={'right'}>{donate.value}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Records