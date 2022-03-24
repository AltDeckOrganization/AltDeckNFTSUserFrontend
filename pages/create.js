/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { AiOutlinePlusCircle, AiOutlineCloudUpload } from "react-icons/ai";

//services
import { getCollections } from "../services/collections";
import SEO from "../components/seo/SEO";

//components
import CustomSelect from "../components/customSelect";
import AttributesForm from "../components/attributesForm";
import CreatorsForm from "../components/creatorsForm";
import CreateCollectionModal from "../components/createCollectionModal";

const Create = () => {
  const inputFile = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [mediaType, setMediaType] = useState("");
  const [file, setFile] = useState(null);
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const { publicKey } = useWallet();

  const fetchCollections = async () => {
    try {
      const { data } = await getCollections(publicKey.toBase58());
      setCollections(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  useEffect(() => {
    if (publicKey) fetchCollections();
  }, [fetchCollections, publicKey]);

  return (
    <main className="min-h-[100vh] py-10 w-[610px] mx-auto">
      <SEO />

      <h1 className="font-semibold text-center text-[26px] mb-10">
        Create new Item
      </h1>
      <h3 className="font-medium text-[20px] mb-4">Upload File</h3>
      <div
        onDragEnter={dragEnter}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        className="w-full h-[329px] dropzone-container flex justify-between items-center flex-col py-10"
        onClick={onButtonClick}
      >
        <p className="text-[20px] text-black1 font-medium">JPG, PNG, GIF</p>
        <img src="/images/upload-icon.svg" alt="" />
        <div className="flex flex-col items-center space-y-1">
          <p className="text-[14px] text-black1 font-semibold">
            Drag and Drop File
          </p>
          <p className="text-black1 text-[14px]">
            or
            <span className="ml-1 font-semibold">
              browse media on your device
            </span>
          </p>
        </div>
        <input
          ref={inputFile}
          hidden
          type={"file"}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      {file && (
        <div className="flex flex-row items-center mt-4 space-x-2">
          <AiOutlineCloudUpload size={30} color="#50C9C3" />
          <p className="italic font-medium text-gray1">{file.name}</p>
        </div>
      )}
      <h3 className="font-medium text-[20px] mb-4 mt-20">Select media type</h3>
      <CustomSelect
        options={["image", "video", "audio"]}
        value={mediaType}
        label={"Select file type"}
        onSelect={setMediaType}
      />
      <h3 className="font-medium text-[20px] mb-4 mt-10">
        Selection collection
      </h3>
      <CustomSelect
        options={collections}
        value={selectedCollection}
        label={"Select existing NFT collection"}
        onSelect={setSelectedCollection}
        emptyLabel={"You have no collections"}
        nested
        valueKey={"name"}
      />
      <button
        onClick={() => setOpenModal(true)}
        className="p-0 mx-auto text-[#868686] mt-2 w-full flex flex-row items-center justify-center"
      >
        Create new NFT collection
        <AiOutlinePlusCircle className="ml-2" />
      </button>
      <h3 className="font-medium text-[20px] mb-4 mt-10">Name</h3>
      <input
        placeholder="NFT Name"
        className="border border-[#888888] rounded-lg w-full h-[50px] pl-4 focus:ring-0 focus:ring-transparent ring-0 focus:outline-none"
      />
      <h3 className="font-medium text-[20px] mb-4 mt-10">Description</h3>
      <textarea
        rows={6}
        placeholder="Description of your item"
        className="border border-[#888888] rounded-lg w-full px-4 focus:ring-0 focus:ring-transparent ring-0 focus:outline-none py-2"
      ></textarea>
      <h3 className="font-medium text-[20px] mb-4 mt-10">Attributes</h3>
      <AttributesForm />
      <h3 className="font-medium text-[20px] mb-4 mt-10">
        Royalties and Creator Splits
      </h3>
      <p className="text-[#888888] text-[16px]">
        Royalties ensure that you continue to get compensated for your work
        after its initial sale.
      </p>
      <h4 className="font-medium text-[18px] mb-1 mt-4">Royalty percentage</h4>
      <p className="text-[#888888] text-[16px]">
        This is how much each secondary sale will be paid out to the creators
      </p>
      <div className="flex flex-row items-center mt-6 space-x-2">
        <input
          type={"number"}
          className="border border-[#888888] w-[134px] h-[60px] rounded-xl text-[#888888] text-[36px] pl-4 py-2 focus:ring-0 focus:ring-transparent ring-0 focus:outline-none"
        />
        <p className="text-[#888888] text-[24px]">%</p>
      </div>
      <h4 className="font-medium text-[18px] mb-1 mt-6">Creators split</h4>
      <p className="text-[#888888] text-[16px]">
        This is how much of the proceeds from the initial sale and any royalties
        will be split out amongst the creators
      </p>
      {publicKey && <CreatorsForm creator={publicKey.toBase58()} />}
      <div className="flex flex-row items-end justify-end mt-14">
        <button className="px-5 py-2 font-medium text-white bg-primary text-[14px] rounded-md">
          Create Item
        </button>
      </div>
      <CreateCollectionModal
        open={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </main>
  );
};

export default Create;
