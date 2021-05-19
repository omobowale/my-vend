import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductCategoryList } from '../../../../modules/web/service'

import './MegaMenu.scss'

function MegaMenu({ dispatch, categories=[], mouseLeaveMegaMenu, mouseOverMegaMenu }) {
    let _isMounted = false;
    const [activeCategory, setActiveCategory] = useState({});
    const [subCategories, setSubCategories] = useState([]);

    
    const loadCategories = useCallback(() => {
        
        dispatch(getProductCategoryList({}))
        
    });

    const selectCategory = useCallback((cat) => {
        
        setActiveCategory(cat);
        setSubCategories(cat.subArray);
        
    });

    const renderMenu = useCallback((subCat={}, brands=[]) => {
        return (
            <nav className="navigation ">
                <ul>
                    <li key={subCat.id} className="active"> {subCat.name} </li>
                    {brands.map( brand => {
                        return (
                            <li key={brand.id} className=""> {brand.name} </li>
                        )
                    })}
                </ul>
            </nav>
        )
        
        
    });
    useEffect( () => {
        _isMounted = true;
        console.log(categories)
        if (categories.length < 1) {
            loadCategories();
        }
        return () => {_isMounted = false; };
    });

    return (
        <div onMouseLeave={mouseLeaveMegaMenu} onMouseEnter={mouseOverMegaMenu} className={'container mega-menu'}>
            <div className="category-list-menu">
                <nav className="navigation ">
                    <ul>
                        {categories.map( category => {
                            return (
                                <li key={category.id} onClick={() => selectCategory(category)} className={`m-t-three ${category.id == activeCategory.id ? 'active' : ''}`} > {category.name} </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="sub-category-section">
                <h2 className='mega-title'>{activeCategory.name}</h2>  
                <div className="sub-category-menu">
                    
                    {subCategories.map( sub => renderMenu(sub, sub.subArray))}
            
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.web.categories
    };
};

export default connect(mapStateToProps)(MegaMenu);
