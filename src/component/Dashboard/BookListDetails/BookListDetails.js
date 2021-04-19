import React from 'react';

const BookListDetails = ({ BookListDetails }) => {
    console.log(BookListDetails);
    return (
        <div class="row justify-content-between m-5">
            <div className="col-md-8 col-sm-4">
                <h5 >{BookListDetails.title}</h5>
                <p >{BookListDetails.description}</p>
            </div>
            <div className="col-md-4">
                <p className="btn btn-danger">{BookListDetails.status}</p>
            </div>

        </div>
    );
};

export default BookListDetails;