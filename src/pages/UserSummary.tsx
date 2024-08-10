import React from 'react'
import { useParams } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";
import { getUserById } from '../services/getData';
import { Container, Card, PieChartComponent, SubHeading } from '../components';
import { User } from '../data/types';

function UserSummary() {
    const { userId } = useParams();
    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        const fetchedUser = getUserById(Number(userId));
        if (fetchedUser !== undefined) {
            setUser(fetchedUser);
        }
    }, [userId]);

    if (!user) {
        return null;
    }

    return (
        <Container className='flex flex-col justify-center items-center gap-5'>
            <Card className='w-full flex flex-col justify-center items-center'>
                <SubHeading label='Current Lecture' />
                <p className='text-primaryText text-lg font-normal'>{user?.summary.currentLesson.lesson}</p>
                <ProgressBar
                    // style={{ width: '80%' }}
                    className='w-4/5'
                    // width='80%'
                    height='2rem'
                    completed={user?.summary.currentLesson.lessonProgress}
                    bgColor={'#fe5b5f'}
                    animateOnRender={true}
                />
            </Card>
            <Card className='w-full flex flex-col justify-center items-center'>
                <SubHeading label='Hours Spent' className='mb-14' />
                <PieChartComponent userData={user?.summary.timeSpent} />
            </Card>
        </Container>
    )
}

export default UserSummary
