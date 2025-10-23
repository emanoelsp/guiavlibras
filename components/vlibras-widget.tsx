"use client"

import Script from "next/script"

export default function VlibrasWidget() {
  return (
    <>
      {/* 1. O 'div' principal que o script do VLIBRAS usa para renderizar o widget */}
      <div vw="https://vlibras.gov.br/app" vw-access-button="true" vw-plugin-wrapper="true">
        <div className="enabled">
          <div vw-plugin-top-wrapper="true">
            <div vw-size-controller="true">
              <div vw-size-less="true"></div>
              <div vw-size-more="true"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. O script do VLIBRAS carregado via next/script */}
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          // 3. Inicializa o widget após o script ser carregado
          if (typeof (window as any).VLibras !== "undefined") {
            ;new (window as any).VLibras.Widget("https://vlibras.gov.br/app")
          }
        }}
      />
    </>
  )
}
