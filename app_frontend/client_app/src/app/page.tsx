"use client";

import { useState } from "react";
import Links from "./modules/api_routes_links";
import { TbLoader3 } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  const [current_output_res, set_current_output_res] = useState("")
  const [LoadReq, set_LoadReq] = useState(false)

  async function get_api(link_path_api: string) {

    try {

      set_LoadReq(true)

      // delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      const res_api = await fetch(link_path_api)

      const res_json = await res_api.json()

      const res_output = JSON.stringify(res_json, null, 3)

      set_current_output_res( res_output )

    } catch(error) {

      const res_output_error = JSON.stringify({error: "HOUVE UM ERRO AO TENTAR RECEBER A RESPOSTA DO SERVIDOR"})

      set_current_output_res( res_output_error )

      console.log(res_output_error)

      console.error(error)

    } finally {

      set_LoadReq(false)

    }

  }

  return (

    <div className="p-8">

      <div className="mb-4">

        <h1 className="text-5xl text-center text-white drop-shadow-2xl">CLIENT RUNNING WITH DOCKER</h1>

      </div>

      <div className="bg-gray-100 p-4 flex flex-col gap-4 rounded-md mb-4">

        <h2 className="text-center text-2xl text-orange-500">Responses of the requests</h2>

        <div className="flex justify-center">

          <div className="bg-blue-500 grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-4 w-3/4 rounded-md">

            {Links.map((link, index) => (

              <button
                key={index}
                className="bg-orange-700 drop-shadow-2xl hover:bg-orange-500 p-3 rounded-md text-gray-100 text-lg hover:scale-95 duration-200"
                onClick={() => get_api(link.complete_name)}
              >
                {link.short_name}
              </button>

            ))}

          </div>

        </div>

        <div className="flex justify-center">

          <div className="w-3/4">

            <div className="bg-orange-500 py-2 px-4 rounded-t-md text-gray-100">

              Current output response

            </div>

            <div className="bg-orange-700 text-gray-200 p-4 h-96 rounded-b-md overflow-auto scrollbar_main">

              {LoadReq ? (

                <div className="grid w-full h-full place-content-center">

                  <TbLoader3 size={70} className="drop-shadow-2xl text-white animate-spin" />

                </div>

              ) : (

                <pre>{current_output_res}</pre>

              )}

            </div>

          </div>

        </div>

      </div>

      <div className="flex justify-center w-full">

        <Link className="w-1/2" href={`http://localhost:${process.env.NEXT_PUBLIC_SERVER_PORT}/`} rel="noopener noreferrer">

          <p className="p-4 text-center backdrop-brightness-75 hover:bg-orange-700 hover:scale-95 duration-200 font-semibold border-4 border-gray-100 text-gray-100 rounded-md">
            GO TO SERVER SIDE
          </p>
          
        </Link>

      </div>

    </div>
  );
}
