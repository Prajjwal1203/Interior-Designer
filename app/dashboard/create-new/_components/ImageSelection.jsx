import Image from 'next/image'
import React from 'react'

function ImageSelection() {
  return (
    <div>
      <label>Select Image of Your Room</label>
      <div>
        <label htmlFor='upload-image'>
          <div className={`p-28 border rounded-xl border-dotted`}>
            <Image src={'/download.png'} width={70} height={70} alt="img"></Image>
          </div>
        </label>
        <input type="file" accept='image/*' id="upload-image" style={{display:'none'}}></input>
      </div>
    </div>
  )
}

export default ImageSelection
