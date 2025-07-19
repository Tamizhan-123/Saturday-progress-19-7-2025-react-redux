import React from "react";
import { useSelector } from "react-redux";
import { deleteCustomer } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerView() {
    const customers = useSelector((state) => state.customers);
    const dispatch = useDispatch();

    function deleteHandler(index) {
        dispatch(deleteCustomer(index));
    }

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Customer List</h3>
            <ul style={styles.list}>
                {customers.map((customer, index) => (
                    <li key={index} style={styles.listItem}>
                        <span>{customer}</span>
                        <button onClick={() => deleteHandler(index)} style={styles.deleteButton}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        padding: '10px 0'
    },
    heading: {
        marginBottom: '10px',
        color: '#333'
    },
    list: {
        listStyle: 'none',
        padding: 0
    },
    listItem: {
        backgroundColor: '#fff',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        cursor: 'pointer'
    }
};
