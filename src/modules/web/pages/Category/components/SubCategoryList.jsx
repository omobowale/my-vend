import { Link } from 'react-router-dom';
import moment from 'moment';
import shortid from 'shortid';
import ad1 from '../../../../../assets/img/common/cat-ad1.png'
import ad2 from '../../../../../assets/img/common/cat-ad2.png'

import CategoryItem from './SubCategoryItem';

const SubCategoryList = ({category={}}) => {
    return (
        <>
            <section className="">
                <div className="section--title">{category.name}</div>
            </section>
            <section className="">
                <div className="sub-category-menu">
                    <div className="col">
                        <div className="stack-items row ">
                            
                            {category.subArray && category.subArray.map( (subCat) => (
                                <CategoryItem key={shortid.generate()} cat={category} subCat={subCat} />
                            ))}
                        </div>
                    </div>

                    <div className="advert-banner-section">
                        <img src={ad1} className="img-fluid" /> 
                        <img src={ad2} className="img-fluid" /> 
                    </div>
                </div>    
            </section>
        </>
    )

}

export default SubCategoryList;