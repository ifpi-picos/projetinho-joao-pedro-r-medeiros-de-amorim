import { listaTarefas } from "./listaTarefas"
import { listaTarefasConc } from "./listaTarefas"

export function resumoTarefa() {
  if(listaTarefas.length > 0){
    console.log(`      Próxima tarefa a concluir : ${listaTarefas[0].titulo}
      Número de tarefas pendentes : ${listaTarefas.length}
      Número de tarefas concluídas : ${listaTarefasConc.length}
      Número total de tarefas : ${listaTarefas.length + listaTarefasConc.length}`)
    
  } else {
    console.log(`      Próxima tarefa a concluir : Não há tarefas!
      Número de tarefas pendentes : ${listaTarefas.length}
      Número de tarefas concluídas : ${listaTarefasConc.length}
      Número total de tarefas : ${listaTarefas.length + listaTarefasConc.length}`)
  }
}
  
export function exibirTarefas(lista = listaTarefas, exibirTudo = true){
      console.log(` --- Lista de Tarefas --- \n`)
      for (let tarefa of lista){
      const dataVencimento = tarefa.vencimento 
      const dataBrasil = dataVencimento.toLocaleDateString("pt-BR")
      console.log(`\u2610 Título : ${tarefa.titulo}
        Prioridade : ${tarefa.prioridade}
        Vencimento : ${dataBrasil}
        Descrição : ${tarefa.descricao}\n`)
    }
    if(exibirTudo){
      exibirTarefasConcluidas()
    }
  }
  
export function exibirTarefasConcluidas(){
      console.log(` --- Lista de Tarefas Concluídas --- \n`)
      for (let tarefa of listaTarefasConc){
        const dataVencimento = tarefa.vencimento 
        const dataBrasil = dataVencimento.toLocaleDateString("pt-BR")
        console.log(`\u2611 ${tarefa.titulo}
        Prioridade : ${tarefa.prioridade}
        Vencimento : ${dataBrasil}
        Descrição : ${tarefa.descricao}\n`)
      }
}

export function filtrarTarefasPrioridade(){
    const opcao = parseInt(prompt("Filtrar por prioridade :\n 1 - Baixa\n 2 - Média\n 3 - Alta\n Digite : "))
    switch(opcao){
      case 1:
        const tarefasBaixaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Baixa")
        console.log(`\n --- Tarefas com prioridade Baixa --- \n`)
        exibirTarefas(tarefasBaixaPrioridade,false)
        break;
      case 2:
        const tarefasMediaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Média")
        console.log(`\n --- Tarefas com prioridade Média --- \n`)
        exibirTarefas(tarefasMediaPrioridade,false)
        break;
      case 3:
        const tarefasAltaPrioridade = listaTarefas.filter((tarefa) => tarefa.prioridade === "Alta")
        console.log(`\n --- Tarefas com prioridade Alta --- \n`)
        exibirTarefas(tarefasAltaPrioridade,false)
        break;
      default:
        console.log("Opção inválida!")
    }
}

export function filtrarTarefasVencimento(vencidas,vencemHoje,vencemFuturo){
  const dataAtual = new Date()
  
  const tarefasVencidas = []
  const tarefasVencidasHoje = []
  const tarefasVencidasFuturo = []

  listaTarefas.forEach(tarefa => {
    const dataVencimento = tarefa.vencimento

    dataVencimento.setHours(0,0,0,0)
    dataAtual.setHours(0,0,0,0)

    if(dataVencimento < dataAtual){
      tarefasVencidas.push(tarefa)
    } else if (dataVencimento.getTime() === dataAtual.getTime()){
      tarefasVencidasHoje.push(tarefa)
    } else {
      tarefasVencidasFuturo.push(tarefa)
    }
  })

  if(vencidas){
    console.log(`\n --- Tarefas Vencidas --- \n`)
    exibirTarefas(tarefasVencidas,false)
  }

  if(vencemHoje){
    console.log(`\n --- Tarefas Vencidas Hoje --- \n`)
    exibirTarefas(tarefasVencidasHoje,false)
  }

  if(vencemFuturo){
    console.log(`\n --- Tarefas Vencidas Futuro --- \n`)
    exibirTarefas(tarefasVencidasFuturo,false)
  }
}

export function ordenarTarefasPrioridade(){
  listaTarefas.sort((tarefa1,tarefa2) => {
    const prioridades = ['Baixa','Média','Alta']
    return prioridades.indexOf(tarefa2.prioridade) - prioridades.indexOf(tarefa1.prioridade)
  })
  console.log("Lista ordenada!")
  return listaTarefas
}

export function ordenarTarefasVencimento(lista = listaTarefas){
  lista.sort((tarefa1,tarefa2) => tarefa2.vencimento - tarefa1.vencimento)
  console.log("Lista ordenada!")
  return lista
}

export function ordenarTarefasData(lista = listaTarefas){
  lista.sort((tarefa1,tarefa2) => tarefa1.dataCreate - tarefa2.dataCreate)
  console.log("Lista ordenada!")
  return lista
}