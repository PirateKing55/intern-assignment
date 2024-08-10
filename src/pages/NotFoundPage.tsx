import { useNavigate } from 'react-router-dom';
import { Button } from '../components';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className='size-full flex flex-col justify-center items-center mb-10'>
            <h1 className='text-primary font-bold'>404 Not Found!</h1>
            <p className='text-secondaryText'>Sorry, the page you are looking for does not exist.</p>
            <div className='flex gap-5 mt-5'>
                <Button classname='px-2 py-1 w-14' label='Back' handleClick={() => navigate(-1)} />
                <Button classname='px-2 py-1 w-14' label='Home' handleClick={() => navigate('/')} />
            </div>
        </div>
    );
};

export default NotFoundPage;
