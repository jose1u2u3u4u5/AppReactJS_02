import Image from "next/image";
import { useState } from "react";
import useSound from "use-sound";




export default function Home() {
  const [estadoInterruptor, setEstadoInterruptor] = useState (false);
  const [contador, setContador] = useState(0)
  
  

 function mudarLampada(){
  setEstadoInterruptor (!estadoInterruptor)
  if(estadoInterruptor == false)
  {
  setContador(contador +1)
  }
 }
 if (contador == 2)
 {
  return  <Image src={"/assets/boom.jpg"} width={286} height={388}/>
 } if(contador ==2)
 {
   boom
 }

  return (
      <div>

        <h2>
          {
            contador > 2
          ? `Você já ligou ${contador} vez${contador==2?"": "es"} a lâmpada`
          : "Sua lâmpada queimou"
          }
        </h2>
        {
          estadoInterruptor == true
        ? <Image src={"/assets/acesa.png"} width={286} height={388}/>
        : <Image src={"/assets/apagada.png"} width={286} height={388}/>
        
        
        }
        <button onClick={mudarLampada}>Iterruptor</button>
      </div>

    
      
  );
}
