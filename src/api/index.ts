import axios, { AxiosResponse } from 'axios';

const { REACT_APP_SERVER_URL, REACT_APP_API_KEY } = process.env;

const url = `${REACT_APP_SERVER_URL}/svc/search/v2/articlesearch.json?q=election&api-key=${REACT_APP_API_KEY}`;

export const getArticle = (page: number): Promise<AxiosResponse<any>> => {
  return axios.get(`${url}&page=${page}`);
}

export const getFilterArticle = (filter: string, page: number): Promise<AxiosResponse<any>> => {
  return axios.get(`${url}&fq=body:(${filter})&page=${page}`);
}