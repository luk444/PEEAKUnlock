import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>TOKEN PROCESSING DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Centralized token management for efficient</h1>
          <br />
          <p>
            The Token Processing Dashboard is an essential tool for individual users and resellers offering iCloud account unbinding services. For the token to allow unlocking, it is crucial that the previous owner has not changed the password of the associated iCloud account. Verification of the original password is a fundamental requirement to guarantee the authenticity and validity of the unbinding process.
          </p>
          <br />
          <p>
            Primarily designed for users who are sure they haven't changed their password, but have possibly forgotten their access key, the Token Processing Panel provides a convenient option to regain access to iCloud account without first changing the password.

          </p>
          <br />
          <p>
            In addition, this panel also allows the processing of devices deregistered by ENACOM, depending on the type of restriction. This enables individual users and resellers to unlock devices blocked or restricted by ENACOM, as long as they meet the specific requirements established by the corresponding authority. By streamlining this process, the Token Processing Dashboard makes it easy to centrally manage the activation tokens needed to unlock those devices.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
