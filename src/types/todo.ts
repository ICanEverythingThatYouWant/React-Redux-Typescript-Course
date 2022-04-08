export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_USERS',
    FETCH_TODOS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type  TodoAction =
    FetchTodoAction
    | FetchTodoSuccessAction
    | FetchTodoErrorAction
    | SetTodoPage