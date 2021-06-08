import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faHome } from '@fortawesome/free-regular-svg-icons';

const BreadCrumb = ({category, subCategory, brand}) => {


    return (
        
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} className="" />
                </Link>
            </li>
            <li className="breadcrumb-item">
                <Link to={`/category/${category.slug}`}>
                    {category.name}
                </Link>
            </li>
            <li className="breadcrumb-item">
                <Link to={`/category/${category.slug}/${subCategory.slug}`}>
                    {subCategory.name}
                </Link>
            </li>
            <li className="breadcrumb-item">
                {brand.name}
            </li>
        </ol>
    )

}

export default BreadCrumb;