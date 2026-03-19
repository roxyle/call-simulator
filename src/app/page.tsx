'use client'
import {useState} from 'react'
import {FAKE_CALL_DEFAULTS} from "@/constants/fakeCall"
import {Config} from "@/types/fakeCall"
import ConfigScreen from "@/components/fake-call/ConfigScreen"
import CallScreen from "@/components/fake-call/CallScreen"
import HomeScreen from "@/components/fake-call/HomeScreen"


function loadFromStorage():Config{
  try{
    const saved=localStorage.getItem('fakeCallConfig')
    return saved?{...FAKE_CALL_DEFAULTS,...JSON.parse(saved)}:{...FAKE_CALL_DEFAULTS}
  } catch{
    return{...FAKE_CALL_DEFAULTS}
  }
}

function saveToStorage(config:Config){
  try{
    localStorage.setItem("fakeCallConfig", JSON.stringify(config))
  } catch{}
}


export default function FakeCallPAge(){
  const[screen, setScreen]= useState<"config"| "call"|"home">("config")
  const[config, setConfig]=useState<Config>(loadFromStorage)


  function handleStart(newConfig:Config){
    setConfig(newConfig)
    saveToStorage(newConfig)
    setScreen("call")
    document.documentElement.requestFullscreen?.().catch(()=>{})
  }

  function handleEnd(){
    setScreen("home")
  }


  function handleOpenSettings(){
    setScreen("config")
    document.exitFullscreen?.().catch(()=>{})
  }

  return(
    <div style={{
      minHeight:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      background: screen==="call"?"#1c1c1e" :screen==="home"?"transparent" :"#f2f2f7",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: screen==="config"?"24px 16px" : 0
    }}>
      {screen==="config"&&(
        <ConfigScreen config={config} onStart={handleStart} onConfigChange={setConfig}/>
      )}

      {screen==="call"&&(
        <CallScreen config={config} onEnd={handleEnd}/>
      )}

      {screen==="home"&&(
        <HomeScreen wallpaperId={config.wallpaperId} onOpenSettings={handleOpenSettings}/>
      )}
    </div>
  )
}