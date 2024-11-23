"use client"
import React from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'

function CreateNew() {
   const onHandleInputChange=(value,fieldName)=>{

  }
  return (
    <div>
      <h2 className='font-bold text-4xl text-primary text-center'> Experience the Magic of AI Remodelling </h2>
      <p className='text-center text-gray-500'>Transform any room with a click.Select a space,choose a style and watch as AI instantly reimagines your Environment</p>


      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
        <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')}></ImageSelection>

        <div>
          {/*Room type */}
         <RoomType selectedRoomType={(value)=>onHandleInputChange(value,'room')}></RoomType>

          {/*Design Type */}
          <DesignType></DesignType>

          {/*Adiitional Requirements(optional) */}

        </div>
      </div>
    </div>
  )
}

export default CreateNew
