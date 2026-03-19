'use client'
import {useState, useEffect, useRef} from "react"
import {styles} from '@/styles/fakeCall'
import { Building2 } from "lucide-react"
import { Config } from "@/types/fakeCall"

type Props={
    config:Config,
    onEnd: ()=>void
}

function isPhoneNumber(name: string): boolean {
    return /^[\d\s\+\-\(\)]+$/.test(name.trim());
}



function getInitials(name: string): string {
    if (!name || !name.trim()) return "?";
    const parts = name.trim().split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}


function formatTime(seconds:number):string{
    const minuti=Math.floor(seconds/60)
    const secondi= seconds%60

    return `${String(minuti).padStart(2,"0")}:${String(secondi).padStart(2,"0")}`
}


function BuildingIcon() {
    return <Building2 size={28} color="#ffffff" strokeWidth={1.5} />;
}


function MuteIcon(){
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
            <path d="M15 9.34V4a3 3 0 0 0-5.94-.6" />
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
    )
}


function SpeakerIcon(){
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
    )
}


function EndCallIcon(){
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
    )
}




export default function CallScreen({config,onEnd}: Props){
    const[seconds,setSeconds]= useState(()=> {
        const min= config.minSeconds
        const max= config.maxSeconds

        return Math.floor(Math.random()*(max-min+1)) +min
    })

    const[muted,setMuted]=useState(false)
    const[speaker,setSpeaker]= useState(false)
    const intervalRef= useRef<ReturnType<typeof setInterval> | null>(null)


    useEffect(()=>{
        intervalRef.current= setInterval(()=>{
            setSeconds((s)=>s+1)
        },1000)
        return()=>{
            if(intervalRef.current) clearInterval(intervalRef.current)
        }
    },[])




    return(
        <div style={styles.callWrapper}>
            <div style={styles.callScreen}>
                <div style={styles.callTop}>
                    <div style={styles.avatar}>
                        {
                            isPhoneNumber(config.callerName)?
                                <BuildingIcon /> 
                                : getInitials(config.callerName)
                        }
                    </div>

                    <p style={styles.callerName}>
                        {config.callerName}
                    </p>

                    <p style={styles.timer}>
                        {formatTime(seconds)}
                    </p>
                </div>


                <div style={styles.callControls}>
                    <div style={styles.controlRow}>
                        <div style={styles.controlItem}>
                            <button onClick={()=>setMuted((muto)=>!muto)}
                                style={{...styles.controlBtn, background: muted? "#636366":"#3a3a3c"}}>
                                <MuteIcon/>
                            </button>
                            <p style={styles.controlLabel}>
                                muto
                            </p>
                        </div>


                        <div style={styles.controlItem}>
                            <button onClick={()=>setSpeaker((vivavoce)=>!vivavoce)}
                                style={{...styles.controlBtn, background: speaker? "#636366":"#3a3a3c"}}>
                                <SpeakerIcon/>
                            </button>
                            <p style={styles.controlLabel}>
                                vivavoce
                            </p>
                        </div>
                    </div>


                    <div style={styles.endRow}>
                        <div style={styles.controlItem}>
                            <button onClick={onEnd} style={styles.endBtn}>
                                <EndCallIcon/>
                            </button>
                            <p style={styles.controlLabel}>
                                termina
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}