import './App.css'
import { useState, useEffect } from 'react'

import { MdShoppingBasket } from "react-icons/md";

import Shopee from './assets/shopee.png'
import Tokped from './assets/tokped.png'
import Whatsapp from './assets/whatsapp.webp'
import Zalora from './assets/zalora.png'
import Comfort from './assets/comfort.jpg'
import Confidence from './assets/confidence.jpg'
import Couture from './assets/couture.jpg'

function App() {

  const [answered, setAnswered] = useState([1]) // Remaining questions
  const [scores, setScores] = useState({ CONFIDENCE: 0, COUTURE: 0, COMFORT: 0 }) // Save scores for each category
  const [submitted, setSubmitted] = useState(false) // User submitted all the answers
  const [displayResult, setDisplayResult] = useState(false)

  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNext = () => {
    setAnswered([...answered, 1]);
  }

  const handlePrevious = () => {
    if (answered.length > 0) {
      setAnswered(answered.slice(0, -1));
    }
  }

  const widthPercentage = (answered.length / 5) * 100;

  const handleOptionClick = (value) => {
    setScores(prevScores => ({ ...prevScores, [value]: prevScores[value] + 1 }));
    if (answered.length < 5) {
      setAnswered([...answered, 1]);
    } else {
      setSubmitted(true)
      setDisplayResult(true)
    }
  }

  const totalScore = scores.CONFIDENCE + scores.COUTURE + scores.COMFORT;

  // Calculate the percentage for each category
  const confidencePercentage = (scores.CONFIDENCE / totalScore) * 100;
  const couturePercentage = (scores.COUTURE / totalScore) * 100;
  const comfortPercentage = (scores.COMFORT / totalScore) * 100;

  // Find the highest score
  const highestScore = Math.max(scores.CONFIDENCE, scores.COUTURE, scores.COMFORT);

  useEffect(() => {
    console.log("SCORE = ", scores)
  }, [scores]);

  const questions = [
    {
      question: 'Style baju apa yang paling kamu suka ?',
      options: [
        { text: 'a. Simple elegan', value: 'CONFIDENCE' },
        { text: 'b. Mewah ekslusif', value: 'COUTURE' },
        { text: 'c. Simple nyaman', value: 'COMFORT' }
      ]
    },
    {
      question: 'Apa tontonan favoritmu ?',
      options: [
        { text: 'a. Drama Cina', value: 'COUTURE' },
        { text: 'b. Drama Thailand', value: 'COMFORT' },
        { text: 'c. Drama Korea', value: 'CONFIDENCE' },
        { text: 'd. Drama Asia', value: 'COMFORT' },
        { text: 'e. Series Barat', value: 'CONFIDENCE' }
      ]
    },
    {
      question: 'Kamu tipe orang yang gimana ?',
      options: [
        { text: 'a. Gesit dan antiribet', value: 'COMFORT' },
        { text: 'b. Suka tampil didepan umum', value: 'COUTURE' },
        { text: 'c. Suka menginfluence', value: 'CONFIDENCE' }
      ]
    },
    {
      question: 'Warna apa yang kamu suka?',
      options: [
        { text: 'a. Mamba', value: 'COUTURE' },
        { text: 'b. Kue', value: 'COMFORT' },
        { text: 'c. Bumi', value: 'CONFIDENCE' }
      ]
    },
    {
      question: 'Apa liburan impianmu?',
      options: [
        { text: 'a. Melihat sunset di pantai', value: 'COMFORT' },
        { text: 'b. Melihat sunrise di gunung', value: 'CONFIDENCE' },
        { text: 'c. Melihat gemerlap gedung', value: 'COUTURE' },
        { text: 'd. Berbelanja di mal', value: 'COUTURE' }
      ]
    }
  ];

  return (
    <div className={`relative p-2 flex flex-col items-center justify-start w-full ${displayResult ? 'md:h-screen h-full' : 'h-screen'} bg-[#FFFBF8] overflow-hidden`}>

      {/* e-commerce btns */}
      <a
        href="https://shopee.co.id/ninanugrohostore"
        className={`fixed ${isExpanded ? 'bottom-24' : 'bottom-0'} right-0 md:m-12 m-8 flex w-20 h-20 p-4 bg-white shadow-xl rounded-full transition-all ease-in-out`}
      >
        <img src={Shopee} alt="shopee" className='object-scale-down' />
      </a>
      <a
        href="https://www.tokopedia.com/ninanugroho"
        className={`fixed ${isExpanded ? 'bottom-48' : 'bottom-0'} right-0 md:m-12 m-8 flex w-20 h-20 p-4 bg-white shadow-xl rounded-full transition-all ease-in-out`}
      >
        <img src={Tokped} alt="shopee" className='object-scale-down ml-1' />
      </a>
      <a
        href=" https://api.whatsapp.com/send/?phone=%2B6287881965512&text=Hallo+Mba+Nisa%2C+saya+tertarik+dengan+Busana+ini.%0Asaya+biasa+pakai+size%3A+%0A%0A2in1+Asymmetric+Dune+Shirt+%0Ahttps%3A%2F%2Fninanugroho.com%2Fproducts%2F2in1-asymmetric-dune-shirt&type=phone_number&app_absent=0"
        className={`fixed ${isExpanded ? 'bottom-72' : 'bottom-0'} right-0 md:m-12 m-8 flex w-20 h-20 p-4 bg-white shadow-xl rounded-full transition-all ease-in-out`}
      >
        <img src={Whatsapp} alt="shopee" className='object-scale-down' />
      </a>
      <a
        href=" https://www.zalora.co.id/c/nina-nugroho/b-13506"
        className={`fixed ${isExpanded ? 'bottom-96' : 'bottom-0'} right-0 md:m-12 m-8 flex w-20 h-20 p-4 bg-white shadow-xl rounded-full transition-all ease-in-out`}
      >
        <img src={Zalora} alt="shopee" className='object-scale-down' />
      </a>

      <button
        className="fixed bottom-0 right-0 md:m-12 m-8 flex items-center justify-center w-20 h-20 bg-[#6E5B57] shadow-xl rounded-full hover:cursor-pointer transition-transform transform hover:scale-110 ease-in-out"
        onClick={handleClick}
        style={{ transformOrigin: 'center' }}
      >
        <MdShoppingBasket className='text-4xl text-white transition-transform transform hover:scale-125 ease-in-out' style={{ transformOrigin: 'center' }} />
      </button>

      {displayResult ? (
        answered.length === 5 && submitted ? (
          <div className='flex flex-col w-full h-full overflow-scroll items-center justify-between'>
            {/* <div className='p-2 bg-[url("//ninanugroho.com/cdn/shop/files/BDS_7395.jpg?v=1708074960&width=480")] bg-center bg-no-repeat bg-cover rounded-md flex flex-col items-center justify-center w-full h-36'>
                <h1 className='font-light text-white md:text-4xl text-2xl text-center'>Simulator Nina Fashion Lab</h1>
                <h1 className='font-semibold text-white md:text-xl text-md text-center pt-2'>Choose your fit based on your personality</h1>
              </div> */}
            <div className="flex flex-col w-full h-full">
              {scores.CONFIDENCE === highestScore && (
                <div className="md:flex xs:flex xs:flex-col-reverse h-full md:h-[350px] w-full px-0 md:px-24 md:py-8">
                  <div className='flex flex-col justify-end px-start w-full md:px-12 gap-4'>
                    <p className='font-light text-4xl ml-auto'>CONFIDENCE: {confidencePercentage}%</p>
                    <span className="rounded-full flex ml-auto w-1/3 h-0.5 bg-gray-700"></span>
                    <p className='font-light text-lg text-right mx-auto w-full flex'>Kategori busana kerja ini dibuat untuk profesional yang perlu memancarkan pengaruh dalam setiap situasi. Desain busananya menujukkan kompetensi dan karakter yang kuat sehingga membuat Anda siap menjawab setiap tantangan dan terbang lebih tinggi.</p>
                  </div>
                  <img src={Confidence} alt="confidence" className='flex w-[550px] h-full object-cover' />
                </div>
              )}
              {scores.COUTURE === highestScore && (
                <div className="md:flex xs:flex xs:flex-col-reverse h-full md:h-[350px] w-full px-0 md:px-24 md:py-8">
                  <div className='flex flex-col justify-end w-full md:px-12 gap-4'>
                    <p className='font-light text-4xl ml-auto'>COUTURE: {couturePercentage}%</p>
                    <span className="rounded-full flex ml-auto w-1/3 h-0.5 bg-gray-700"></span>
                    <p className='font-light text-lg text-right mx-auto w-full flex'>Kategori busana kerja ini dibuat untuk profesional yang kerap jadi pusat perhatian. Menggunakan bahan mewah ekslusif dengan sentuhan batik yang unik, busana ini didesain khusus untuk ditampilkan pada peragaan busana kelas dunia. Saatnya Anda tampil istimewa.</p>
                  </div>
                  <img src={Couture} alt="couture" className='flex w-[550px] h-full object-cover' />
                </div>
              )}
              {scores.COMFORT === highestScore && (
                <div className="md:flex xs:flex xs:flex-col-reverse h-full md:h-[350px] w-full px-0 md:px-24 md:py-8">
                  <div className='flex flex-col justify-end w-full md:px-12 gap-4'>
                    <p className='font-light text-4xl ml-auto'>COMFORT: {comfortPercentage}%</p>
                    <span className="rounded-full flex ml-auto w-1/3 h-0.5 bg-gray-700"></span>
                    <p className='font-light text-lg text-right mx-auto w-full flex'>Kategori busana kerja ini dibuat untuk profesional yang senantiasa bergerak dinamis. Nikmati kesederhanaan dan kenyamanan dibalut dengan desain timeless yang membantu Anda melompat dari satu meeting ke meeting lain dengan penuh percaya diri.</p>
                  </div>
                  <img src={Comfort} alt="comfort" className='flex w-[550px] h-full object-cover' />
                </div>
              )}
            </div>
            <h1 className='font-semibold underline underline-offset-2 pt-12 pb-36 md:pb-12'>For further information please <a href=" https://ninanugroho.com/" className='text-blue-500'>click here</a></h1>
          </div>
        ) : null
      ) : (
        <div className='flex flex-col w-full'>

          <div className="flex flex-col w-full h-full items-center justify-start">

            {/* Banner section */}
            {/* <div className='p-2 bg-pink-200 rounded-md flex items-center justify-center w-full h-36'> */}
            <div className='p-2 bg-[url("//ninanugroho.com/cdn/shop/files/BDS_7395.jpg?v=1708074960&width=480")] bg-center bg-no-repeat bg-cover rounded-md flex flex-col items-center justify-center w-full h-36'>
              <h1 className='font-light text-white md:text-4xl text-2xl text-center'>Simulator Nina Fashion Lab</h1>
              <h1 className='font-semibold text-white md:text-xl text-md text-center pt-2'>Choose your fit based on your personality</h1>
            </div>

            {/* Progress Bar */}
            <div className="relative flex items-center justify-center w-full h-12 pt-12 p-8">
              <div className="relative flex items-center justify-center w-full bg-gray-300 rounded-full h-2">
                <div style={{ width: `${widthPercentage}%`, transition: 'width 0.5s' }} className="absolute left-0 flex items-center justify-center bg-[#70754D] rounded-full h-2">
                </div>
                {answered.length != 5 ? (

                  <div style={{ left: `${widthPercentage - 3}%`, transition: 'left 0.5s' }} className="absolute flex items-center justify-center w-12 h-12 bg-[#70754D] rounded-full">
                    <h1 className='text-white'>{answered.length}/5</h1>
                  </div>
                ) : (
                  <div style={{ left: `97%`, transition: 'left 0.5s' }} className="absolute flex items-center justify-center w-12 h-12 bg-[#70754D] rounded-full">
                    <h1 className='text-white'>{answered.length}/5</h1>
                  </div>

                )}
              </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <h2 className='font-light text-3xl text-center flex w-full p-8'>{questions[answered.length - 1].question}</h2>
              <div className="flex flex-col items-start justify-start gap-2 w-72">
                {questions[answered.length - 1].options.map((option, index) => (
                  <button className='bg-[#6E5B57] rounded-md py-4 mr-auto text-white w-full' onClick={() => handleOptionClick(option.value)} key={index}>{option.text}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Previous, Next, and Submit button if needed */}
          {/* <div className="flex w-full items-center justify-between p-8">
            <button disabled={answered.length == 1 ? true : false} className={answered.length == 1 ? `opacity-50 py-2 px-6 bg-black text-white rounded-md` : `py-2 px-6 bg-black text-white rounded-md hover:bg-gray-100 hover:text-black transition ease-in-out`} onClick={handlePrevious}>Previous</button>
            {answered.length == 5 ? (
              <button className='py-2 px-6 bg-black text-white rounded-md hover:bg-gray-100 hover:text-black transition ease-in-out' onClick={() => {
                setSubmitted(true)
                setDisplayResult(true)
              }}>Submit</button>
            ) : (
              <button className='py-2 px-6 bg-black text-white rounded-md hover:bg-gray-100 hover:text-black transition ease-in-out' onClick={answered.length == 5 ? () => { } : handleNext}>Next</button>
            )}
          </div> */}
        </div>
      )}

    </div>
  )
}

export default App
