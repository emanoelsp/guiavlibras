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
    if (typeof window !== "undefined" && window.VLibras && !scriptLoadedRef.current) {
      scriptLoadedRef.current = true
      new window.VLibras.Widget("https://vlibras.gov.br/app")
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
          console.error("[v0] Error loading VLibras script:", e)
        }}
      />
    </>
  )
}
