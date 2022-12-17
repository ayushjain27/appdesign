import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
    const [detail, setDetail] = useState({ customer_id: "", reference_id: "", name: "", phone_number: "", address: "", item_name: "", item_price: "", down_payment: "", emi_amount: "", due_1: "", amount_1: "", due_2: "", amount_2: "", due_3: "", amount_3: "", due_4: "", amount_4: "", due_5: "", amount_5: "", associate_1: "", phone_number_1: "", address_1: "", associate_2: "", phone_number_2: "", address_2: "", associate_3: "", phone_number_3: "", address_3: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        if (localStorage.getItem('token')) {
            e.preventDefault();
            const { customer_id, reference_id, name, phone_number, address, item_name, item_price, down_payment, emi_amount, due_1, amount_1, due_2, amount_2, due_3, amount_3, due_4, amount_4, due_5, amount_5, associate_1, phone_number_1, address_1, associate_2, phone_number_2, address_2, associate_3, phone_number_3, address_3 } = detail;
            const response = await fetch("http://localhost:5000/api/details/adddetail", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ customer_id, reference_id, name, phone_number, address, item_name, item_price, down_payment, emi_amount, due_1, amount_1, due_2, amount_2, due_3, amount_3, due_4, amount_4, due_5, amount_5, associate_1, phone_number_1, address_1, associate_2, phone_number_2, address_2, associate_3, phone_number_3, address_3 })
            });
            const json = await response.json();
            console.log(json);

            if (json.success) {
                // Save the auth token and redirect
                props.showAlert("Added Successfully", "success");
                navigate('/display');
            }
            else {
                props.showAlert("Invalid Details", "danger")
            }

        }
        else {
            navigate("/login");
        }
    }

    const onChange = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }

    return (
        <>
            <style jsx="true">
                {`
                    .button {
                        border-radius: 0;
                    }
                `}
            </style>
            <div className='container d-flex justify-content-between my-3'>
                <h3>Dashboard</h3>
            </div>

            <div className="row my-4 mx-auto">
                <div className="col-md-4">
                    <img className='img-fluid m-auto shadow' src="./Images/internalbot.svg" alt="internalbot" />
                </div>
                <div className='col-md-8  m-auto'>
                    <div className='card shadow border-0'>
                        <div className="card-body">
                            <form>
                                <h3 className="mb-3 text-decoration-underline">Customer Details</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Customer Id</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="customer_id"
                                                name="customer_id"
                                                onChange={onChange}
                                                placeholder='Enter customer id'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Reference Id</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="reference_id"
                                                name="reference_id"
                                                onChange={onChange}
                                                placeholder='Enter Reference id'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Customer Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                onChange={onChange}
                                                placeholder='Enter customer name'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Phone Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="phone_number"
                                                name="phone_number"
                                                onChange={onChange}
                                                placeholder='Enter Phone Number'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Item Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='item_name'
                                                id="item_name"
                                                onChange={onChange}
                                                placeholder='Item Name'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Item Price</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="item_price"
                                                name="item_price"
                                                onChange={onChange}
                                                placeholder='Enter item price'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Down Payment</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="down_payment"
                                                name="down_payment"
                                                onChange={onChange}
                                                placeholder='Enter Down Payment'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Emi Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name='emi_amount'
                                                id="emi_amount"
                                                onChange={onChange}
                                                placeholder='Enter Emi Amount'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='address'
                                                id="address"
                                                onChange={onChange}
                                                placeholder='Enter your address'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Due Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="due_1"
                                                id="due_1"
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Amount Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="amount_1"
                                                name="amount_1"
                                                onChange={onChange}
                                                placeholder='Enter Amount'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Due Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="due_2"
                                                id="due_2"
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Amount Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="amount_2"
                                                name="amount_2"
                                                onChange={onChange}
                                                placeholder='Enter Amount'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Due Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="due_3"
                                                id="due_3"
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Amount Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="amount_3"
                                                name="amount_3"
                                                onChange={onChange}
                                                placeholder='Enter Amount'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Due Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="due_4"
                                                id="due_4"
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Amount Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="amount_4"
                                                name="amount_4"
                                                onChange={onChange}
                                                placeholder='Enter Amount'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Due Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="due_5"
                                                id="due_5"
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Amount Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="amount_5"
                                                name="amount_5"
                                                onChange={onChange}
                                                placeholder='Enter Amount'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mb-3 text-decoration-underline">Associate Details</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Associate_1</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="associate_1"
                                                name="associate_1"
                                                onChange={onChange}
                                                placeholder='Enter associate name'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Phone Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="phone_number_1"
                                                name="phone_number_1"
                                                onChange={onChange}
                                                placeholder='Enter Phone Number'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='address_1'
                                                id="address_1"
                                                onChange={onChange}
                                                placeholder='Enter your address'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Associate_2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="associate_2"
                                                name="associate_2"
                                                onChange={onChange}
                                                placeholder='Enter associate name'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Phone Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="phone_number_2"
                                                name="phone_number_2"
                                                onChange={onChange}
                                                placeholder='Enter Phone Number'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='address_2'
                                                id="address_2"
                                                onChange={onChange}
                                                placeholder='Enter your address'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Associate_3</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="associate_3"
                                                name="associate_3"
                                                onChange={onChange}
                                                placeholder='Enter associate name'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Phone Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="phone_number_3"
                                                name="phone_number_3"
                                                onChange={onChange}
                                                placeholder='Enter Phone Number'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='address_3'
                                                id="address_3"
                                                onChange={onChange}
                                                placeholder='Enter your address'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-grid col-3 ms-auto">
                                    <button type="submit" className="btn btn-dark button" onClick={handleSubmit}>Submit and Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Dashboard;