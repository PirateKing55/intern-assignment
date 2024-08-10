import React from 'react'
import { PieChartComponent, LineChartComponent, BarChartComponent, Container, Card, SubHeading } from '../components'
import { useParams } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";
import { getUserById } from '../services/getData';
import { User } from '../data/types';

function UserReport() {
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
        <Container className='flex flex-col items-center'>
            <Card className='flex flex-col gap-4 justify-center'>
                <Card className='flex gap-10 flex-wrap'>
                    <Card className='flex flex-col w-[300px]'>
                        <SubHeading label='Total time spent' />
                        <p className='text-primaryText text-lg font-semibold'>{user?.detailedReport.hoursSpent.totalHours} hrs</p>
                        <Card className='mt-2'>Modules Completed: <span className='text-primary font-semibold'>{`${user?.detailedReport.progress.completedModules}/${user?.detailedReport.progress.totalModules}`}</span></Card>
                    </Card>
                    <Card className='flex flex-col flex-grow'>
                        <SubHeading label='Curriculum Progress' />
                        <ProgressBar
                            className='w-full'
                            height='2rem'
                            completed={user?.detailedReport.progress.curriculumProgress}
                            bgColor={'#fe5b5f'}
                            animateOnRender={true}
                        />
                    </Card>
                </Card>
                <Card className='flex gap-10 flex-wrap'>
                    <Card className='flex flex-col'>
                        <SubHeading className='mb-10' label='Breakdown' />
                        <PieChartComponent userData={user?.detailedReport.hoursSpent.breakdown} />
                    </Card>
                    <Card className='flex flex-col'>
                        <SubHeading label='Progress Chart' />
                        <LineChartComponent user={user} />
                    </Card>
                </Card>
                <Card className='flex gap-10 flex-wrap'>
                    <Card className='flex flex-col'>
                        <SubHeading label='Overall Proficiency' />
                        <p className='text-primaryText text-lg font-semibold'>{user?.detailedReport.overallProficiency}</p>
                        <SubHeading label='Level wise scores' />
                        <BarChartComponent user={user} />
                    </Card>
                    <Card className='flex flex-col'>
                        <SubHeading label='Analysis' />
                        {Object.entries(user?.detailedReport.analysis).map(([key, value]) => (
                            <Card key={key} className='flex flex-col mb-2'>
                                <h2 className='font-semibold text-lg text-primaryText mb-0'>
                                    {key[0].toUpperCase() + key.slice(1)}:
                                </h2>
                                <ul className='text-secondaryText list-disc pl-5 m-0'>
                                    {value.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </Card>
                </Card>
            </Card>
        </Container>
    )
}

export default UserReport
