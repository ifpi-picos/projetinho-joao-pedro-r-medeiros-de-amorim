import { criarTarefa, adicionarTarefa,removerTarefa, marcarTarefa, editarTarefa} from "./modules/funcoesCRUD";
import { resumoTarefa, exibirTarefas, exibirTarefasConcluidas, filtrarTarefasPrioridade, ordenarTarefasPrioridade, filtrarTarefasVencimento, ordenarTarefasVencimento, ordenarTarefasData } from "./modules/funcoesExibir";
import { pesquisarTarefaDescricao, pesquisarTarefaTitulo } from "./modules/funcoesPesquisa";
import { listaTarefas } from "./modules/listaTarefas";
import { exibirMenu } from "./modules/menu";

let loop = true

while (loop) {
    const opcao = exibirMenu()
    
    switch(opcao){
        case 1:
            adicionarTarefa(criarTarefa())
            break;
        case 2:
            marcarTarefa()
            break;
        case 3:
            removerTarefa(pesquisarTarefaTitulo())
            break;
        case 4:
            editarTarefa(pesquisarTarefaTitulo())
            break;
        case 5:
            const exibir = parseInt(prompt(`\n 1 - Exibir lista tarefas disponiveis\n 2 - Exibir tarefas concluídas\n Digite : `))
            exibir === 1 ? exibirTarefas() : exibirTarefasConcluidas()
            break;
        case 6:
            const escolha = parseInt(prompt(`\n 1 - Pesquisar por Título\n 2 - Pesquisar por Descrição\n Digite : `))

            escolha === 1 ? pesquisarTarefaTitulo(true) : pesquisarTarefaDescricao()
            break;
        case 7:
            const filtrar = parseInt(prompt(` 1 - Filtrar por Status\n 2 - Filtrar por Prioridade\n 3 - Filtrar por Vencimento\n Digite : `))
            if(filtrar === 1){
                const filtrarDecisao = parseInt(prompt(" 1 - Filtrar tarefas Pendentes\n 2 - Filtrar tarefas Concluídas\n Digite : "))
                filtrarDecisao === 1 && exibirTarefas(listaTarefas, false)
                filtrarDecisao === 2 && exibirTarefasConcluidas()
            }
            filtrar === 2 && filtrarTarefasPrioridade()
            if(filtrar === 3){
                const filtrarPor = parseInt(prompt(" 1 - Filtrar Tarefas Vencidas\n 2 - Filtrar Tarefas que Vencem Hoje\n 3 - Filtrar Tarefas que Vencerão no Futuro\n Digite : "))
                filtrarPor === 1 && filtrarTarefasVencimento(true,false,false)
                filtrarPor === 2 && filtrarTarefasVencimento(false,true,false)
                filtrarPor === 3 && filtrarTarefasVencimento(false,false,true)
            }

            break;
        case 8:
            const ordenar = parseInt(prompt(` 1 - Ordenar por Prioriade\n 2 - Ordenar por Vencimento\n 3 - Ordenar por Data de Criação\n Digite : `))
            ordenar === 1 && ordenarTarefasPrioridade()
            ordenar === 2 && ordenarTarefasVencimento()
            ordenar === 3 && ordenarTarefasData()
            exibirTarefas()
            break;
        case 9:
            resumoTarefa()
            break;
        case 0:
            loop = false
            break;
        default:
            console.log("Opção inválida!")
            break
    }
}