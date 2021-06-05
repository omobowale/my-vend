import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductCategoryList } from '../../../../modules/web/service'
import ad1 from '../../../../assets/img/common/mega-ad1.png';
import ad2 from '../../../../assets/img/common/mega-ad2.png';
import ad3 from '../../../../assets/img/common/mega-ad3.png';
import './MegaMenu.scss'

function MegaMenu({ dispatch, categories=[], closeMegaMenu, mouseLeaveMegaMenu, mouseOverMegaMenu }) {
    let _isMounted = false;
    const [activeCategory, setActiveCategory] = useState({});
    const [subCategories, setSubCategories] = useState([]);

    
    const loadCategories = useCallback(() => {
        
        dispatch(getProductCategoryList({}))
        
    });

    const selectCategory = useCallback((e, cat) => {
        e.stopPropagation();
        setActiveCategory(cat);
        setSubCategories(cat.subArray);
        
    });

    const renderMenu = useCallback((cat, subCat={}, brands=[]) => {
        return (
            <nav className="navigation col-3">
                <ul>
                    <li key={subCat.id} className="active"> 
                        <Link className="" onClick={() => closeMegaMenu()} to={`/category/${cat.slug}/${subCat.slug}`} >{subCat.name}</Link>
                    </li>
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
        if (categories.length < 1) {
            loadCategories();
        }
        return () => {_isMounted = false; };
    });

    return (
        <div onMouseLeave={mouseLeaveMegaMenu} onMouseEnter={mouseOverMegaMenu} className={'container sm-container mega-menu'}>
            <div className="category-list-menu">
                <nav className="navigation ">
                    <ul>
                        {categories.map( category => {
                            return (
                                <li key={category.id} onClick={(e) => selectCategory(e, category)} className={`m-t-three ${category.id == activeCategory.id ? 'active' : ''}`} > 
                                    <img src={category.image} />  <span>{category.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="sub-category-section">
                <h2 className='mega-title'>{activeCategory.name}</h2>  
                <div className="sub-category-menu">
                    <div className="nav-section row m-0">
                        {subCategories.map( sub => renderMenu(activeCategory, sub, sub.subArray))}
                        <div className="col-12 pt-4">
                            {activeCategory.name && <Link className="category-link" onClick={() => closeMegaMenu() } to={`/category/${activeCategory.slug}`} >Show all Sub-categories in {activeCategory.name}</Link> }
                        </div>
                    </div>
                    <div className="advert-section">
                        <img src={ad1} className="img-fluid adv-img" /> 
                        <img src={ad2} className="img-fluid adv-img" /> 
                        <img src={ad3} className="img-fluid adv-img" /> 
                    </div>
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
