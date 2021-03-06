import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { getProductCategoryList, getProductCategoryFlatList } from '../../../../modules/web/service'

import './MegaMenu.scss'

function MegaMenu({ dispatch, categories=[], closeMegaMenu, mouseLeaveMegaMenu, mouseOverMegaMenu }) {
    let _isMounted = false;
    const [activeCategory, setActiveCategory] = useState({});
    const [subCategories, setSubCategories] = useState([]);

    
    const loadCategories = useCallback(() => {
        
        dispatch(getProductCategoryList({}))
        dispatch(getProductCategoryFlatList({}))
        
    });

    const selectCategory = useCallback((cat) => {
        
        setActiveCategory(cat);
        setSubCategories(cat.subArray);
        
    });

    const renderMenu = useCallback((cat={}, subCat={}, brands=[]) => {
        return (
            <nav className="navigation ">
                <ul>
                    <li key={subCat.id} className="active"> 
                        <Link className="" onClick={() => closeMegaMenu()} to={`/category/${cat.slug}/${subCat.slug}`} >{subCat.name}</Link>
                    </li>
                    {brands.map( brand => {
                        return (
                            <li key={brand.id} className=""> <Link className="" onClick={() => closeMegaMenu()} to={`/category/${cat.slug}/${subCat.slug}/${brand.slug}`} >{brand.name} </Link> </li>
                        )
                    })}
                </ul>
            </nav>
        )
        
        
    });
    useEffect( () => {
        _isMounted = true;
        if (categories.length < 1) {
            loadCategories();
        }
        return () => {_isMounted = false; };
    });

    if(activeCategory && activeCategory.name){
        return (
            <div className={'container sm-mega-menu'}>
                <div className={`sub-category-section ${activeCategory.name && 'show'} `}>
                    {/* <h2 className='mega-title'>{activeCategory.name}</h2>   */}
                    <div onClick={() => selectCategory({})}  className="prev-menu">
                        <span> 
                            <FontAwesomeIcon
                            icon={faAngleLeft}
                            />
                        </span>
                        <span>All Categories </span>
                    </div>
                    <div className="sub-category-menu">
    
                        {subCategories.map( sub => renderMenu(activeCategory, sub, sub.subArray))}
            
                        <div className="pt-5">
                            <Link className="category-link" onClick={() => closeMegaMenu()} to={`/category/${activeCategory.slug}`} >Show all Sub-categories in {activeCategory.name}</Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    return (
        
        <div className={'container sm-mega-menu'}>
            <div className={`category-list-menu ${!activeCategory.name && 'show'}`}>
                <h5 className='nav-title'>Categories</h5>
                <nav className="navigation ">
                    <ul>
                        {categories.map( category => {
                            return (
                                <li key={category.id} onClick={() => selectCategory(category)} className={`m-t-three ${category.id == activeCategory.id ? 'active' : ''}`} > 
                                    <img src={category.image} />  <span>{category.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
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
