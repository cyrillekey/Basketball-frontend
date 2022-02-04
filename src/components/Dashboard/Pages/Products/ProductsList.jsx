import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {Link} from "react-router-dom"
import Chart from '../../Charts/Chart';
export const ProductsList = () => {
    
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'JoinDate', headerName: 'JoinDate', width: 150 ,},
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 180, 
    renderCell:(params)=>{
        return(
            <div>{params.row.JoinDate}</div>
        );
    } },
    {
      field: 'type' ,
      headerName: 'Account Type',
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
                    <Link to={"/product/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className='userListDelete'/>
                </div>
            );
        }
    }
  ];
  
  const rows = [
    { id: 1, UserName: 'Jon Snow', JoinDate: '122444', email: "dfd",status:"active",type:"ADMIN" },
    { id: 2, UserName: 'Jon Snow', JoinDate: '122444', email: "dfd",status:"active",type:"ADMIN" },
    { id: 3, UserName: 'Jon Snow', JoinDate: '122444', email: "dfd",status:"active",type:"ADMIN" },
    { id: 4, UserName: 'Jon Snow', JoinDate: '122444', email: "dfd",status:"active",type:"ADMIN" },
    { id: 5, UserName: 'Jon Snow', JoinDate: '122444', email: "dfd",status:"active",type:"ADMIN" },
    { id: 6, UserName: 'Jon Snow', JoinDate: '122444', email: "dfd",status:"active",type:"ADMIN" },
  ];
  
    return (
        <div className='userList'>
            <h1>Products</h1>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
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
