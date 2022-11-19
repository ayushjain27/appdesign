import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Display.module.css';

const Display = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const getDetails = async () => {
        // TODO : API Call
        const response = await fetch("http://localhost:5000/api/details/fetchalldetails", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });

        const json = await response.json();
        console.log(json);
        setData(json);
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            getDetails();
        }
        else{
            navigate("/login");
        }
    }, [])

    return (
        <>
            <div className='container my-3'>
                <div className="row">
                    {data.map((item) => {
                        return (
                            <>
                                <div className="col-md-4">
                                    <div class={`${style.card} card`}>
                                        <img src="./Images/login.svg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Name: {item.name}</h5>
                                            <h5 class="card-title">Phone Number: {item.phone_number}</h5>
                                            <h5 class="card-title">Item Name: {item.name}</h5>
                                            <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class={`${style.line} list-group-item`}>
                                                <h5 class="card-title">Associate_Name: {item.associate_1}</h5>
                                                <h5 class="card-title">Phone Number: {item.phone_number_1}</h5>
                                                <h5 class="card-title">Expiry Date: {item.due_1}</h5>
                                                <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address_1}</p>
                                            </li>
                                            <li class={`${style.line} list-group-item`}>
                                                <h5 class="card-title">Associate_Name: {item.associate_2}</h5>
                                                <h5 class="card-title">Phone Number: {item.phone_number_2}</h5>
                                                <h5 class="card-title">Expiry Date: {item.due_2}</h5>
                                                <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address_2}</p>
                                            </li>
                                            <li class={`${style.line} list-group-item`}>
                                                <h5 class="card-title">Associate_Name: {item.associate_3}</h5>
                                                <h5 class="card-title">Phone Number: {item.phone_number_3}</h5>
                                                <h5 class="card-title">Expiry Date: {item.due_3}</h5>
                                                <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address_3}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Display
