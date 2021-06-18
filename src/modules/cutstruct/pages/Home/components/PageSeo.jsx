import {Helmet} from 'react-helmet'

const PageSeo = () => {
    return (
        <Helmet>
            <title>Cutstruct | Home </title>
            <meta 
                name="description" 
                content="Livevend is a construction and real estate price discovery platform that provides realtime prices from all markets across nigeria"
            />
            <meta 
                name="keywords" 
                content="construction, vendors, markets, livevend, materials, nigeria, prices, discovery, realtime" 
            />
            <meta 
                name="viewport" 
                content="width=device-width, initial-scale=1" 
            />
            <meta 
                property="og:url" 
                content="https://www.livevend.com/cutstruct" 
            />
            <meta 
                property="og:title" 
                content="Home" 
            />
            <meta 
                property="og:description" 
                content="Custruct is a construction and real estate price discovery platform that provides realtime prices from all markets across nigeria" 
            />
            <meta 
                name="twitter:site" 
                content="https://www.livevend.com/custruct" 
            />
            <meta 
                name="twitter:card" 
                content="summary_large_image" 
            />
            <meta 
                name="twitter:image" 
                content="https://www.livevend.com/img/cutstruct-logo.png" 
            />
            <meta 
                property="og:image" 
                content="https://www.livevend.com/img/custruct-logo.png" 
            />
            <meta 
                property="og:image:width" 
                content="1200" 
            />
            <meta 
                property="og:image:height" 
                content="630" 
            />
            <meta 
                name="msapplication-TileColor" 
                content="#da532c" 
            />
            <meta 
                name="theme-color" 
                content="#ffffff" 
            />
            <meta 
                name="next-head-count" 
                content="22" 
            />
        
        </Helmet>
    );
}

export default PageSeo;