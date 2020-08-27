import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { RootState } from '../modules';
import { thunkGetFilterArticle } from '../modules/article';

// Components
import ArticleSearchInput from '../components/ArticleSearchInput';
import ArticleItem from '../components/ArticleItem';

const ArticleSearch = () => {
  // Redux
  const dispatch = useDispatch();
  const store: RootState = useSelector((state: any) => state);
  const articles = store.article.filterArticles;

  // State
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);

  // Use Effect
  useEffect(() => {
    if(!filter) return;
    handleFetchArticle();
  }, [page])

  // Functions
  const handleFetchArticle = () => {
    if(!filter) return alert('Please enter a search term');
    dispatch(thunkGetFilterArticle(filter, page));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value);
  }

  const handleInputKewDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if(e.keyCode === 13) {
      handleFetchArticle();
    }
  }

  const handleClickSearch = (): void => {
    handleFetchArticle();
  }

  const handleAddArticle = (): void => {
    setPage(page + 1);
  }

  const printArticleList = () => {
    if(!articles.response.docs.length) {
      return (
        <div className="Container">
          There is no data to be queried.
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

export default ArticleSearch;
