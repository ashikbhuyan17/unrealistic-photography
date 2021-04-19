import React, { useEffect, useState } from 'react';
import './Services.css'
import photo from '../../../images/122801.png'
import photo2 from '../../../images/120738.png'
import photo3 from '../../../images/122804.png'
import Services from '../Services/Services';

const Service = () => {
    const [serviceData, setServiceData] = useState([])

    const ServicesItem = [
        {
            name: 'Wedding Photography',
            about: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam at a iure odio sapiente! Unde numquam enim ullam fuga odio laboriosam est, nobis corporis labore, velit quas modi deleniti!',
            price: 123,
            photo: photo,
            id: 1


        },
        {
            name: 'Stylish Photography',
            about: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam at a iure odio sapiente! Unde numquam enim ullam fuga odio laboriosam est, nobis corporis labore, velit quas modi deleniti!',
            price: 144,
            photo: photo2,
            id: 2


        },
        {
            name: 'Child Photography',
            about: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam at a iure odio sapiente! Unde numquam enim ullam fuga odio laboriosam est, nobis corporis labore, velit quas modi deleniti!',
            price: 110,
            photo: photo3,
            id: 3


        }
    ]



    fetch("http://localhost:9000/service")
        .then(res => res.json())
        .then(data => setServiceData(data))

    // console.log("data was ", serviceData);
    return (
        <section className='background'>
            <div className="container">

                {
                    serviceData.length === 0 && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate("-50%,-50%")' }} className="spinner-border text-white my-5" role="status">
                        <span class="visually-hidden"></span> </div>

                }
                <div className="slider-part">
                    <div className="the-service-hading text-center py-5 ">

                        <h1>Here Our Awesome <span>Services</span></h1>

                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="visibility active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    {
                                        serviceData.map(servicesWork => <Services servicesWork={servicesWork}></Services>)
                                    }
                                </div>
                            </div>
                            {/* <div class="carousel-item">
                                <div className="row">
                                    {
                                        ServicesItem.map(servicesWork => <Services servicesWork={servicesWork}></Services>)
                                    }
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    {
                                        ServicesItem.map(servicesWork => <Services servicesWork={servicesWork}></Services>)
                                    }
                                </div>
                            </div> */}
                        </div>
                        {/* <button class="carousel-control-prev visibility" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon visibility" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next visibility" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon visibility" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button> */}
                    </div>

                    {/* <div className="explore-more text-center">
                        <button>Explore More</button>
                    </div> */}
                </div>

            </div>

        </section>
    );
};

export default Service;