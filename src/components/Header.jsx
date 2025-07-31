import logo from '../assets/images/logo.svg';
import iconTodo from '../assets/images/icon-todo.svg';
import iconCalendar from '../assets/images/icon-calendar.svg';
import iconReminders from '../assets/images/icon-reminders.svg';
import iconPlanning from '../assets/images/icon-planning.svg';
import './Header.css';
function Header() {

    return (
        <div className='header'>
            <div className="btn-group">
                <img className='logo' src={logo} alt='logo'/>
                <div className='main-buttons'>
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Features
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#"><img src={iconTodo}/> Todo List</a>
                        <a className="dropdown-item" href="#"><img src={iconCalendar}/> Calendar</a>
                        <a className="dropdown-item" href="#"><img src={iconReminders}/> Reminders</a>
                        <a className="dropdown-item" href="#"><img src={iconPlanning}/> Planning</a>
                    </div>

                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Company
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#"> History</a>
                        <a className="dropdown-item" href="#"> Our Team</a>
                        <a className="dropdown-item" href="#"> Reminders</a>
                        <a className="dropdown-item" href="#"> Blog</a>
                    </div>
                </div>

                <div className='link-buttons'>
                    <button type="button" class="btn careers-button">Careers</button>

                    <button type="button" class="btn about-button">About</button>
                </div>
            </div>

            <div className='login-section'>
                <button type="button" class="btn login-button">Login</button>
                <button type="button" class="btn register-button">Register</button>
            </div>
        </div>
    );
}

export default Header;