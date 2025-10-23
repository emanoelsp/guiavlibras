"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    VLibras: any
  }
}

export default function VlibrasWidget() {
  useEffect(() => {
    console.log("[v0] VlibrasWidget mounted")

    const initVLibras = () => {
      if (typeof window !== "undefined" && window.VLibras) {
        console.log("[v0] Initializing VLibras")
        new window.VLibras.Widget("https://vlibras.gov.br/app")
      }
    }

    // Tentar inicializar se o script já estiver carregado
    if (window.VLibras) {
      initVLibras()
    }
  }, [])

  return (
    <>
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>

      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("[v0] VLibras script loaded")
          if (typeof window !== "undefined" && window.VLibras) {
            console.log("[v0] Creating VLibras Widget instance")
            new window.VLibras.Widget("https://vlibras.gov.br/app")
          }
        }}
        onError={(e) => {
          console.error("[v0] Error loading VLibras script:", e)
        }}
      />
    </>
  )
}
