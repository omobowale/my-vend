import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faHome } from '@fortawesome/free-regular-svg-icons';

const BreadCrumb = ({category}) => {


    return (
        
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} className="" />
                </Link>
            </li>
            <li className="breadcrumb-item">
                {category.name}
            </li>
        </ol>
    )

}

export default BreadCrumb;