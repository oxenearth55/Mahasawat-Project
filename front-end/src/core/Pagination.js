import React from 'react'

const Pagination = ({commentPerPage,totalComment,paginate,}) => {
    const pageNumbers = [];
    
    for(let i=1; i<= Math.ceil(totalComment/commentPerPage); i++){
        pageNumbers.push(i)
    }

return(
    

    <nav className="justify-content-center">
        <ul className="pagination pg-blue">
            {pageNumbers.map(number =>(
                <li key={number} className="page-item ">
                    <a onClick={() => {paginate(number);}} className="page-link">
                    {number}
                    </a>

                </li>
            ))}
        </ul>
    </nav>

)
}
export default Pagination;