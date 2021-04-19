import React from 'react';
import Delete from '../../../images/delete.png'
import Edit from '../../../images/edit 1.png'

const OrderListDetails = ({ list }) => {
    console.log(list);
    let { id } = list._id
    const [render, setRender] = React.useState(1);
    const [update, setUpdate] = React.useState();


    // const handle = (e) => {
    //     console.log(e.target.value);
    //     // setUpdate(e.target.value)
    //     let update = e.target.value
    //     fetch(`http://localhost:9000/update/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             "content-type": 'application/json'
    //         },
    //         body: JSON.stringify({ update })
    //     })
    //         .then(res => res.json())
    //         .then((data) => {

    //             if (data) {
    //                 alert("your data has been loaded")
    //             }

    //         })
    //         .catch((error) => {
    //             console.log((error));
    //         })

    // }
    // console.log(update);


    return (



        <tbody >
            <tr id="delete">
                <td>{list.displayName}</td>
                <td>{list.email}</td>
                <td>{list.title}</td>
                <td>{list.payWith}</td>
                <td>{list.status}</td>
                <td>

                    {/* <img src={Edit} alt="" width="25px" data-bs-toggle="modal" data-bs-target="#exampleModal" /> */}
                    <img src={Edit} width="25px" data-toggle="modal" data-target="#staticBackdrop" />
                </td>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Status</label>
                                    <select class="form-control" id="exampleFormControlSelect1" >
                                        <option  >Pending</option>
                                        <option >OnGoing</option>
                                        <option  >Done</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        </tbody>
    );
};

export default OrderListDetails;