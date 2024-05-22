import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [answered, setAnswered] = useState([1]) // Remaining questions
  const [scores, setScores] = useState({ CONFIDENCE: 0, COUTURE: 0, COMFORT: 0 }) // Save scores for each category
  const [submitted, setSubmitted] = useState(false) // User submitted all the answers
  const [displayResult, setDisplayResult] = useState(false)

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
    <div className='p-2 flex flex-col items-center justify-start w-full h-screen'>

      {displayResult ? (
        answered.length === 5 && submitted ? (
          <div>
            <div className='p-2 bg-[url("https://images.unsplash.com/photo-1534638286233-72a8f7713614?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-center rounded-md flex items-center justify-center w-full h-36'>
              <h1 className='font-light text-white text-3xl'>Choose your fit based on your personality</h1>
            </div>
            {/* <h2 className='text-lg pt-4'>Results:</h2> */}
            {/* <p>CONFIDENCE: {scores.CONFIDENCE}</p>
            <p>COUTURE: {scores.COUTURE}</p>
            <p>COMFORT: {scores.COMFORT}</p> */}

            {/* Display the categories with the highest score */}
            <div className="p-8 flex flex-col w-full">

              {scores.CONFIDENCE === highestScore && (
                <>
                  <p className='font-bold text-2xl w-full text-center mx-auto'>CONFIDENCE: {confidencePercentage}%</p>
                  <span className="rounded-full my-8 mx-auto flex w-1/3 h-0.5 bg-gray-300"></span>
                  <p className='font-light text-lg pb-8 w-1/2 text-center mx-auto w-full flex'>Kategori busana kerja ini dibuat untuk profesional yang perlu memancarkan pengaruh dalam setiap situasi. Desain busananya menujukkan kompetensi dan karakter yang kuat sehingga membuat Anda siap menjawab setiap tantangan dan terbang lebih tinggi.</p>
                </>
              )}
              {scores.COUTURE === highestScore && (
                <>
                  <p className='font-bold text-2xl w-full text-center mx-auto'>COUTURE: {couturePercentage}%</p>
                  <span className="rounded-full my-8 mx-auto flex w-1/3 h-0.5 bg-gray-300"></span>
                  <p className='font-light text-lg pb-8 w-1/2 text-center mx-auto w-full flex'>Kategori busana kerja ini dibuat untuk profesional yang kerap jadi pusat perhatian. Menggunakan bahan mewah ekslusif dengan sentuhan batik yang unik, busana ini didesain khusus untuk ditampilkan pada peragaan busana kelas dunia. Saatnya Anda tampil istimewa.</p>
                </>
              )}
              {scores.COMFORT === highestScore && (
                <>
                  <p className='font-bold text-2xl w-full text-center mx-auto'>COMFORT: {comfortPercentage}%</p>
                  <span className="rounded-full my-8 mx-auto flex w-1/3 h-0.5 bg-gray-300"></span>
                  <p className='font-light text-lg pb-8 w-1/2 text-center mx-auto w-full flex'>Kategori busana kerja ini dibuat untuk profesional yang senantiasa bergerak dinamis. Nikmati kesederhanaan dan kenyamanan dibalut dengan desain timeless yang membantu Anda melompat dari satu meeting ke meeting lain dengan penuh percaya diri.</p>
                </>
              )}
            </div>
          </div>
        ) : null
      ) : (
        <div className='flex flex-col w-full'>

          <div className="flex flex-col w-full h-full items-center justify-start">

            {/* Banner section */}
            {/* <div className='p-2 bg-pink-200 rounded-md flex items-center justify-center w-full h-36'> */}
            <div className='p-2 bg-[url("https://images.unsplash.com/photo-1534638286233-72a8f7713614?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-center rounded-md flex items-center justify-center w-full h-36'>
              <h1 className='font-light text-white text-3xl'>Choose your fit based on your personality</h1>
            </div>

            {/* Progress Bar */}
            <div className="relative flex items-center justify-center w-full h-12 pt-12 p-8">
              <div className="relative flex items-center justify-center w-full bg-gray-300 rounded-full h-2">
                <div style={{ width: `${widthPercentage}%`, transition: 'width 0.5s' }} className="absolute left-0 flex items-center justify-center bg-red-700 rounded-full h-2">
                </div>
                {answered.length != 5 ? (

                  <div style={{ left: `${widthPercentage - 3}%`, transition: 'left 0.5s' }} className="absolute flex items-center justify-center w-12 h-12 bg-red-700 rounded-full">
                    <h1 className='text-white'>{answered.length}/5</h1>
                  </div>
                ) : (
                  <div style={{ left: `97%`, transition: 'left 0.5s' }} className="absolute flex items-center justify-center w-12 h-12 bg-red-700 rounded-full">
                    <h1 className='text-white'>{answered.length}/5</h1>
                  </div>

                )}
              </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <h2 className='font-semibold text-3xl text-center flex w-full p-8'>{questions[answered.length - 1].question}</h2>
              <div className="flex flex-col items-start justify-start gap-2 w-72">
                {questions[answered.length - 1].options.map((option, index) => (
                  <button className='bg-black rounded-md py-4 mr-auto text-white w-full' onClick={() => handleOptionClick(option.value)} key={index}>{option.text}</button>
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
