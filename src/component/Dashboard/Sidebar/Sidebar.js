import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = React.useState(false)

    React.useEffect(() => {
        fetch('http://localhost:9000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(res => setIsAdmin(res))
    }, [])
    // console.log(isAdmin)
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/orderList" className="text-white">
                                <i class="fas fa-shopping-cart me-3 " /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white">
                                <i class="fas fa-user-plus me-3 " /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white">
                                <i class="fas fa-user-plus me-3 " /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="text-white">
                                <i class="fas fa-tasks me-3 " /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>
                }
                <li>
                    <Link to="/service/book" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book/booklist" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book/review" className="text-white">
                        <i class="far fa-comment-alt me-3" /> <span>Review</span>
                    </Link>
                </li>



                <li>
                    <Link to="/doctor/setting" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;