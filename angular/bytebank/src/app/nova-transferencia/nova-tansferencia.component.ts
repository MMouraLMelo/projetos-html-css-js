import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss'] 
})
export class NovaTransferenciaComponent{
    @Output() aoTransferir = new EventEmitter<any>();
    valor: number = 0;
    destino: number = 0;
    transferir(){
        const valorEmitir = {valor: this.valor, destino: this.destino};
        this.aoTransferir.emit(valorEmitir);
        this.limparCampos();
    }

    limparCampos(){
        this.valor = 0;
        this.destino = 0;
    }
}