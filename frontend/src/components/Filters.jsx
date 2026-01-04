import './styles/Filters.css'

const Filters = ({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedSort,
    setSelectedSort
}) => {

  return (
    <>
        <div className='header-with-filter'>

          <h1>Active Campaigns</h1>
          <h2>Join a group purchase now and start saving. The more people join, the lower your price!</h2>

          <div className='filters'>
            <input
              id='search-bar'
              type='search'
              placeholder='Search for campaign...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              id="sort-filter"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value={"default"}>Sort by</option>
              <option value={"price-asc"}>Price: Low to High</option>
              <option value={"price-desc"}>Price: High to Low</option>
              <option value={"time"}>Time Left</option>
              <option value={"popular"}>Most Popular</option>
            </select>

            <select
              id='category-filter'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value={"all"}>All</option>
              <option value={"food"}>Food</option>
              <option value={"beauty"}>Beauty</option>
              <option value={"electronics"}>Electronics</option>
              <option value={"sports"}>Sports</option>
            </select>
            
          </div>
        </div>
    </>
  )
}

export default Filters