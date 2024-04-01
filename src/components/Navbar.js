import React from 'react';
import Link from 'next/link';

const Navbar = ({ user }) => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        {user ? (
          <>
            <li>Welcome, {user.email}</li>
            <li><Link href="/api/auth/signout">Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
