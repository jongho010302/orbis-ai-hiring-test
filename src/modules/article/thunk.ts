import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { getArticle, getFilterArticle } from '.';
import * as api from '../../api';

export const thunkGetArticle = (page: number): ThunkAction<void, any, unknown, Action<string>> => async dispatch => {
  const { data } = await api.getArticle(page);
  dispatch(
    getArticle(data)
  )
}

export const thunkGetFilterArticle = (filter: string, page: number): ThunkAction<void, any, unknown, Action<string>> => async dispatch => {
  const { data } = await api.getFilterArticle(filter, page);
  dispatch(
    getFilterArticle({ data, filter })
  )
}
