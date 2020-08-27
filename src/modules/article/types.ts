import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ArticleAction = ActionType<typeof actions>;

export interface ArticleState {
  articles: Article;
  filterArticles: Article;
  favorites: Article;
  filter: string;
}

export interface Article {
  copyright: string;
  response: Response;
  status: string;
}

export interface Response {
  docs: Docs[];
  meta: Meta;
}

export interface Docs {
  abstract: string;
  byline: any;
  document_type: string;
  headline: any;
  keywords: string;
  lead_paragraph: string;
  multimedia: any;
  news_desk: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}