"use client"

import { CodeBlock } from "@/components/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, Info, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const vlibrasComponentCode = `// app/components/VlibrasWidget.tsx
"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VLibras: any;
  }
}

export default function VlibrasWidget() {
  useEffect(() => {
    const initVLibras = () => {
      if (typeof window !== "undefined" && window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };

    // Tentar inicializar se o script já estiver carregado
    if (window.VLibras) {
      initVLibras();
    }
  }, []);

  return (
    <>
      {/* Estrutura HTML correta conforme documentação oficial */}
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
            new window.VLibras.Widget("https://vlibras.gov.br/app");
          }
        }}
      />
    </>
  );
}`

const appRouterLayoutCode = `// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import VlibrasWidget from "./components/VlibrasWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Site com VLIBRAS",
  description: "Site acessível com VLIBRAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        
        {/* Adicione o widget aqui, no final do <body> */}
        <VlibrasWidget />
      </body>
    </html>
  );
}`

const pagesRouterCode = `// pages/_app.tsx
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const initVLibras = () => {
      if (typeof (window as any).VLibras !== 'undefined') {
        new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
      }
    };

    // Tentar inicializar se o script já estiver carregado
    if (typeof (window as any).VLibras !== 'undefined') {
      initVLibras();
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />

      {/* Estrutura HTML correta do VLIBRAS */}
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>

      {/* Script do VLIBRAS */}
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof (window as any).VLibras !== 'undefined') {
            new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
          }
        }}
      />
    </>
  );
}

export default MyApp;`

const typeScriptCode = `// types/global.d.ts
export {};

declare global {
  interface Window {
    VLibras: any;
  }
}`

export default function VlibrasPageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">
              Acessibilidade Digital
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Como Adicionar o VLIBRAS a um Site Next.js
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              O VLIBRAS é uma ferramenta essencial de acessibilidade. Aprenda a integrá-la ao Next.js de forma simples e
              eficiente, seguindo as melhores práticas.
            </p>
            <div className="flex gap-4 mt-8">
              <Button asChild size="lg">
                <Link href="/exemplo">Ver Exemplo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://github.com/emanoelsp/guiavlibras.git" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction Alert */}
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Sobre este guia</AlertTitle>
            <AlertDescription>
              Este guia mostra a implementação correta do VLIBRAS conforme a documentação oficial. O Next.js possui duas
              arquiteturas principais (App Router e Pages Router), forneceremos o passo a passo para ambas.
            </AlertDescription>
          </Alert>

          {/* Tabs for App Router vs Pages Router */}
          <Tabs defaultValue="app-router" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="app-router">App Router (Recomendado)</TabsTrigger>
              <TabsTrigger value="pages-router">Pages Router</TabsTrigger>
            </TabsList>

            {/* App Router Content */}
            <TabsContent value="app-router" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Next.js com App Router</CardTitle>
                  <CardDescription>
                    Abordagem moderna (Next.js 13.4+). A melhor prática é criar um componente cliente dedicado para o
                    VLIBRAS.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Step 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      1
                    </div>
                    <CardTitle>Criar o Componente do VLIBRAS</CardTitle>
                  </div>
                  <CardDescription>
                    Crie um novo arquivo em{" "}
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">/app/components/VlibrasWidget.tsx</code>.
                    Este será um Componente Cliente, pois interage com o DOM e a window do navegador.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={vlibrasComponentCode} />

                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        A estrutura HTML usa os atributos corretos:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">vw="true"</code>,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">vw-access-button="true"</code>, e{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">vw-plugin-wrapper="true"</code>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        O script é carregado com{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">strategy="afterInteractive"</code> para melhor
                        performance
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        O widget é inicializado automaticamente após o carregamento do script com{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">new window.VLibras.Widget()</code>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      2
                    </div>
                    <CardTitle>Adicionar ao Layout Raiz</CardTitle>
                  </div>
                  <CardDescription>
                    Importe e utilize o VlibrasWidget no seu layout principal para que apareça em todas as páginas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={appRouterLayoutCode} />
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      3
                    </div>
                    <CardTitle>Adicionar Tipos TypeScript (Opcional)</CardTitle>
                  </div>
                  <CardDescription>
                    Se você estiver usando TypeScript, crie um arquivo de definição de tipos para evitar erros de
                    compilação.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={typeScriptCode} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pages Router Content */}
            <TabsContent value="pages-router" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Next.js com Pages Router</CardTitle>
                  <CardDescription>
                    Se você está usando a arquitetura antiga com o diretório /pages, o processo é feito dentro do
                    arquivo _app.tsx.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      1
                    </div>
                    <CardTitle>Editar o arquivo _app.tsx</CardTitle>
                  </div>
                  <CardDescription>
                    Abra o arquivo <code className="text-sm bg-muted px-1 py-0.5 rounded">/pages/_app.tsx</code> e
                    adicione o componente Script e o div do VLIBRAS com a estrutura correta.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={pagesRouterCode} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      2
                    </div>
                    <CardTitle>Adicionar Tipos TypeScript (Opcional)</CardTitle>
                  </div>
                  <CardDescription>
                    Crie um arquivo de definição de tipos para evitar erros de compilação.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={typeScriptCode} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Important Notes */}
          <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-blue-900 dark:text-blue-100">Pontos Importantes</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  A estrutura HTML deve usar{" "}
                  <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">vw="true"</code> como atributo, não
                  como URL
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  O widget aparecerá como um botão azul no canto inferior direito da página
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  O script é carregado de forma assíncrona para não bloquear o carregamento da página
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  A inicialização acontece automaticamente após o carregamento do script
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="text-green-900 dark:text-green-100">Próximos Passos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100">Teste a implementação</p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Acesse a{" "}
                    <Link href="/exemplo" className="underline font-medium">
                      página de exemplo
                    </Link>{" "}
                    para ver o VLIBRAS em ação
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100">Verifique o console</p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Abra o console do navegador (F12) para ver os logs de inicialização do VLIBRAS
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100">Clone o repositório</p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Acesse o{" "}
                    <a
                      href="https://github.com/emanoelsp/guiavlibras.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium"
                    >
                      repositório no GitHub
                    </a>{" "}
                    para ter acesso ao código completo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
