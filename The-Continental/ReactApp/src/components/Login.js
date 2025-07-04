import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faEraser, faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [login, setLogin] = useState(false);
    const [shoes, setShoes] = useState(props.show);

    useEffect(() => {
        setShoes(props.show);
    }, [props.show]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', { username, password });
            setLogin(true);
            setMessage('Login successful');
            localStorage.setItem('usname', username);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            setLogin(false);
            setMessage(`Login failed: invalid username ${username} or password`);
        }
    };

    const erase = () => {
        setUsername('');
        setPassword('');
    };

    const close = () => {
        setShoes(false);
    };

    return (
        <div className='boxContainer' style={{ display: shoes ? 'grid' : 'none' }}>
            <div className='box'>
                <h2>Login <FontAwesomeIcon className='xmark' icon={faXmark} onClick={close} /></h2>
                <form onSubmit={handleSubmit}>
                    <div className='input'>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username...'  required/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password...'  required/>
                    </div>
                    <div>
                        <button type="submit" className='bt'>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </button>
                        <button type="button" className='bt eraser' onClick={erase}>
                            <FontAwesomeIcon icon={faEraser} />
                        </button>
                    </div>
                </form>
                <div className='error' style={{ color: login ? 'lime' : 'red' }}>
                    <b>{message}</b>
                </div>
            </div>
        </div>
    );
};

export default Login;
