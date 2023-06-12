import React, { useState } from 'react';
import axios from 'axios';

function DictionaryApp() {
  const [Searchword, setSearchword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDayMode, setIsDayMode] = useState(true);
  const [selectedFont, setSelectedFont] = useState("Sans-serif");


  const handleFontChange = (e) => {
    setSelectedFont(e.value);
  };


  const toggleDayMode = () => {
    setIsDayMode(!isDayMode);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${Searchword}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };
console.log(isDayMode);

  return (
<body className={`${!isDayMode ? 'bg-black text-white' : 'bg-white text-black'} sm:bg-white sm:text-black h-screen`}>


    <div className={`${!isDayMode ? 'bg-black text-white' : 'bg-white  text-black'} flex flex-col justify-center items-center mx-auto sm:w-370 `}>
    <header className={`flex justify-between flex-row gap-5 w-[736.99px] h-[36.5px] left-[351px] mt-[50px] top-[58px] rounded-none sm:w-370  ${!isDayMode ? 'bg-black text-white' : 'bg-white'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38">
          <g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>

        <div className="flex flex-row gap-5 w-100">

        <select
  className={`rounded-16 text-lg ${isDayMode ? 'bg-white text-black' : 'bg-black text-gray-400'}`}
  onChange={handleFontChange}
  value={selectedFont}
>
  <option value="Sans Serif">Sans Serif</option>
  <option value="Serif">Serif</option>
  <option value="Mono">Mono</option>
</select>


<div className={`relative inline-block w-12 mr-2 align-middle select-none ${!isDayMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
  <input
    type="checkbox"
    className={`rounded-16 text-lg ${isDayMode ? 'bg-white text-black' : 'bg-blacktext-black'} toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer   style={{ right: isChecked ? '0.5rem' : 'calc(100% - 0.5rem)` }
    checked={isDayMode}
    onChange={toggleDayMode}
  />
   <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      />
</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" />
          </svg>
        </div>
      </header>
      <div className={`${!isDayMode ? ' bg-gray-400 text-white' : ' bg-gray-200'} flex justify-between items-center flex-row w-[736.99px] h-[36.5px] mt-[50px] border-20 rounded`}>
      <input
  type="text"
  value={Searchword}
  onChange={(e) => setSearchword(e.target.value)}
  placeholder="Enter a word"
  className={`w-[400px] ${!isDayMode ? ' bg-gray-400 text-white' : ' bg-gray-200  text-black'}`}
/>
        <div  onClick={handleSearch} > 
           <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
           </div>
      </div>
      <div className={`${isDayMode ? 'bg-white text-black' : 'bg-black text-white'}`} style={{ width: '736.99px' }}>

    
      {searchResults.length > 0 ? (
      <ul>
     

    
     <li className="mt-[20px] mb-[20px] text-4xl mt-20px mb-20px ">
     <div className="mt-[20px] mb-[20px]  flex justify-between flex-row">
     {searchResults[0].word}
{searchResults[0].phonetics.length > 0 && (
  <div className="mt-[45px] mb-[20px] x">
    <svg
      onClick={() => {
        const audioElement = document.querySelector('.audio-Element');
        audioElement.play();
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
    >
      <g fill="#A445ED" fillRule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
        <path d="M29 27v21l21-10.5z" />
      </g>
    </svg>
    {searchResults[0].phonetics[0].audio && (
      <audio
        src={searchResults[0].phonetics[0].audio}
        controls
        className="audio-Element" style={{ display: 'none' }}
      />
  )}
  <p className="h-75 w-75 left-[1013px] top-[275px] rounded-full text-[#A445ED] ">
  {searchResults[0].phonetics[0].text}
</p>
</div>

  )}
</div>
                       
          <ul>
          
            { searchResults[0].meanings.map((meaning, index) => (
      <li
      key={index}
      className={`${
        selectedFont === "Lora" || selectedFont === "Inter"
          ? "italic"
          : "non-italic"
      } mt-10 mb-10  left-[1013px] top-[275px] rounded-full text-base `}
    >


                <h1>{meaning.partOfSpeech}</h1>
            
                <p className="mt-[20px] mb-[20px] ">meaning</p>
                <ul>
               
                  {meaning.definitions.map((definition, index) => (
                    <li key={index}>
                      <h2>Definition: {definition.definition}</h2>
                      {definition.example && <p>Example: {definition.example}</p>}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
     
    </ul>
     
     
     
      ) : (
        <p className="text-red-500">Whoops, can't be empty...</p>
      )}
    </div>
    </div>
    </body>
  );
}


export default DictionaryApp;
