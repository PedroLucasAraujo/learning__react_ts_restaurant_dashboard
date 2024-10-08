import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
   return (
    <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>
          <Input className="h-8 w-auto" placeholder="Id do Pedido" />
          <Input className="h-8 w-[320px]" placeholder="Nome do Cliente" />
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="all">
                Todos Status
              </SelectItem>
              <SelectItem value="pending">
                Pendente
              </SelectItem>
              <SelectItem value="canceled">
                Cancelado
              </SelectItem>
              <SelectItem value="processing">
                Em Preparo
              </SelectItem>
              <SelectItem value="delivering">
                Em Entrega
              </SelectItem>
              <SelectItem value="delivered">
                Entregue
              </SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit" variant="secondary" size="xs">
            <Search className="h-4 w-4 mr-2" />
            Filtrar Resultados
          </Button>

          <Button type="button" variant="outline" size="xs">
            <X className="h-4 w-4 mr-2" />
            Filtrar Resultados
          </Button>
    </form>
   )
}