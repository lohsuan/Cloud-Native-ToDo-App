import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest'
import { serverOf } from '../src/server'
import * as TodoRepo from '../src/repo/todo'

describe('Todo API Testing', () => {
  const server = serverOf()

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('Given an empty array return from repo function, When send a GET request to /api/v1/todos, Then it should response an empty array', async () => {
    // assert: stub the repo function to return an empty array
    vi.spyOn(TodoRepo, 'findAllTodos').mockImplementation(async () => [])

    // act: send a GET request to /api/v1/todos
    const response = await server.inject({
      method: 'GET',
      url: '/api/v1/todos'
    })

    // assert: response should be an empty array
    const todos = JSON.parse(response.body)['todos']
    expect(todos).toStrictEqual([])
  })

  test('Given a todo object return from repo function, When send a POST request to /api/v1/todos, Then it should response the todo object', async () => {
    // arrange: a todo object
    const todo: Todo = {
      id: '1',
      name: 'mock todo',
      description: 'mock description',
      status: false
    }

    // assert: stub the repo function to return the todo object
    vi.spyOn(TodoRepo, 'createTodo').mockImplementation(async () => todo)

    // act: send a POST request to /api/v1/todos
    const response = await server.inject({
      method: 'POST',
      url: '/api/v1/todos',
      payload: {
        id: '1',
        name: 'mock todo',
        description: 'mock description',
        status: false
      }
    })

    // assert: response should be the todo object
    const newTodo = JSON.parse(response.body)['todo']
    expect(newTodo).toStrictEqual(todo)
  })

  // test('Given a todo object return from repo function, When send a PUT request to /api/v1/todos/:id, Then it should response the todo object', async () => {
  //   // arrange: a todo object
  //   const todo: Todo = {
  //     id: '1',
  //     name: 'mock todo',
  //     description: 'mock description',
  //     status: true
  //   }

  //   // assert: stub the repo function to return the todo object
  //   vi.spyOn(TodoRepo, 'updateTodoById').mockImplementation(async () => todo)

  //   // act: send a PUT request to /api/v1/todos/:id
  //   const response = await server.inject({
  //     method: 'PUT',
  //     url: '/api/v1/todos/1',
  //     payload: {
  //       status: true
  //     }
  //   })

  //   // assert: response should be the todo object
  //   const updatedTodo = JSON.parse(response.body)['todo']
  //   expect(updatedTodo).toStrictEqual(todo)
  // })


})
