import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({email, password});
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3> Login up </h3>

            <label htmlFor="email"> Email: </label>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />

            <label htmlFor="password"> Password: </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />

            <button> Login </button>
        </form>
    );
}

export default Login;