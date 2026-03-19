import {Wallpaper, AppIcon} from "@/types/fakeCall"

export const FAKE_CALL_DEFAULTS={
    callerName: "Lucas Costa",
    minSeconds: 15,
    maxSeconds: 150,
    wallpaperId: "sky",
}

export const WALLPAPERS: Wallpaper[]=[
    {
        id: "sky",
        label: "cielo",
        gradient: "linear-gradient(160deg, #87ceeb 0%, #4a9fd4 40%, #1a6fa8 100%)"
    },
    {
        id: "sunset",
        label: "tramonto",
        gradient: "linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
    },
    {
        id: "forest",
        label: "foresta",
        gradient: "linear-gradient(160deg, #134e5e 0%, #1a6b3c 60%, #0d3b22 100%)"
    },
]

export const APP_ICONS: AppIcon[]=[
    {
        id: "messages",
        label: "messaggi",
        gradient: "linear-gradient(135deg,#f093fb,#f5576c)",
        row: 1,
        col: 1
    },
    {
        id: "calendar",
        label: "calendario",
        gradient: "linear-gradient(135deg,#4facfe,#00f2fe)",
        row: 1,
        col: 2
    },
    {
        id: "settings",
        label: "impostazioni",
        gradient: "#636366",
        row: 1,
        col: 4,
        clickable: true
    },
    {
        id: "phone",
        label: "telefono",
        gradient: "linear-gradient(135deg,#43e97b,#38f9d7)",
        row: 2,
        col: 1
    },
    {
        id: "video",
        label: "video",
        gradient: "linear-gradient(135deg,#fa709a,#fee140)",
        row: 3,
        col: 4
    },
    {
        id: "music",
        label: "musica",
        gradient: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
        row: 5,
        col: 4
    },
];