import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';

import './Signup.css'

export default function Signup() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [displayName,setDisplayName] = useState('');
  const [thumbnail,setThumbnail] = useState(null);
  const [thumbnailError,setThumbnailError] = useState(null);

  const { signup, isPending, error} = useSignup();

  const handleFileChange = (e) =>{
    setThumbnail(null);
    let selected = e.target.files[0];

    // check if file selected
    if(!selected){
      setThumbnailError('Please select a file.')
      return
    }
    // check if it's an image file
    if(!selected.type.includes('image')){
      setThumbnailError('Please select an image file.')
      return
    }
    //check the size
    if(selected.size > 100000){
      setThumbnailError('Image file size must be less than 100kb')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email,password,displayName,thumbnail);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input 
          required
          type="email"
          onChange={e=>setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          required
          type="password"
          onChange={e=>setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input 
          required
          type="text"
          onChange={e=>setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input 
          required
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Signup</button> }
      {isPending && <button className="btn" disabled>Loading...</button> }
      {error && <div>{error}</div>}
    </form>
  )
}
