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
    const initVLibras = () => {
      if (typeof window !== "undefined" && window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app")
      }
    }

    // Tentar inicializar imediatamente se o script já estiver carregado
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
          if (typeof window !== "undefined" && window.VLibras) {
            new window.VLibras.Widget("https://vlibras.gov.br/app")
          }
        }}
      />
    </>
  )
}
