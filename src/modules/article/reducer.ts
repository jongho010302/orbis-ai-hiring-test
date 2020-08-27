import { ArticleAction, ArticleState, Article } from './types';
import { createReducer } from 'typesafe-actions';
import { GET_ARTICLE, GET_FILTER_ARTICLE, ADD_FAVORITE, DEL_FAVORITE, RESET_ARTICLE } from './actions';

const initialArticle: Article = {
  status: 'OK',
  copyright: 'Copyright (c) 2020 The New York Times Company. All Rights Reserved.',
  response: { docs: [], meta: { hits: 0, offset:0 , time: 0 } }
};

const initialFilterArticle: Article = {
  status: 'OK',
  copyright: 'Copyright (c) 2020 The New York Times Company. All Rights Reserved.',
  response: { docs: [], meta: { hits: 0, offset:0 , time: 0 } }
};

const initialFavoriteArticle: Article = {
  status: 'OK',
  copyright: 'Copyright (c) 2020 The New York Times Company. All Rights Reserved.',
  response: { docs: [], meta: { hits: 0, offset:0 , time: 0 } }
};

let initialFilter = '';

// 초깃값 설정
const initialState: ArticleState = {
  articles: initialArticle,
  filterArticles: initialFilterArticle,
  favorites: initialFavoriteArticle,
  filter: initialFilter
};

const article = createReducer<ArticleState, ArticleAction>(initialState, {
  [GET_ARTICLE]: (state, { payload }) => {
    const newState = {...state};
    newState.articles.response.docs = newState.articles.response.docs.concat(payload.response.docs);
    return newState;
  },
  [GET_FILTER_ARTICLE]: (state, { payload }) => {
    const newState = {...state};
    // if(!payload.response.docs.length) alert('조회된 데이터가 없습니다.');
    // Redux에는 상태관리 관련 기능만 들어가야 함.
    // 이것을 Front에서 처리하기에는 시간이 부족하여 구현하지 않았습니다.
    // 구현하면 좋은 것: ajax loading indicator, error state

    if(newState.filter !== payload.filter) {
      newState.filterArticles.response.docs = payload.data.response.docs;
    } else {
      newState.filterArticles.response.docs = newState.filterArticles.response.docs.concat(payload.data.response.docs);
    }
    newState.filter = payload.filter;
    return newState;
  },
  [ADD_FAVORITE]: (state, { payload }) => {
    const newState = {...state};
    newState.favorites.response.docs = newState.favorites.response.docs.concat(payload);
    return newState;
  },
  [DEL_FAVORITE]: (state, { payload }) => {
    const newState = {...state};
    const delIndex = newState.favorites.response.docs.indexOf(payload);
    newState.favorites.response.docs.splice(delIndex, 1);
    return newState;
  },
  [RESET_ARTICLE]: (state) => {
    const newState = {...state};
    newState.articles.response = { docs: [], meta: { hits: 0, offset:0 , time: 0 } };
    newState.filterArticles.response = { docs: [], meta: { hits: 0, offset:0 , time: 0 } };
    return newState;
  },
});

export default article;
