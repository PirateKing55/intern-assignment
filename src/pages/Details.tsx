import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'
import { Container } from '../components'

function Details() {
    return (
        <Container className='flex gap-5'>
            <div className="flex-shrink-0 h-full sticky top-0">
                <Sidebar />
            </div>
            <div className="flex-grow overflow-y-auto">
                <Outlet />
            </div>
        </Container>
    )
}

export default Details
