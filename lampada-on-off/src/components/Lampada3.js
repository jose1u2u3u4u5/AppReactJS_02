import Image from "next/image";
import { useState } from "react";
import useSound from "use-sound";





export default function Lampada3() {
  const [estadoInterruptor, setEstadoInterruptor] = useState(false);
  const [contador, setContador] = useState(0)
  const boom = "/assets/boom.mp3";

  const [play, { stop }] = useSound(
    boom
  )

  function mudarLampada() {
    setEstadoInterruptor(!estadoInterruptor)
    if (estadoInterruptor == false) {
      setContador(contador + 1)
    }
  }
  if (contador == 5) {
    play()
    return <Image src={"/assets/boom.jpg"} width={286} height={388} />
  }


  return (
    <div>

      <h2>
        {
          contador < 5
            ? `Você já ligou ${contador} vez${contador == 2 ? "" : "es"} a lâmpada`
            : "Sua lâmpada queimou"
        }
      </h2>
      {
        estadoInterruptor == true
          ? <Image src={"/assets/acesa.png"} width={286} height={388} />
          : <Image src={"/assets/apagada.png"} width={286} height={388} />


      }
      <button onClick={mudarLampada}>Iterruptor</button>
    </div>



  );
}