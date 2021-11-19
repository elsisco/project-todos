import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

export const AddTodo = () => {
  const [input, setInput] = useState('')
  const [category, setCategory] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addTodo({ input, category }))
    console.log('input: ', input)
    console.log('category: ', category)
    setInput('')
  }

  return (
    <StyledContainer>
      <StyledSmallHeadline>Add new to-do</StyledSmallHeadline>
      <StyledTextInput
        type="text"
        value={input}
        placeholder="Type it here..."
        onChange={(event) => {
          setInput(event.target.value)
        }}
      />

      <StyledForm>
        <input
          type="radio"
          id="personal"
          name="category"
          value="personal"
          onChange={(event) => setCategory(event.target.value)}
        />
        <label htmlFor="personal">Personal</label>
        <input
          type="radio"
          id="business"
          name="category"
          value="business"
          onChange={(event) => setCategory(event.target.value)}
        />
        <label htmlFor="business">Business</label>
        <input
          type="radio"
          id="shopping"
          name="category"
          value="shopping"
          onChange={(event) => setCategory(event.target.value)}
        />
        <label htmlFor="shopping">Shopping</label>
        <button type="submit" disabled={input === ''} onClick={onAddTodo}>
          Add todo
        </button>
      </StyledForm>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`
const StyledTextInput = styled.input`
  background: transparent;
  background-color: #21274e;
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #9aaedb;
  }
`
const StyledForm = styled.form`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  margin: 0 15px 0 5px;
  color: white;

  .input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`

const StyledSmallHeadline = styled.h3`
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 25px 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
