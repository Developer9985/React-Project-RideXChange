import React, { useState } from 'react'
import {Button, ButtonGroup} from "@nextui-org/button";
import { IoCloseCircle } from "react-icons/io5";
import { Content } from '@radix-ui/react-select';
import { uploadBytes,ref, getDownloadURL } from 'firebase/storage';
import { Upload } from 'lucide-react';
import { storage } from './../../../configs/firebaseConfig.js';
function UploadImages() {

    const [selectedFileList, setSelectedFileList] = useState([])
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const onFileSelected = (event)=>{

        const files = event.target.files;
        
        for(let i=0; i<files?.length; i++){
            const file = files[i];
            setSelectedFileList((prev)=>[...prev,file]);  
        }
        
    }

    const onImageRemove = (image,index)=>{

        const result = selectedFileList.filter((item)=> item!=image);
        setSelectedFileList(result);

    }

    const UploadImages=()=>{
        selectedFileList.forEach((file)=>{

            const fileName = Date.now()+'.jpeg';
            const storageRef = ref(storage,'RideXChange/'+fileName);
            const metaData = {
                contentType:'image/jpeg'
            }

            uploadBytes(storageRef,file,metaData).then((snapShot)=>{
                console.log("Upload Sucess");
            })
        })
    }




  return (
    <div>
       
        <div>
                <h2 className='font-medium text-2xl mb-6 mt-4 w-52'>Upload Car Images</h2>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 '>

                    {selectedFileList.map((image,index)=>(

                        <div key={index}>
                            <IoCloseCircle className='relative top-16 left-[180px] size-5'  
                            onClick={()=>onImageRemove(image,index)}/>
                            <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl mt-10' alt="" />
                        </div>
                    ))}


                    <div className='w-40'>
                            <label
                                htmlFor="upload-images" >
                            <div className='p-5 border rounded-2xl  w-40 h-26 mt-20 bg-black flex justify-center hover:shadow-md cursor-pointer'>
                        <h2 className='text-[40px] text-white'>+</h2>
                        </div>
                     </label>
                            <input type="file" multiple={true} id='upload-images' className='opacity-0' 
                            onChange={onFileSelected}/>

                </div>

            </div>

                
            
        </div>
        <Button onClick={UploadImages} className='bg-black text-white mt-4 p-4'>Upload Image</Button>
    </div>
  )
}

export default UploadImages