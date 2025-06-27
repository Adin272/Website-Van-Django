import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim() === 'admin123') {
      setError('');
      navigate('/dragdrop');
    } else {
      setError('Verkeerd wachtwoord');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-yellow-50 px-4">
      <form
        onSubmit={handleLogin}
        className="backdrop-blur-sm bg-white/70 border border-yellow-200 shadow-lg p-10 rounded-xl w-full max-w-md text-center animate-fade-in"
      >
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 tracking-wide">
          🔐 Admin Login
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Voer wachtwoord in"
          className="border border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 outline-none rounded-lg px-4 py-3 mb-5 w-full transition-all duration-300 text-gray-800 placeholder-gray-400"
/>


        <button
          type="submit"
          className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-yellow-600 hover:shadow-xl transition duration-300"
        >
          Inloggen
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </section>
  );
};

export default AdminLogin;
