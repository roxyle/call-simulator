"use client";

import { useState } from "react";
import { FAKE_CALL_DEFAULTS } from "@/constants/fakeCall";
import ConfigScreen from "@/components/fake-call/ConfigScreen";
import CallScreen from "@/components/fake-call/CallScreen";

type Config = {
  callerName: string;
  minSeconds: number;
  maxSeconds: number;
};

function loadFromStorage(): Config {
  try {
    const saved = localStorage.getItem("fakeCallConfig");
    return saved ? { ...FAKE_CALL_DEFAULTS, ...JSON.parse(saved) } : { ...FAKE_CALL_DEFAULTS };
  } catch {
    return { ...FAKE_CALL_DEFAULTS };
  }
}

function saveToStorage(config: Config) {
  try {
    localStorage.setItem("fakeCallConfig", JSON.stringify(config));
  } catch {}
}

export default function FakeCallPage() {
  const [screen, setScreen] = useState<"config" | "call">("config");
  const [config, setConfig] = useState<Config>(loadFromStorage);

  function handleStart(newConfig: Config) {
    setConfig(newConfig)
    saveToStorage(newConfig)
    setScreen("call")
    document.documentElement.requestFullscreen?.().catch(()=>{})
  }

  function handleEnd() {
    setScreen("config")
    document.exitFullscreen?.().catch(() => {})
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: screen === "call" ? "#1c1c1e" : "#f2f2f7",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: screen === "call" ? 0 : "24px 16px",
    }}>
      {screen === "config" ? (
        <ConfigScreen config={config} onStart={handleStart} onConfigChange={setConfig} />
      ) : (
        <CallScreen config={config} onEnd={handleEnd} />
      )}
    </div>
  );
}