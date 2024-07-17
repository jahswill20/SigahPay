import React from 'react';
import logo from '../assets/Images/logo.jpg';
import feature1 from '../assets/Images/feature1.jpg';
import feature2 from '../assets/Images/feature2.jpg';
import feature3 from '../assets/Images/feature3.jpg';
import Screenshot from '../assets/Images/SigahpayScreenshot.png';


const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-white min-h-screen shadow-lg">
        <div className="container mx-auto px-4 py-6 flex flex-col items-center text-center">
          <img 
            src={logo}
            alt="Sigah Pay Logo" 
            className="rounded-full h-32 w-32 mb-4"
          />
          <h1 className="text-4xl font-bold">Welcome to Sigah Pay</h1>
          <p className="text-xl mt-2">Experience seamless and efficient banking with Sigah Pay.</p>
          <div className="mt-6">
            <a 
              href="https://drive.google.com/file/d/1849WD34JdAyfVoorTjJUR2tzrpJYOAKS/view?usp=sharing"
              download
              className="ml-5 px-10 py-3 bg-blue-500 text-white text-lg font-bold rounded-md mr-4"
            >
              Download here
            </a>
          </div>
          <img src={Screenshot} alt="App Screenshot" className='mt-7 rounded-[28px]'/>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Features</h2>
          <p className="text-gray-600 mt-2">Discover the amazing features that make banking easy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img 
              src={feature1}
              alt="Budget Tracking" 
              className="h-52 w-64 rounded-md shadow-xl mb-4"
            />
            <h3 className="font-semibold text-lg">Budget Tracking</h3>
            <p className="text-center mt-2">Keep track of your spending and savings effortlessly.</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={feature2} 
              alt="Instant Transfers" 
              className="h-52 w-64 rounded-md shadow-xl mb-4"
            />
            <h3 className="font-semibold text-lg">Instant Transfers</h3>
            <p className="text-center mt-2">Send money instantly and securely.</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={feature3} 
              alt="User-Friendly Interface" 
              className="h-52 w-64 rounded-md shadow-xl mb-4"
            />
            <h3 className="font-semibold text-lg">User-Friendly Interface</h3>
            <p className="text-center mt-2">Enjoy a smooth and intuitive experience.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">What Our Users Say</h2>
            <p className="text-gray-600 mt-2">Testimonials from our satisfied users.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p>"Sigah Pay has completely transformed the way I manage my finances. It's so easy to use!"</p>
              <p className="mt-4 font-semibold">- James</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p>"The instant transfers feature is a lifesaver. I can send money to my family in seconds."</p>
              <p className="mt-4 font-semibold">- Richard</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p>"I love how user-friendly the interface is. Everything is just a tap away."</p>
              <p className="mt-4 font-semibold">- Stella</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Download Sigah Pay Now</h2>
          <p className="text-gray-600 mt-2">Get started with Sigah Pay today and experience the best in mobile banking.</p>
          <div className="mt-6">
            <a 
              href="https://drive.google.com/file/d/1849WD34JdAyfVoorTjJUR2tzrpJYOAKS/view?usp=sharing"
              download
              className="px-6 py-3 bg-yellow-500 text-white text-lg font-bold rounded-md"
            >
              Download Here
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Sigah Pay. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="mx-2 hover:text-gray-800">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
