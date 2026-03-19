'use client'
import {useState} from "react"
import { FAKE_CALL_DEFAULTS } from "@/constants/fakeCall"
import { styles } from "@/styles/fakeCall"
import { Config } from "@/types/fakeCall"
import { WALLPAPERS } from "@/constants/fakeCall"


type Props={
    config: Config
    onStart: (config:Config)=>void
    onConfigChange:(config:Config)=>void
}


export default function ConfigScreen({config, onStart, onConfigChange}:Props){

    const[localName,setLocalName]= useState(config.callerName)
    const[minSec,setMinSec]= useState(config.minSeconds)
    const[maxSec,setMaxSec]= useState(config.maxSeconds)
    const[wallpaperId, setWallpaperId]=useState(config.wallpaperId)


    function applyDefault(type:"name"|"number"){
        const name= type==="name"?FAKE_CALL_DEFAULTS.callerName:"+39 392 456 1239"
        setLocalName(name)
    }


    function handleStart(){
        const finalName= localName.trim()|| FAKE_CALL_DEFAULTS.callerName
        const safeMin= Math.min(minSec, maxSec)
        const safeMax= Math.max(minSec,maxSec)

        const newConfig={
            callerName: finalName,
            minSeconds: safeMin,
            maxSeconds: safeMax,
            wallpaperId: wallpaperId
        }

        onConfigChange(newConfig)
        onStart(newConfig)
    }



    const minMinutes= Math.floor(minSec/60)
    const minSecsRem= minSec%60
    
    const maxMinutes= Math.floor(maxSec/60)
    const maxSecsRem= maxSec%60

    return(
        <div style={styles.configWrapper}>
            <div style={styles.configCard}>
                <p style={styles.configTitle}>
                    Impostazioni
                </p>

                <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                        Nome o Numero Chiamante
                    </label>

                    <input type="text" value={localName} onChange={(elem)=> setLocalName(elem.target.value)}
                    placeholder="es. Maria Rossi" style={styles.input}/>
                </div>


                <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                        oppure usa un default
                    </label>

                    <div style={{display:"flex", gap:8}}>
                        <button onClick={()=>applyDefault("name")} style={styles.defaultBtn}>
                            nome generico
                        </button>
                        <button onClick={()=>applyDefault("number")} style={styles.defaultBtn}>
                            +39 123 456 7890
                        </button>
                    </div>
                </div>


                <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                        Timer iniziale minimo - {" "}

                        <span style={styles.timerValue}>
                            {String(minMinutes).padStart(2,"0")}:
                            {String(minSecsRem).padStart(2,"0")}
                        </span>
                    </label>

                    <input type="range" value={minSec} min={10} max={150} step={5}
                    onChange={(elem)=> setMinSec(Number(elem.target.value))}
                    style={styles.range}/>
                </div>


                <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                        Timer iniziale massimo - {" "}
                        <span style={styles.timerValue}>
                            {String(maxMinutes).padStart(2, "0")}:
                            {String(maxSecsRem).padStart(2, "0")}
                        </span>
                    </label>

                    <input type="range" value={maxSec} min={10} max={150} step={5}
                    onChange={(elem)=> setMaxSec(Number(elem.target.value))}
                    style={styles.range}/>

                </div>



                <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                        Sfondo Home Screen
                    </label>
                    <div style={{display:"flex", gap:8}}>
                        {
                            WALLPAPERS.map(
                                (wallpaper)=>(
                                    <div key={wallpaper.id} onClick={()=>setWallpaperId(wallpaper.id)}
                                    style={{
                                        flex:1,
                                        height:48,
                                        borderRadius:10,
                                        background: wallpaper.gradient,
                                        cursor:"pointer",
                                        border: wallpaperId===wallpaper.id?"2px solid #d2691e":"2px solid transparent",
                                        boxSizing:"border-box"
                                    }}
                                    />
                                )
                            )
                        }
                    </div>
                    <label style={styles.label}>
                        ⚠️ Al termine della finta-chiamata verrà visualizzata una finta-schermata Home del colore scelto.
                        Tutte le icone al suo interno sono finte, tranne l&#39;icona &#34;impostazioni&#34;, che potrai cliccare/toccare per tornare a questa schermata.
                    </label>
                </div>



                <button onClick={handleStart} style={styles.startBtn}>
                    Avvia Simulazione
                </button>

            </div>
        </div>
    )
}