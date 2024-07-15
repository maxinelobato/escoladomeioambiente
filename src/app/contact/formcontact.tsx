import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function FormContact() {
  return (
    <>
      <div className="mx-auto max-w-full">
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">Nome Completo</Label>
              <Input
                id="first-name"
                type="text"
                placeholder="Seu nome completo"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Seu melhor e-mail, voce@exemplo.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Como podemos ajudar você?"
              className="min-h-[100px]"
            />
          </div>
          <div className="mx-auto flex items-center justify-center gap-4">
            <Button type="submit" className="w-full">
              Enviar
            </Button>
            <Button type="reset" className="w-full" variant="outline">
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
