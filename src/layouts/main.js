import React,{useState} from 'react';
import Mosaic from '../components/mosaic';
import Modal from '../components/modal';
import '../App.css';
import photo1 from '../photos/1.jpeg';
import hearts from '../photos/hearts.png'
import {Link} from 'react-scroll';
export default () => {


    const [on, setOn] = useState(false)
    const [selectedMsg, setSelectedMsg] = useState(0)
    const defaultMessages = [
        "Porque ese día fue el mejor me pudiste haber dado ❤️",
        "Estar contigo no se compara con el paraíso",
        "Porque a cualquier lado donde vayas quiero estar contigo",
        "Divertirme contigo es lo mejor que me puede pasar",
        "Eres la más hermosa de este mundo",
        "Eres mi mundo",
        "Nunca dejes de sonreír princesa",
        "Yo soy el más feliz si tú estás conmigo",
        "Por más aventuras juntos",
        "Por más sencillo que sea el momento contigo lo es todo",
        "A tu lado no me falta nada",
        "Déjame seguir haciéndote feliz"
    ]

    const [messages, setMessage] = useState(defaultMessages)

    const selectHandler = (msg) => {
        setOn(true);
        setSelectedMsg(msg)
    }

    const [respuesta, setRespuesta] = useState("")

    const [amor , setAmor ] = useState(false);

    const execute = () => {
        if(respuesta.toUpperCase().includes("SI")) {
            setAmor(true)
        }
    }
    
    const previa = (
        <div className="flex flex-col justify-items-center bg-pink-100 box-border">
        <h1 className="p-10 text-center font-beautiful">
            Estos son momentos que hemos pasado juntos y que han sido muy especiales para mi, sé que los recuerdas tanto como yo
        </h1>       
        <h2 className="p-1 text-center font-beautiful">&#10084;&#65039;</h2>
        <Mosaic setOn={selectHandler} />
        <Modal opened={on} setOn={setOn} message={messages[selectedMsg]} />

        <div className="flex flex-col justify-center items-center p-10">
            <h3 className="m-3">Tengo algo que decirte</h3>
            <Link  to="propuesta" spy={true} smooth={true} offset={50} duration={500}>
                <svg class="animate-bounce w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>        
                </svg>
            </Link>
        </div>

        <div name="propuesta" className="flex flex-col justify-center items-center p-10 h-screen" >
            
            <h1>Te gutaria ser mi novia?</h1>

            <input onChange={(event) => setRespuesta(event.target.value)} class="m-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="respuesta" type="text" placeholder="Respuesta" />

            <button onClick={execute} class="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Mandar respuesta
            </button>

            <div className="max-w-sm">
                <img src={hearts} />
            </div>
        </div>
        
    </div>
    )

    const amorPage = (
        <div className="bg-hearts w-screen h-screen flex convertible">
            <img src={photo1} className="img-amor"  />
            <div className="h-screen bg-red-800 barra" style={{width:"2%"}}></div>
            <div className=" flex items-center justify-center frase-amor" style={{width:"63%"}}>
                <h1 className="font-b bg-white ">Te prometo que seremos muy felices!</h1>
            </div>
        </div>
    )

    return amor ? amorPage : previa;    
}