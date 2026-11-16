

import { useState } from 'react'
function Eslampadina() {
    function cambia() {
        const nuovoStato = !isOn;
        setIsOn(nuovoStato)

    }
    let [isOn, setIsOn] = useState(false)


    return (
        < div >

            <p>La lampadina è {isOn ? "accesa" : "spenta"}</p>
            <button onClick={cambia}>Accendi/spegni</button>

        </div >
    )
}


export default Eslampadina




