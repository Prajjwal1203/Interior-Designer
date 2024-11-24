"use client"
import React,{useState} from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { uploadBytes } from 'firebase/storage'

function CreateNew() {
  const [formData,setFormData]=useState([]);
   const onHandleInputChange=(value,fieldName)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:value
    }))
    console.log(formData)

  }

  const GenerateAiImage= async()=>{
    const rawImageUrl = await SaveRawImageToFirebase();
  //  const result = await axios.post('/api/redesign-room',formData)
  //  console.log(result)

  }

  const SaveRawImageToFirebase=async()=>{
    const fileName=Date.now()+"_raw.png";
    const imageRef = ref(storage,'room-redesign/'+fileName);

    await uploadBytes(imageRef,formData.image).then(resp=>{
      console.log('File Uploaded.......')
    })


    const downloadUrl=await getDownUrl(imageRef); 
    console.log(downloadUrl);
    return downloadUrl
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
          <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')}></DesignType>

          {/*Adiitional Requirements(optional) */}
          <AdditionalReq additionalRequirementInput={(value)=>onHandleInputChange(value,'additionalReq')}></AdditionalReq>

          <Button className='w-full mt-5' onClick={GenerateAiImage}>Generate</Button>
          <p className='text-sm text-gray-400 mb-52'>NOTE:1 Credit will use to redesign your Room</p>
        </div>
      </div>
    </div>
  )
}

export default CreateNew
