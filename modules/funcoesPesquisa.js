import { listaTarefas } from "./listaTarefas"
import { listaTarefasConc } from "./listaTarefas"

export function pesquisarTarefaDescricao() {
    const descricao = prompt("Descrição da tarefa : ")
    if (descricao.length >= 3) {
      for (let tarefa of listaTarefas) {
          const tarefaDescricao = tarefa.descricao
          if(tarefaDescricao.includes(descricao) === true){
            console.log(`Título : ${tarefa.titulo}\n Descrição : ${tarefa.descricao} \n Data de Vencimento : ${tarefa.vencimento} \n Prioridade : ${tarefa.prioridade}`)
            break
          } 
          if(tarefa === listaTarefas[listaTarefas.length - 1] && tarefaDescricao.includes(descricao) === false){
            console.log("Tarefa não encontrada ")   
          }
        }
      }
  }

  export function pesquisarTarefaTitulo(retorno = false){
    const tituloPesq = prompt("Título da tarefa : ")
    const index = listaTarefas.findIndex((tarefa) => tarefa.titulo === tituloPesq)
    if(index != -1){
      if( retorno === true){
        console.log(`Título : ${listaTarefas[index].titulo}\n Descrição : ${listaTarefas[index].descricao} \n Data de Vencimento : ${listaTarefas[index].vencimento} \n Prioridade : ${listaTarefas[index].prioridade}`)
      } else {
        return listaTarefas[index] 
      }
    } else {
      console.log("Tarefa não encontrada.")
    }
  }
  