import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const BreadCrumb = ({}) => {
    return (
        
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} className="" />
                </Link>
            </li>
            <li className="breadcrumb-item">
                Compare
            </li>
        </ol>
    )

}

export default BreadCrumb;