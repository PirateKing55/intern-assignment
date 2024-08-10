import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'
import { Container } from '../components'

function Details() {
    return (
        <Container className='flex gap-5'>
            <Sidebar />
            <Outlet />
        </Container>
    )
}

export default Details
