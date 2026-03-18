import {CSSProperties} from "react";


type Styles={
    [key:string]: CSSProperties
}


export const styles: Styles={
    appWrapper:{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f2f2f7",
        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: "24px 16px"
    },

    configWrapper:{
        width: "100%",
        maxWidth: 360
    },

    configCard:{
        background: "#ffffff",
        borderRadius: 24,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)"
    },

    configTitle:{
        fontSize: 18,
        fontWeight: 600,
        color: "#1c1c1e",
        margin: 0,
        textAlign: "center",
        letterSpacing: "-0.3px"
    },

    fieldGroup:{
        display: "flex",
        flexDirection: "column",
        gap: 8
    },

    label:{
        fontSize: 13,
        color: "#8e8e93",
        margin: 0
    },

    timerValue:{
        color: "#1c1c1e",
        fontVariantNumeric: "tabular-nums",
        fontWeight: 500
    },

    input:{
        background: "#f2f2f7",
        border: "none",
        borderRadius: 10,
        padding: "10px 12px",
        fontSize: 15,
        color: "#1c1c1e",
        outline: "none",
        width: "100%",
        boxSizing: "border-box"
    },

    range:{
        width: "100%",
        accentColor: "#1c1c1e",
        cursor: "pointer"
    },

    defaultBtn:{
        flex: 1,
        background: "#f2f2f7",
        border: "none",
        borderRadius: 10,
        padding: "9px 8px",
        fontSize: 13,
        color: "#3a3a3c",
        cursor: "pointer"
    },


    startBtn:{
        background: "#1c1c1e",
        border: "none",
        borderRadius: 14,
        padding: "14px",
        fontSize: 15,
        fontWeight: 600,
        color: "#ffffff",
        cursor: "pointer",
        marginTop: 4,
        letterSpacing: "-0.2px"
    },

    callWrapper:{
        width: "100%",
        maxWidth: 320
    },

    callScreen:{
        background: "#1c1c1e",
        borderRadius: 40,
        padding: "40px 24px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        boxShadow: "0 8px 40px rgba(0,0,0,0.3)"
    },


    callTop:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
    },

    avatar:{
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: "#3a3a3c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        fontWeight: 500,
        color: "#ffffff",
        marginBottom: 4,
    },

    callerName:{
        fontSize: 22,
        fontWeight: 600,
        color: "#ffffff",
        margin: 0,
        letterSpacing: "-0.4px"
    },

    callStatus:{
        fontSize: 14,
        color: "#8e8e93",
        margin: 0
    },

    timer:{
        fontSize: 28,
        fontWeight: 300,
        color: "#ffffff",
        margin: "4px 0 0",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "2px"
    },

    callControls: {
        display: "flex",
        flexDirection: "column",
        gap: 20
    },

    controlRow:{
        display: "flex",
        justifyContent: "space-around"
    },

    endRow:{
        display: "flex",
        justifyContent: "center"
    },

    controlItem:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
    },

    controlBtn:{
        width: 52,
        height: 52,
        borderRadius: "50%",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.15s ease"
    },


    endBtn:{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "#ff3b30",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },

    controlLabel:{
        fontSize: 12,
        color: "#8e8e93",
        margin: 0
    }
}
