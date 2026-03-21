import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            navigate('/admin/dashboard');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            } else {
                setError(data.error || 'Invalid username or password');
            }
        } catch (err) {
            setError('Could not connect to server.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-primary flex flex-col items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-white rounded-3xl p-10 shadow-[0_30px_70px_rgba(0,0,0,0.05)] border border-secondary relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-3xl font-serif text-text font-bold mb-2 tracking-tight">Admin Login</h1>
                    <p className="text-xs font-sans text-text/40 tracking-[0.2em] uppercase font-bold">Manage Assistant Data</p>
                </div>

                {error && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-6 p-4 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 font-sans font-bold text-center"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text/30 group-focus-within:text-accent transition-colors">
                            <User size={18} />
                        </div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                            value={credentials.username}
                            onChange={handleChange}
                            className="w-full bg-primary/40 border border-secondary/50 py-4 pl-12 pr-4 rounded-2xl outline-none focus:ring-1 focus:ring-accent transition-all text-sm font-sans placeholder:text-text/20"
                        />
                    </div>

                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text/30 group-focus-within:text-accent transition-colors">
                            <Lock size={18} />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                            value={credentials.password}
                            onChange={handleChange}
                            className="w-full bg-primary/40 border border-secondary/50 py-4 pl-12 pr-12 rounded-2xl outline-none focus:ring-1 focus:ring-accent transition-all text-sm font-sans placeholder:text-text/20"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-text/30 hover:text-text transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full px-10 py-5 bg-text text-white font-sans tracking-[0.3em] uppercase text-[11px] font-bold rounded-full overflow-hidden transition-all duration-500 shadow-2xl active:scale-95 disabled:opacity-50 mt-4"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {isLoading ? 'Wait...' : 'Login'} 
                            {!isLoading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                        </span>
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default AdminLogin;
