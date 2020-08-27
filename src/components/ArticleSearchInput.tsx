import React from 'react'

interface ArticleSearchType {
  filter: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickSearch: () => void;
  handleInputKewDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const ArticleSearchInput: React.FC<ArticleSearchType> = ({ filter, handleInputChange, handleClickSearch, handleInputKewDown }) => {
  return (
    <>
      <input value={filter} onChange={handleInputChange} onKeyDown={handleInputKewDown} style={{ marginRight: 2 }} />
      <button onClick={handleClickSearch}>Search</button>
    </>
  )
}

export default ArticleSearchInput;
