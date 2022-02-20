import { createRef } from "react";
import { Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";

const CreateCollectionModal = ({ open, closeModal }) => {
  const fileInputRef = createRef();
  const profileInputRef = createRef();

  const openCoverDialog = () => {
    fileInputRef.current.click();
  }

  const openProfileDialog = () => {
    profileInputRef.current.click();
  }

  return (
    <Modal
      open={open}
      onClose={closeModal}
      className="flex items-center justify-center"
    >
      <div
        className="w-[606px] h-[609px] rounded bg-white pb-[40px]"
      >
        <div className="relative flex flex-row items-center justify-center py-4 border-b-[#E3E7ED] border-b">
          <h2 className="text-[#040A1D] text-[20px] font-medium m-0">Create a New Collection</h2>
          <button
            className="absolute ml-10 top-4 right-10"
            onClick={closeModal}
          >
            <IoClose size={30} color={'#8892A2'}/>
          </button>
        </div>
        <form
          className="px-[20px] pt-[30px] overflow-y-scroll h-[95%]"
        >
          <h3
            className='font-medium text-[16px] mb-2 text-[#3D4356]' 
          >
            Name
          </h3>
          <input 
            placeholder=''
            className='bg-[#F4F5F7] rounded h-[45px] pl-4 w-full focus:ring-0 focus:ring-transparent ring-0 focus:outline-none mb-6'
          />
          <h3
            className='font-medium text-[#3D4356] text-[16px] mb-2' 
          >
            Description
          </h3>
          <input 
            placeholder=''
            className='bg-[#F4F5F7] rounded h-[45px] pl-4 w-full focus:ring-0 focus:ring-transparent ring-0 focus:outline-none mb-6'
          />
          <h3
            className="font-medium text-[16px] mb-2 text-[#3D4356]"
          >
            Cover Image
          </h3>
          <div
            onClick={openCoverDialog}
            className="h-[200px] border border-gray-300 border-dashed rounded-lg flex items-center justify-center flex-col mb-6 w-[200px]"
          >
            <input 
              ref={fileInputRef}
              type={"file"}
              hidden
            />
            <AiOutlineCloudUpload 
              size={35}
            />
            <p className="text-[14px] text-center">Browse media on your device</p>
          </div>
          <h3
            className="font-medium text-[16px] mb-2 text-[#3D4356]"
          >
            Profile Picture
          </h3>
          <div
            onClick={openProfileDialog}
            className="h-[200px] border border-gray-300 border-dashed rounded-lg flex items-center justify-center flex-col mb-6 w-[200px]"
          >
            <input 
              ref={profileInputRef}
              type={"file"}
              hidden
            />
            <AiOutlineCloudUpload 
              size={35}
            />
            <p className="text-[14px] text-center">Browse media on your device</p>
          </div>
          <div
            className="flex flex-row justify-end mb-8"
          >
            <button
              className="px-6 py-2 text-white rounded bg-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default CreateCollectionModal
