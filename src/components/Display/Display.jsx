import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import exportFromJSON from 'export-from-json';
import style from './Display.module.css';

const Display = () => {
    const [data, setData] = useState([]);
    const datas = [
        { name : "Ayush", age: "23"},
        { name : "AyushJ", age: "20"}
    ];
    const fileName = "download"
    const exportType = "xls"

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

    const ExportToExcel = () => {
        exportFromJSON({data, fileName, exportType});
        console.log(exportFromJSON({data, fileName, exportType}));
        console.log("Ayush");
    }

    return (
        <>
        <button className='mx-3' type="button" onClick={ExportToExcel}>Download</button>
            <div className='container my-3'>
                <div className="row">
                    {data.map((item) => {
                        return (
                            <>
                                <div className="col-md-4 my-3">
                                    <div class={`${style.card} card`}>
                                        <img src="./Images/login.svg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Customer_Id: {item.customer_id}</h5>
                                            <h5 class="card-title">Reference_Id: {item.reference_id}</h5>
                                            <h5 class="card-title">Name: {item.name}</h5>
                                            <h5 class="card-title">Phone Number: {item.phone_number}</h5>
                                            <h5 class="card-title">Item Name: {item.item_name}</h5>
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
                                            <li class={`${style.line} list-group-item`}>
                                                <h5 class="card-title">Associate_Name: {item.associate_1}</h5>
                                                <h5 class="card-title">Phone Number: {item.phone_number_1}</h5>
                                                <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address_1}</p>
                                            </li>
                                            <li class={`${style.line} list-group-item`}>
                                                <h5 class="card-title">Associate_Name: {item.associate_2}</h5>
                                                <h5 class="card-title">Phone Number: {item.phone_number_2}</h5>
                                                <p class="card-title"><span className='fw-bold fs-4'>Address:</span> {item.address_2}</p>
                                            </li>
                                            <li class={`${style.line} list-group-item`}>
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

export default Display
