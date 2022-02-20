import Image from "next/image"
import NotFound from '../public/404.svg'

export default function Custom404() {
    return (
        <div className="flex flex-col justify-center items-align pt-10">
            <Image src={NotFound} height={300} width={100} alt="404" className="mt-2"/>
            <h1 className="text-center text-bold mt-7 text-xl md:text-5xl">Page Not Found</h1>
        </div>
    )
  }