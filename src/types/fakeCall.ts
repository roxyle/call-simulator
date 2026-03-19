export type Wallpaper={
    id: string,
    label: string,
    gradient: string
}


export type AppIcon={
    id: string,
    label: string,
    gradient: string,
    row: number,
    col: number,
    clickable?: boolean
}


export type Config={
    callerName: string,
    minSeconds: number,
    maxSeconds: number,
    wallpaperId: string
}