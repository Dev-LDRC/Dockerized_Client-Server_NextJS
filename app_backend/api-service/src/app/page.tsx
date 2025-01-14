"use client";

import { BiSolidCopy } from "react-icons/bi";
import Links from "./modules/api_routes_links";
import clipboard from "./modules/clipboard";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

export default function Home() {

  function handleClipboard(link_text: string) {

    clipboard(link_text)

    toast( "Link copiado com Sucesso!", {
      position: "top-center",
      autoClose: 1250,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    }
    )

  }

  return (

    <div className="flex flex-col p-8">

      <div className="mb-4">

        <h1 className="text-5xl text-center text-white drop-shadow-2xl">SERVER RUNNING WITH DOCKER</h1>

      </div>

      <div className="bg-gray-100 p-4 flex flex-col gap-4 rounded-md mb-4">

        <h2 className="text-center text-2xl text-blue-500">Api Routes</h2>

        <div className="flex justify-center">

          <div className="bg-blue-500 grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-4 w-3/4 rounded-md">

            {Links.map((link, index) => (

              <div key={index} className="bg-gray-100 text-blue-500 p-2 rounded-md min-w-10 break-all">

                <div className="flex items-center w-full">

                  <div className="w-4/5 text-start">
                    <p className=" text-sm font-semibold">{link}</p>
                  </div>
                  <div className="w-1/5 justify-end flex">
                    <ToastContainer />  
                    <button className="items-center" onClick={() => handleClipboard(link)}><BiSolidCopy className={`text-orange-500 items-center hover:opacity-50`} size={23} /></button>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="flex justify-center w-full">

        <Link className="w-1/2" href={`http://localhost:${process.env.NEXT_PUBLIC_CLIENT_PORT}/`} rel="noopener noreferrer">

          <p className="p-4 text-center backdrop-brightness-75 hover:bg-blue-500 hover:scale-95 duration-200 font-semibold border-4 border-gray-100 text-gray-100 rounded-md">
            GO TO CLIENT SIDE
          </p>
          
        </Link>

      </div>

    </div>

  );

}
