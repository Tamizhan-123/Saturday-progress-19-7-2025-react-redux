import React, { useState } from 'react';
import CustomerView from './CustomerView';
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from 'react-redux';

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function addCustomer() {
        if (input) {
            dispatch(addCustomerAction(input));
            setInput("");
        }
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Customer Management App</h2>
            <div style={styles.form}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter customer name"
                    style={styles.input}
                />
                <button onClick={addCustomer} style={styles.addButton}>Add</button>
            </div>
            <CustomerView />
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '600px',
        margin: '30px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333'
    },
    form: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '30px'
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        flex: 1
    },
    addButton: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};
