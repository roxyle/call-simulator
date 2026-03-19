"use client";
import { useEffect, useState } from "react";
import {
    Settings,
    MessageCircle,
    Calendar,
    Phone,
    Video,
    Music,
    BatteryMedium,
    Wifi,
} from "lucide-react";
import { WALLPAPERS, APP_ICONS } from "@/constants/fakeCall";

type Props = {
    wallpaperId: string;
    onOpenSettings: () => void;
};

function useCurrentTime() {
    const [time, setTime] = useState(() => {
        const now = new Date();
        return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    })

    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        setTime(
            `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`,
        );
        }, 10000);

        return () => clearInterval(interval);
    }, [])

    return time;
}

const ICON_MAP: Record<string, React.ReactNode> = {
    messages: <MessageCircle size={20} color="white" />,
    calendar: <Calendar size={20} color="white" />,
    settings: <Settings size={20} color="white" />,
    phone: <Phone size={20} color="white" />,
    video: <Video size={20} color="white" />,
    music: <Music size={20} color="white" />,
};

export default function HomeScreen({ wallpaperId, onOpenSettings }: Props) {
    const time = useCurrentTime()
    const wallpaper=WALLPAPERS.find((w) => w.id === wallpaperId) ?? WALLPAPERS[0]

    return (
        <div style={{
            minHeight: "100vh",
            width: "100%",
            background: wallpaper.gradient,
            display: "flex",
            flexDirection: "column",
            fontFamily:
            "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
            }}>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 20px 6px",
                    flexShrink: 0,
                    }}>
                    <span
                    style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#fff",
                        fontVariantNumeric: "tabular-nums",
                        textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                    }}>
                    {time}
                    </span>

                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Wifi size={16} color="white" />

                    <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>
                    5G
                    </span>

                    <BatteryMedium size={20} color="white" />
                </div>
            </div>

            <div
                style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(5, 1fr)",
                padding: "16px 20px 40px",
                gap: 12,
                }}>
                {APP_ICONS.map((app) => (
                <div onClick={app.clickable ? onOpenSettings : undefined} key={app.id}
                    style={{
                    gridRow: app.row,
                    gridColumn: app.col,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    cursor: app.clickable ? "pointer" : "default"
                    }}>
                        <div style={{
                            width: 52,
                            height: 52,
                            borderRadius: 14,
                            background: app.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.25)"
                            }}>
                            {ICON_MAP[app.id]}
                        </div>

                    <span style={{
                        fontSize: 10,
                        color: "#fff",
                        textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                        textAlign: "center"
                        }}>
                            {app.label}
                    </span>
                </div>
            ))}
        </div>
        </div>
    )
}
