

const SortTotal = ({total=0, handleSort, sort}) => {

    return (
        <div className="product-list-body-top">
            <div className="products-total">
                <span className="bold">{Number(total).toLocaleString()} </span> Products
            </div>
            <div className="sort">
                <p>Sort by </p>
                <select
                    className="select"
                    value={sort}
                    onChange={handleSort}
                    name="sort"
                >
                    <option value="rank">Rank</option>
                    <option value="high">Highest Price</option>
                    <option value="low">Lowest Price</option>
                </select>
            </div>
        </div>
    );
}

export default SortTotal;