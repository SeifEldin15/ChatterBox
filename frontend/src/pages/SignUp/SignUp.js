import { useState } from 'react';
import axios from 'axios';
import MinimalNavbar from '../../components/MinimalNavbar/MinimalNavbar';
import InputField from '../../components/InputField/InputField';
import ContinueBtn from '../../components/ContinueBtn/ContinueBtn';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        reEnterPassword: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password, reEnterPassword } = data;

        if (password !== reEnterPassword) {
            toast.error('Passwords do not match');
            console.log(1);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', { name, email, password });

            if (response.data.error) {
            } else {
                setData({ name: '', email: '', password: '', reEnterPassword: '' });
                navigate('/login');
            }
        } catch (error) {
            console.log(error.response ? error.response.data : error.message);
            toast.error(error.response.data);
        }
    };

    return (
        <>
        
            <MinimalNavbar />
            <form onSubmit={registerUser} className="SignUpContainer">
                <p className="SignUpHeader">Create your account</p>
                <InputField
                    placeholder="Name"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <InputField
                    placeholder="Email address"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <InputField
                    placeholder="Password"
                    name="password"
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <InputField
                    placeholder="Re-Enter your password"
                    name="reEnterPassword"
                    id="reEnterInput"
                    type="password"
                    value={data.reEnterPassword}
                    onChange={(e) => setData({ ...data, reEnterPassword: e.target.value })}
                />
                <ContinueBtn />
                <div>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </>
    );
};

export default SignUp;
