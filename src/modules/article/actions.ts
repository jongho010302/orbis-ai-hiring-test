import { createAction } from 'typesafe-actions';
import { Article, Docs } from './types';

// 액션 type
export const GET_ARTICLE = 'article/GET_ARTICLE';
export const GET_FILTER_ARTICLE = 'article/GET_FILTER_ARTICLE';
export const ADD_FAVORITE = 'article/ADD_FAVORITE';
export const DEL_FAVORITE = 'article/DEL_FAVORITE';
export const RESET_ARTICLE = 'article/RESET_ARTICLE';

// 액션 생성 함수
export const getArticle = createAction(GET_ARTICLE)<Article>();
export const getFilterArticle = createAction(GET_FILTER_ARTICLE)<any>();
export const addFavorite = createAction(ADD_FAVORITE)<Docs>();
export const delFavorite = createAction(DEL_FAVORITE)<Docs>();
export const resetArticle = createAction(RESET_ARTICLE)();
