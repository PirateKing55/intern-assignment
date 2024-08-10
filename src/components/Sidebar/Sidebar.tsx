import { MdSummarize } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getUserById } from '../../services/getData';
import { User } from '../../data/types';

function Sidebar() {
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [summaryActive, setSummaryActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);

    useEffect(() => {
        const fetchedUser = getUserById(Number(userId));
        if (fetchedUser !== undefined) {
            setUser(fetchedUser);
        }
    }, [userId]);

    return (
        <div className='min-h-screen w-fit bg-primary flex flex-col items-center px-2 flex-shrink-0'>
            <div className="flex flex-col justify-center items-center text-background my-5">
                <div><CgProfile size={60} /></div>
                {user && (  // Ensuring user is defined before accessing its properties
                    <h2 className=" text-xl font-semibold">
                        {user.name[0].toUpperCase() + user.name.slice(1)}
                    </h2>
                )}
            </div>
            <div className=" divide-y-[1px] divide-background">
                <NavLink to={`/users/${userId}/details/summary`}
                    className={({ isActive }) => {
                        setSummaryActive(isActive);
                        return "flex justify-start items-center gap-2 p-3 font-semibold text-lg text-background"
                    }
                    }>
                    <span><MdSummarize size={25} /></span>
                    <h2>Progress Summary</h2>
                    <span className={`size-2 rounded-full ${summaryActive ? "bg-background" : "bg-primary"}`}></span>
                </NavLink>
                <NavLink to={`/users/${userId}/details/report`}
                    className={({ isActive }) => {
                        setReportActive(isActive);
                        return "flex justify-start items-center gap-2 p-3 font-semibold text-lg text-background"
                    }
                    }>
                    <span><BiSolidReport size={25} /></span>
                    <h2>Detailed Report</h2>
                    <span className={`size-2 rounded-full ${reportActive ? "bg-background" : "bg-primary"}`}></span>
                </NavLink>
            </div>
            <NavLink to={"/"} className="group flex justify-center items-center gap-1 mt-5 text-background cursor-pointer text-lg">
                <span>Home</span>
                <span className="group-hover:translate-x-2 transform transition-transform duration-200 ease-in-out"><FaAngleRight /></span>
            </NavLink>
        </div >
    )
}

export default Sidebar
