import React, { useState } from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedModel, setSelectedModel] = useState('');
  const [singleUserPrice, setSingleUserPrice] = useState('$-');
  const [showCryptoOverlay, setShowCryptoOverlay] = useState(false);
  const [showLinkPago, setShowLinkPago] = useState(false);

  const handleRequestClick = (card) => {
    setSelectedCard(card);
    setShowOverlay(true);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);

    // Set the price based on the selected model
    switch (e.target.value) {
      case 'iphone1':
        setSingleUserPrice('$20');
        break;
      case 'iphone2':
        setSingleUserPrice('$25');
        break;  
      case 'iphone3':
        setSingleUserPrice('$25');
        break;
      case 'iphone4':
        setSingleUserPrice('$26');
        break;
      case 'iphone5':
        setSingleUserPrice('$30');
        break;
      case 'iphone6':
        setSingleUserPrice('$32');
        break;
      case 'iphone7':
        setSingleUserPrice('$32');
        break;  
      case 'iphone8':
        setSingleUserPrice('$26');
        break;
      case 'iphone9':
        setSingleUserPrice('35');
        break;
      case 'iphone10':
        setSingleUserPrice('35');
        break;
      case 'iphone11':
        setSingleUserPrice('$37');
        break;
      case 'iphone12':
        setSingleUserPrice('$37');
        break;  
      case 'iphone13':
        setSingleUserPrice('$40');
        break;
      case 'iphone14':
        setSingleUserPrice('$40');
        break;
      case 'iphone15':
        setSingleUserPrice('$45');
        break;
      case 'iphone16':
        setSingleUserPrice('$45');
        break;
      case 'iphone17':
        setSingleUserPrice('$50');
        break;  
      case 'iphone18':
        setSingleUserPrice('$53');
        break;
      case 'iphone19':
        setSingleUserPrice('$58');
        break;
      case 'iphone20':
        setSingleUserPrice('$58');
        break;
      default:
        setSingleUserPrice('$-');
        break;
    }
  };

  const closeOverlay = () => {
    setSelectedCard(null);
    setSelectedModel('');
    setSingleUserPrice('$-');
    setShowOverlay(false);
    setShowCryptoOverlay(false);
    setShowLinkPago(false);
  };

  const handleCryptoClick = () => {
    setShowCryptoOverlay(true);
  };

  const handleLinkPagoClick = () => {
    setShowLinkPago(true);
  };

  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>{singleUserPrice}</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 Activation Token</p>
            <p className='py-2 border-b mx-8'>Price varies by device</p>
            <p className='py-2 border-b mx-8'>0 Granted User</p>
            <p className='py-2 border-b mx-8'>Immediate Processing</p>
          </div>
          <button
            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            onClick={() =>
              handleRequestClick({
                title: 'Single User',
                price: singleUserPrice,
                features: [
                  '1 Activation Token',
                  'Price varies by device',
                  '0 Granted User',
                  'Immediate Processing',
                ],
              })
            }
          >
            Request
          </button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/' />
          <h2 className='text-2xl font-bold text-center py-8'>Service Provider User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>15 Random Activation Tokens</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Immediate Processing</p>
          </div>
          <button
            className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            onClick={() =>
              handleRequestClick({
                title: 'Service Provider User',
                price: '$149',
                features: ['15 Random Activation Tokens', '1 Granted User', 'Immediate Processing'],
              })
            }
          >
            Request
          </button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
          <h2 className='text-2xl font-bold text-center py-8'>Reseller User</h2>
          <p className='text-center text-4xl font-bold'>$699</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>200 Random Activation Tokens</p>
            <p className='py-2 border-b mx-8'>3 Granted User</p>
            <p className='py-2 border-b mx-8'>Immediate Processing</p>
          </div>
          <button
            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            onClick={() => handleRequestClick({ title: 'Reseller User', price: '$699', features: ['200 Random Activation Tokens', '3 Granted User', 'Immediate Processing'] })}
          >
            Request
          </button>
        </div>
      </div>

      {/* Overlay */}
      {showOverlay && selectedCard && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
          <div className='max-w-[800px] mx-auto p-4 bg-white rounded-lg text-center'>
            <h2 className='text-2xl font-bold text-center mb-4'>{selectedCard.title}</h2>
            {selectedCard.title === 'Single User' && (
              <div>
                <div className='flex justify-between items-center mb-4'>
                  <label htmlFor='model' className='text-lg font-medium'>
                    Select Model:
                  </label>
                  <select
                    id='model'
                    className='border border-gray-300 rounded-md p-2 focus:outline-none'
                    value={selectedModel}
                    onChange={handleModelChange}
                  >
                    <option value=''>Select</option>
                    <option value='iphone1'>iPhone X</option>
                    <option value='iphone2'>iPhone XS</option>
                    <option value='iphone3'>iPhone XR</option>
                    <option value='iphone4'>iPhone XS MAX</option>
                    <option value='iphone5'>iPhone 11</option>
                    <option value='iphone6'>iPhone 11 Pro</option>
                    <option value='iphone7'>iPhone 11 Pro Max</option>
                    <option value='iphone8'>iPhone SE 2022</option>
                    <option value='iphone9'>iPhone 12 Mini</option>
                    <option value='iphone10'>iPhone 12</option>
                    <option value='iphone11'>iPhone 12 Pro</option>
                    <option value='iphone12'>iPhone 12 Pro Max</option>
                    <option value='iphone13'>iPhone 13 Mini</option>
                    <option value='iphone14'>iPhone 13</option>
                    <option value='iphone15'>iPhone 13 Pro</option>
                    <option value='iphone16'>iPhone 13 Pro Max</option>
                    <option value='iphone17'>iPhone 14</option>
                    <option value='iphone18'>iPhone 14+</option>
                    <option value='iphone19'>iPhone 14 Pro</option>
                    <option value='iphone20'>iPhone 14 Pro Max</option>   
                    {/* Rest of the options */}
                  </select>
                </div>
                <p className='text-center text-4xl font-bold'>{singleUserPrice}</p>
              </div>
            )}
            {selectedCard.features.map((feature, index) => (
              <p key={index} className='py-2 border-b mx-8 mt-8'>
                {feature}
              </p>
            ))}
            <div className='relative flex justify-end'>
              <button
                className='absolute top-0 right-0 -mt-2 -mr-2 text-gray-500 hover:text-gray-700'
                onClick={closeOverlay}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <div className='flex justify-center mt-4'>
              <button
                className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-2 py-3'
                onClick={handleCryptoClick}
              >
                CRIPTO
              </button>
              <button
                className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-2 py-3'
                onClick={handleLinkPagoClick}
              >
                LINKPAGO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Crypto Overlay */}
      {showCryptoOverlay && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
          <div className='max-w-[800px] mx-auto p-4 bg-white rounded-lg text-center'>
            <h2 className='text-2xl font-bold text-center mb-4'>Crypto Payment</h2>
            <p className='text-center text-lg font-medium mb-4'>Make your payment to the following wallet:</p>
            <p className='text-center text-4xl font-bold mb-4'>Your Wallet Address</p>
            <p className='text-center text-lg font-medium mb-4'>Description: Payment for {selectedCard.title}</p>
            <button
              className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-2 py-3'
              onClick={closeOverlay}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* LinkPago Redirect */}
      {showLinkPago && (
        // Perform the redirect to the LinkPago page here
        <div>
          Redirecting to LinkPago...
        </div>
      )}
    </div>
  );
};

export default Cards;
