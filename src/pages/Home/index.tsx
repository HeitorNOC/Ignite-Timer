<<<<<<< HEAD
import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled type="submit">
          <Play />
          Começar
        </StartCountDownButton>
=======
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { createContext, useContext, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'


const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type newCycleFormData = zod.infer<typeof newCicleFormValidationSchema>


export function Home() {

  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)
  
  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })
  
  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data)
    reset()
  }


  





  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        

        { activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24}/>
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24}/>
            Começar
          </StartCountDownButton>
        ) }
>>>>>>> 087ac49fe7d23ae15851b3b8c95026d74053f8ae
      </form>
    </HomeContainer>
  )
}
