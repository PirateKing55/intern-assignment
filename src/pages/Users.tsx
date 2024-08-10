import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getAllUsers } from '../services/getData'
import { Container, Card } from '../components'
import { FaAngleRight } from "react-icons/fa";

function Users() {
    const [users] = useState(getAllUsers())
    const navigate = useNavigate()
    return (
        <Container className='flex justify-center items-center'>
            <div className='w-40'>
                {users.map((user) => (
                    <Card key={user.userId}
                        className='group rounded bg-primary text-background p-4 m-4 cursor-pointer flex justify-end items-center gap-3 font-semibold text-xl'
                        onClick={() => navigate(`/users/${user.userId}/details/summary`)}
                    >
                        <p>{user.name[0].toUpperCase() + user.name.slice(1)}</p>
                        <span className='group-hover:translate-x-2 transform transition-transform duration-200 ease-in-out text-background'><FaAngleRight /></span>
                    </Card>
                ))}
            </div>
        </Container>
    )
}

export default Users
