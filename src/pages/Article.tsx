import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { RootState } from '../modules';
import { thunkGetArticle, thunkGetFilterArticle } from '../modules/article/thunk';

// Components
import ArticleItem from '../components/ArticleItem';
import ArticleSearchInput from '../components/ArticleSearchInput';


const Article: React.FC = ({ history }: any) => {
  // Redux
  const dispatch = useDispatch();
  const store: RootState = useSelector((state: any) => state);
  const articles = store.article.articles;

  // State
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  // Use Effect
  useEffect(() => {
    dispatch(thunkGetArticle(page));
  }, [page, dispatch]);

  // Functions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value);
  }

  const handleAddArticle = (): void => {
    setPage(page + 1);
  }

  const handleSearch = (): void => {
    if(!filter) return alert('Please enter a search term');

    history.push('/search');
    dispatch(thunkGetFilterArticle(filter, 1));
    alert('Redirecting pages');
  }

  const handleClickSearch = (): void => {
    handleSearch();
  }

  const handleInputKewDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if(e.keyCode === 13) {
      handleSearch();
    }
  }

  const printArticleList = () => {
    if(!articles.response.docs.length) {
      return (
        <div className="Container">
          The article is being fetched.
        </div>
      )
    }
  
    return articles.response.docs.map((article, index) => {
      return (
        <ArticleItem key={index} article={article} />
      )
    });
  }

  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <ArticleSearchInput filter={filter} handleInputChange={handleInputChange} handleClickSearch={handleClickSearch} handleInputKewDown={handleInputKewDown} />
      </div>
      {printArticleList()}
      {!articles.response.docs.length ? null :
      <div className="ArticleContainer">
        <button onClick={handleAddArticle} style={{ width: 100 }}>More</button>
      </div>
      }
    </div>
  )
}

export default Article;
