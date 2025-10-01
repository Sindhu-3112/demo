'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';

export default function WelcomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      router.replace('/login');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>🎉 Welcome!</h1>
      <p>You are logged in.</p>

       <div className="bg-gray-100 p-4 rounded mb-6 border-l-4 border-blue-400">
      <p className="italic text-gray-600">
        “The future belongs to those who believe in the beauty of their dreams.”<br />
        <span className="text-sm text-gray-500">– Eleanor Roosevelt</span>
      </p>
    </div>
      
     <button
  onClick={handleLogout}
  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
>
  <FiLogOut className="h-5 w-5" />
  Logout
</button>
    </div>
  );
}
