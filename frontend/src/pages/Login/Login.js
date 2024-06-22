import { useState } from 'react';
import axios from 'axios';
import MinimalNavbar from '../../components/MinimalNavbar/MinimalNavbar';
import InputField from '../../components/InputField/InputField';
import ContinueBtn from '../../components/ContinueBtn/ContinueBtn';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault(); 
        const { email, password } = data;

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password }); 
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                setData({ email: '', password: '' });
                toast.success('User logged in successfully!');
                navigate('/');
            }
        } catch (error) {
            console.log(error.response ? error.response.data : error.message); 
            toast.error(error.response.data);
        }
    };

    return (
        <>
            <MinimalNavbar />
            <form onSubmit={loginUser} className='LoginContainer'>
                <p className='LoginHeader'>
                    Welcome Back
                </p>
                <InputField
                    placeholder="Email address"
                    name="email"
                    id="emailInput"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <InputField
                    placeholder="Password"
                    name="password"
                    id="passwordInput"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <ContinueBtn />
                <div>
                    <p>Don't have an account?</p>
                    <Link to="/signup">Sign up</Link>
                </div>
            </form>
        </>
    );
};

export default Login;
