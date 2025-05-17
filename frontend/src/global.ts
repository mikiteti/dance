const Global = {
    URL: import.meta.env.VITE_PORT_APP ? `http://localhost:${import.meta.env.VITE_PORT_APP}` : import.meta.env.VITE_APP_URL,
}

export { Global }
