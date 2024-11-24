import React ,{useState}from 'react'
import Image from 'next/image'

function DesignType({selectedDesignType}) {
  const Designs=[
    {
      name:'Modern',
      image:'/modern.jpeg',
    },
    {
      name:'Traditional',
      image:'/traditional.jpeg',
    },
    {
      name:'Rustic',
      image:'/rustic.jpeg',
    },
    {
      name:'Bohemian',
      image:'/bohemian.jpeg',
    },
    {
      name:'Industrial',
      image:'/industrial.jpeg',
    },
    {
      name:'Minimalist',
      image:'/minimalist.jpeg',
    },
  ]
  const [selectedOption,setSelectedOption]=useState();
  return (
    <div className='mt-5'>
      <label className='text-gray-500'>Select Interior Design for your Room</label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Designs.map((design,index)=>(
          <div key={index} onClick={()=>{setSelectedOption(design.name);selectedDesignType(design.name)}}>
            <Image src={design.image} width={100} height={100} className={`h-[70px] rounded-md hover:scale-105 transition-all ${design.name==selectedOption&&'border-2 border-primary rounded-md p-1'}`} alt="anc"></Image>
            <h2>{design.name}</h2>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default DesignType
