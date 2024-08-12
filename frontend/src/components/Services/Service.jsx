import React,{useState} from 'react'
import Image1 from '../../assets/Image5.png'
import Image2 from '../../assets/Image3.png'
import Image3 from '../../assets/Image6.png'
import Image4 from '../../assets/Image7.png'
import Image5 from '../../assets/Image8.png'
import Image6 from '../../assets/Image9.png'


function Service() {
  const[val1,setopa1]=useState({});
  const[val2,setopa2]=useState({});
  const[val3,setopa3]=useState({});
  const[val4,setopa4]=useState({});
  const[val5,setopa5]=useState({});
  const[val6,setopa6]=useState({});
  const[image,setImage]=useState(Image1);


  const [text1,setText1]=useState('Dars-E-Nizami.')
  const [text2,setText2]=useState('Dars-E-Nizami.')
  const [text3,setText3]=useState('Dars-E-Nizami.')
  const [text4,setText4]=useState('Dars-E-Nizami.')
  const [text5,setText5]=useState('Dars-E-Nizami.')
  // const [text6,setText6]=useState('Social Media App.')

  function handlIdial(){
    setText1("Dars-E-Nizami.")
    setText2('Dars-E-Nizami.')
    setText3('Dars-E-Nizami.')
    setText4('Dars-E-Nizami.')
    setText5('Dars-E-Nizami.')
    setImage(Image1)
    const obj={
      "background-image": "linear-gradient(to right, #8b5cf6, #f472b6, #ec4899)",
      "border-radius": "0.75rem", 
      "box-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "text-align": "center"
    }
    setopa1(obj)
    setopa2({})
    setopa3({})
    setopa4({})
    setopa5({})
    setopa6({})
  }
  
  function handleSecurity(){
    setText1('Comming soon.')
    setText2('Comming soon.')
    setText3('Comming soon.')
    setText4('Comming soon.')
    setText5('Comming soon.')
    setImage(Image2)
    const obj={
      "background-image": "linear-gradient(to right, #8b5cf6, #f472b6, #ec4899)",
      "border-radius": "0.75rem", 
      "box-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "text-align": "center"
    }
    setopa1({})
    setopa2(obj)
    setopa3({})
    setopa4({})
    setopa5({})
    setopa6({})

  }
  function handleSoftware(){
    setText1("Comming soon.")
    setText2("Comming soon.")
    setText3("Comming soon.")
    setText4("Comming soon.")
    setText5("Comming soon.")

    setImage(Image3)
    const obj={
      "background-image": "linear-gradient(to right, #8b5cf6, #f472b6, #ec4899)",
      "border-radius": "0.75rem", 
      "box-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "text-align": "center"
    }
    setopa1({})
    setopa2({})
    setopa3(obj)
    setopa4({})
    setopa5({})
    setopa6({})
  }
  function handleCloud(){
    setText1( "Comming soon.")
    setText2("Comming soon.")
    setText3('Comming soon.')
    setText4('Comming soon.')
    setText5('Comming soon.')
    setImage(Image4)
    const obj={
      "background-image": "linear-gradient(to right, #8b5cf6, #f472b6, #ec4899)",
      "border-radius": "0.75rem", 
      "box-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "text-align": "center"
    }
    setopa1({})
    setopa2({})
    setopa3({})
    setopa4(obj)
    setopa5({})
    setopa6({})
  }
  function handleDigital(){
    setText1("Comming soon.")
    setText2("Comming soon).")
    setText3('Comming soon).')
    setText4('Comming soon.')
    setText5('Comming soon.')
    setImage(Image5)
    const obj={
      "background-image": "linear-gradient(to right, #8b5cf6, #f472b6, #ec4899)",
      "border-radius": "0.75rem", 
      "box-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "text-align": "center"
    }
    setopa1({})
    setopa2({})
    setopa3({})
    setopa4({})
    setopa5(obj)
    setopa6({})
  }

  function handleProduct(){
    setText1("Comming soon.")
    setText2("Comming soon.")
    setText3("Comming soon.")
    setText4("Comming soon.")
    setText5('Comming soon.')
    setImage(Image6)
    const obj={
      "background-image": "linear-gradient(to right, #8b5cf6, #f472b6, #ec4899)",
      "border-radius": "0.75rem", 
      "box-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "text-align": "center"
    }
    setopa1({})
    setopa2({})
    setopa3({})
    setopa4({})
    setopa5({})
    setopa6(obj)
  
  }

  return (
    <div id='services' className='bg-black grid gap-5 sm:grid-cols-2 sm:min-h-[500px] min-w-[360px]  '>
      <div className=' sm:col-span-2  sm:w-[350px] p-3 m-auto text-center  sm:text-5xl text-3xl  font-extrabold  bg-gradient-to-r from-purple-700 via-pink-600 to-pink-800 rounded-lg shadow-xl shadow-red-700 '>
        <h2 className=' '>Our Courses</h2>
      </div>


      <div className=' sm:col-span-2 text-gray-600 grid  sm:grid-cols-2'>

      <div className='sm:col-span-1  w-[330px] sm:min-w-[500px] m-auto'>

        <div className='sm:text-4xl text-2xl  font-extrabold '>
        <h1 onMouseOver={handlIdial} className='p-2 hover:text-gray-800' style={val1} >Dars-E-Nizami.</h1>
        <h1 onMouseOver={handleSecurity} className='p-2 hover:text-gray-800' style={val2}>Course-B.</h1>
        <h1 onMouseOver={handleSoftware} className='p-2 hover:text-gray-800' style={val3}>Course-C.</h1>
        <h1 onMouseOver={handleCloud} className='p-2 hover:text-gray-800' style={val4}>Course-D.</h1>
        <h1 onMouseOver={handleDigital} className='p-2 hover:text-gray-800' style={val5}>Course-E.</h1>
        <h1 onMouseOver={handleProduct} className='p-2 hover:text-gray-800' style={val6}>Course-F.</h1>
        </div>
      </div>

        <div className=' mt-2  w-[340px] m-auto'>
            <div className='relative rounded-sm '>
              <img className='h-[23rem] w-[23rem] object-cover opacity-80 absolute rounded-md ' src={image}></img>
              <div className='flex items-center justify-around flex-col font-bold h-[23rem] w-[23rem] object-cover bg-black text-white border-4 border-blue-600  opacity-70 rounded-md hover:rotate-[-5deg] hover:skew-x-[-5deg] transition duration-1000 ease-in shadow-xl shadow-rose-800'>
                <p className='font-bold text-2xl bg-blue-500 p-2 rounded-lg '>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                <p>{text4}</p>
                <p>{text5}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
