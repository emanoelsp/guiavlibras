import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, Accessibility, Volume2, Eye } from "lucide-react"

export default function ExemploPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">
              <Accessibility className="h-3 w-3 mr-1" />
              Demonstração
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Página de Exemplo com VLIBRAS</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Esta página demonstra a implementação do VLIBRAS em ação. Procure pelo ícone azul no canto inferior
              direito da tela para acessar o tradutor de Libras.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* How to Use Alert */}
          <Alert>
            <Volume2 className="h-4 w-4" />
            <AlertTitle>Como usar o VLIBRAS</AlertTitle>
            <AlertDescription>
              Clique no ícone azul no canto inferior direito da tela. O widget do VLIBRAS irá traduzir o conteúdo desta
              página para Língua Brasileira de Sinais (Libras).
            </AlertDescription>
          </Alert>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Accessibility className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Acessibilidade Universal</CardTitle>
                </div>
                <CardDescription>
                  O VLIBRAS torna seu site acessível para pessoas surdas ou com deficiência auditiva, traduzindo
                  conteúdo em português para Libras.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Volume2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Tradução em Tempo Real</CardTitle>
                </div>
                <CardDescription>
                  O widget traduz automaticamente o texto selecionado ou toda a página, apresentando um avatar 3D que
                  realiza os sinais em Libras.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Fácil de Usar</CardTitle>
                </div>
                <CardDescription>
                  Interface intuitiva que permite ajustar o tamanho do avatar, velocidade da tradução e posição na tela
                  conforme a preferência do usuário.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Conformidade Legal</CardTitle>
                </div>
                <CardDescription>
                  Atende à Lei Brasileira de Inclusão (LBI) e às diretrizes de acessibilidade digital, garantindo que
                  seu site esteja em conformidade com a legislação.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Sample Content */}
          <Card>
            <CardHeader>
              <CardTitle>Conteúdo de Exemplo</CardTitle>
              <CardDescription>
                Selecione qualquer texto desta seção e use o VLIBRAS para ver a tradução em Libras.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">O que é Libras?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Língua Brasileira de Sinais (Libras) é a língua de sinais utilizada pela maioria das comunidades de
                  surdos que vivem no Brasil. É reconhecida como meio legal de comunicação e expressão desde 2002, pela
                  Lei nº 10.436.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Importância da Acessibilidade Digital</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A acessibilidade digital garante que todas as pessoas, independentemente de suas capacidades físicas
                  ou cognitivas, possam acessar, compreender e interagir com conteúdos digitais. Implementar ferramentas
                  como o VLIBRAS é um passo fundamental para criar uma internet mais inclusiva.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Benefícios para seu Site</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Amplia o alcance do seu conteúdo para a comunidade surda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Demonstra compromisso com a inclusão e responsabilidade social</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Atende requisitos legais de acessibilidade digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Melhora a experiência do usuário para todos os visitantes</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Success Message */}
          <Alert className="border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/20">
            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">VLIBRAS Implementado com Sucesso!</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Esta página está utilizando o VLIBRAS. Você pode ver o widget no canto inferior direito da tela. Clique
              nele para experimentar a tradução em Libras de qualquer conteúdo desta página.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  )
}
