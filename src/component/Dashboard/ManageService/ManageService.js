import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Delete from '../../../images/delete.png'

const ManageService = () => {
    const [serviceList, setServiceList] = React.useState([])
    const [render, setRender] = React.useState(1);
    React.useEffect(() => {
        fetch("http://localhost:9000/service")
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [render])

    function deleteService(id, event) {
        // const hidden = 
        console.log("delete", id)
        fetch(`http://localhost:9000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully")
                if (result) {
                    setRender(render + 1)
                }

            })
    }
    console.log(render);
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <table class="table table-hover  table-borderless table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Service Title</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>

                    {
                        serviceList.map(list => <tbody >
                            <tr id="delete">
                                <td className="m-5">{list.title}</td>
                                <td>{list.description}</td>
                                <img src={Delete} onClick={() => deleteService(list._id)} alt="" width="25px" class="m-2" />
                            </tr>
                        </tbody>)
                    }

                </table>
            </div>
        </section>
    );
};

export default ManageService;