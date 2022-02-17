import React,{useState,useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {Link} from "react-router-dom"
import Chart from '../../Charts/Chart';

import axios from 'axios';
import Auth from '../../../../Auth';
export const ProductsList = () => {
  
  const [rows, setrows] = useState([]);  
  useEffect(()=>{
    let isMounted=true
var config = {
  method: 'get',
  url: '/get-all-products',
  headers: { 
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${Auth.getToken()}`, 
      
    }
  }
};
axios(config)
.then(response=> {
 if(isMounted) setrows(response.data)
})
.catch(error=> {
  console.log(error);
})
return (()=>{isMounted=false})
  },[rows]);
const columns = [
  
    { field: 'product_id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: 'ProductName', width: 200 ,},
    { field: 'productPrice', headerName: 'Price(Ksh)', width: 150 },
    {
      field: 'category',
      headerName: 'Category',
      width: 180, 
     },
    {
      field: 'lastPurchase' ,
      headerName: 'LastPurchase',
      description: 'This column has a value getter and is not sortable.',
      
      width: 200,
      
    },
    {
      field: 'isFeature' ,
      headerName: 'Featured',
      description: 'This column has a value getter and is not sortable.',
      
      width: 160,
      
    },
    {
        field:'action',
        headerName:"Action",
        width:150,
        renderCell:(params)=>{
            return(
                <div>
                    <Link to={"/admin/singleproduct/"+params.row.product_id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className='userListDelete'/>
                </div>
            );
        }
    }
  ];
  
  
  
    return (
        <div className='userList'>
            <div className="productTitleContainer">
                <h1>Product</h1>
                <Link to="/admin/createproduct">
                <button className="productAdd">Create</button>
                </Link>
            </div>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
        getRowId={rows=>rows.product_id}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div> 
      <h2>Product Sales</h2>
      <Chart/>       
        </div>
    )
}
