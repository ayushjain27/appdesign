import React, { useState, useEffect } from 'react'
import styles from './SearchBar';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

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
        // console.log(json);
        setData(json);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getDetails();
        }
        else {
            navigate("/login");
        }
    }, [])

    const onChange = (event) => {
        const search = event.target.value;
        const newFilter = data.filter((value) => {
            return value.due_1.includes(search) || value.due_2.includes(search) || value.due_3.includes(search) || value.due_4.includes(search) || value.due_5.includes(search);
        })
        setFilter(newFilter);
        console.log("Ayush");
    }

    return (
        <>
            <div className="container">
                <div className="d-grid col-lg-7 mx-auto">
                    <div className={`${styles.card} card`}>
                        <div className="card-body">
                            <div className="row">
                                <button className="col-sm-2 btn btn-warning col-form-label">Search</button>
                                <div className="col-sm-10">
                                    <input onChange={onChange} type="text" className="form-control" id="search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className="row">
                    {filter.map((item) => {
                        return (
                            <>
                                <div className="col-md-4 my-3">
                                    <div class={`${styles.cards} card`}>
                                        <img src="./Images/login.svg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Customer_Id: {item.customer_id}</h5>
                                            <h5 class="card-title">Reference_Id: {item.reference_id}</h5>
                                            <h5 class="card-title">Name: {item.name}</h5>
                                            <h5 class="card-title">Phone Number: {item.phone_number}</h5>
                                            <h5 class="card-title">Item Name: {item.name}</h5>
                                            <h5 class="card-title">Item Price: {item.item_price}</h5>
                                            <h5 class="card-title">Down Payment: {item.down_payment}</h5>
                                            <h5 class="card-title">Emi_Amount: {item.emi_amount}</h5>
                                            <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address}</p>
                                            <h5 class="card-title">Expiry Date: {item.due_1}</h5>
                                            <h5 class="card-title">Expiry Date: {item.amount_1}</h5>
                                            <h5 class="card-title">Expiry Date: {item.due_2}</h5>
                                            <h5 class="card-title">Expiry Date: {item.amount_2}</h5>
                                            <h5 class="card-title">Expiry Date: {item.due_3}</h5>
                                            <h5 class="card-title">Expiry Date: {item.amount_3}</h5>
                                            <h5 class="card-title">Expiry Date: {item.due_4}</h5>
                                            <h5 class="card-title">Expiry Date: {item.amount_4}</h5>
                                            <h5 class="card-title">Expiry Date: {item.due_5}</h5>
                                            <h5 class="card-title">Expiry Date: {item.amount_5}</h5>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class={`${styles.line} list-group-item`}>
                                                <h5 class="card-title">Associate_Name: {item.associate_1}</h5>
                                                <h5 class="card-title">Phone Number: {item.phone_number_1}</h5>
                                                <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address_1}</p>
                                            </li>
                                            <li class={`${styles.line} list-group-item`}>
                                                <h5 class="card-title">Associate_Name: {item.associate_2}</h5>
                                                <h5 class="card-title">Phone Number: {item.phone_number_2}</h5>
                                                <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address_2}</p>
                                            </li>
                                            <li class={`${styles.line} list-group-item`}>
                                                <h5 class="card-title">Associate_Name: {item.associate_3}</h5>
                                                <h5 class="card-title">Phone Number: {item.phone_number_3}</h5>
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

export default SearchBar
