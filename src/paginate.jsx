import React from 'react';
import ReactPaginate from 'react-paginate';

function Paginate() {
const handlepageClick =()=>{
    console.log('clicked');
}


  return (
    <div className='Page_info'>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"Next"}
        pageCount={10}
        breakLabel={'....'}      
        onPageChange={handlepageClick}
        containerClassName ={'pagination'}
        pageClassName ={'page-item'}
        pageLinkClassName ={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName ={'page-link'}
      />
    </div>
  )
}

export default Paginate
