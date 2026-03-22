import * as React from 'react'
import './App.css'

const apiUrl = import.meta.env.VITE_API_URL;
const domain_name = apiUrl+"5ham/";

function App() {
  const [userUrl,setUserUrl] = React.useState('');
  const [shortUrl,setShortUrl] = React.useState('');
  const [isShort,SetIsShort] = React.useState(false);



  const handleInput = (e) => {
    setUserUrl(e.target.value);

  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch(apiUrl+"shorten",{ method:"POST", headers:{"Content-Type":"application/json"},body:JSON.stringify({url:userUrl}) })
    if (!response.ok) {
        const err = await response.json()
        console.error(err.error)
        return
    }

    const data = await response.json()
    setShortUrl(domain_name + data.shortenedUrl)
    SetIsShort(true)
    setUserUrl("")
  }

  const handleBack = () => {
    SetIsShort(false)
  }

  return <>
    {isShort ? <ShowShortUrl shortUrl={shortUrl} handleBack={handleBack} /> :<InputUrl handleInput={handleInput} handleSubmit={handleSubmit} userUrl={userUrl} />}
  </>
  
}

const InputUrl = ({ handleInput,handleSubmit,userUrl }) => {
    return (
    <>
    <div className='input-field'>
      <form onSubmit={handleSubmit} className='input-form'>
        <label htmlFor="urlInput" className='text-center font-semibold text-white text-4xl'>Enter The Url:</label>
        <input type="url" id='urlInput' className='urlInput border-2' onChange={handleInput} />
        <button type='submit' disabled={!userUrl} className='shorten-btn border-0' >Shorten It</button>
      </form>
    </div>
    </>
  )

}

const ShowShortUrl = ({ shortUrl,handleBack }) => {
  return (
    <>
    <div className='input-form'>
      <p className='text-center font-semibold text-white text-4xl'>The Shortened Url is:</p>
      <a href={shortUrl} target='_blank' className='text-center font-semibold text-white text-3xl underline'>{shortUrl}</a>
      <button onClick={handleBack} className='shorten-btn border-0'>Shortened Another Url</button>
    </div>
    </>
  )
}

export default App
