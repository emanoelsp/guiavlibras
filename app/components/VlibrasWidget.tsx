"use client"

import Script from "next/script"

export default function VlibrasWidget() {
  return (
    <>
      {/* 1. O 'div' principal que o script do VLIBRAS usa para renderizar o widget */}
      <div vw="https://vlibras.gov.br/app" vw-access-button vw-plugin-wrapper>
        <div vw-plugin-top-wrapper>
          <div vw-size-controller>
            <div vw-size-less></div>
            <div vw-size-more></div>
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
