"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

declare global {
  interface Window {
    VLibras: any
  }
}

export default function VlibrasWidget() {
  const widgetRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)
  const widgetInitializedRef = useRef(false)

  useEffect(() => {
    if (widgetRef.current) {
      const mainDiv = widgetRef.current.querySelector("[data-vw]")
      const accessButton = widgetRef.current.querySelector("[data-vw-access-button]")
      const pluginWrapper = widgetRef.current.querySelector("[data-vw-plugin-wrapper]")

      if (mainDiv) mainDiv.setAttribute("vw", "")
      if (accessButton) accessButton.setAttribute("vw-access-button", "")
      if (pluginWrapper) pluginWrapper.setAttribute("vw-plugin-wrapper", "")
    }
  }, [])

  const initVLibras = () => {
    if (typeof window === "undefined") return

    // Wait for VLibras to be available
    if (!window.VLibras) {
      console.warn("VLibras not loaded yet, retrying...")
      setTimeout(initVLibras, 100)
      return
    }

    // Prevent multiple initializations
    if (widgetInitializedRef.current) {
      console.log("VLibras already initialized")
      return
    }

    try {
      console.log("Initializing VLibras widget...")
      new window.VLibras.Widget("https://vlibras.gov.br/app")
      widgetInitializedRef.current = true
      scriptLoadedRef.current = true
      console.log("VLibras widget initialized successfully")
    } catch (error) {
      console.error("Error initializing VLibras widget:", error)
      // Retry once after a delay
      setTimeout(() => {
        if (!widgetInitializedRef.current) {
          try {
            new window.VLibras.Widget("https://vlibras.gov.br/app")
            widgetInitializedRef.current = true
          } catch (retryError) {
            console.error("Retry failed:", retryError)
          }
        }
      }, 500)
    }
  }

  return (
    <>
      <div ref={widgetRef}>
        <div data-vw className="enabled">
          <div data-vw-access-button className="active"></div>
          <div data-vw-plugin-wrapper>
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>
      </div>

      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={initVLibras}
        onError={(e) => {
          console.error("Error loading VLibras script:", e)
        }}
      />
    </>
  )
}
