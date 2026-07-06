import { useEffect, useState } from "react";

import { previewUrl } from "../../services/preview";

export default function Preview(){

    const [mobile,setMobile] = useState(false);
    const [preview,setPreview] = useState(previewUrl());
    useEffect(()=>{

    const interval = setInterval(()=>{

        setPreview(

            previewUrl() + "?t=" + Date.now()

        );

    },3000);

    return ()=>clearInterval(interval);

},[]);
    return(

        <div>

            <h2>

                Live Preview

            </h2>

            <button

                onClick={()=>

                    setMobile(!mobile)

                }

            >

                {

                    mobile

                    ?

                    "Desktop Preview"

                    :

                    "Mobile Preview"

                }

            </button>

            <br/>

            <br/>

            <iframe

                title="preview"

                src={preview}

                width={

                    mobile

                    ?

                    "390"

                    :

                    "100%"

                }

                height="700"

                style={{

                    border:"1px solid #ddd",

                    margin:"auto",

                    display:"block"

                }}

            />

        </div>

    );

}