import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserIcon, LockIcon, MailIcon } from "lucide-react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access);
                window.location.href = '/dashboard';
            } else {
                // Handle error
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-3xl font-bold mb-6 text-center">Join LoopSync</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-gray-700 text-white rounded-md py-2 px-4 pl-10"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <UserIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-gray-700 text-white rounded-md py-2 px-4 pl-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <MailIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                className="w-full bg-gray-700 text-white rounded-md py-2 px-4 pl-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <LockIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                        type="submit"
                    >
                        Register
                    </motion.button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <a href="/login" className="text-green-400 hover:underline">Log in here</a>
                </p>
            </motion.div>
        </div>
    );
};

export default Register;
