import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import Chart from '../../Charts/Chart';
import axios from 'axios';
import Auth from '../../../../Auth';
import { DeleteOutlined } from '@material-ui/icons';
const OrdersList = () => {
    const columns = [
  
        { field: 'order_id', headerName: 'ID', width: 70 },
        { field: 'orderDate', headerName: 'Order date', width: 200 ,},
        { field: 'orderPrice', headerName: 'Order Price', width: 150 },
        {
          field: 'orderStatus',
          headerName: 'Order Status',
          width: 180, 
         },
        {
          field: 'orderQuantity' ,
          headerName: 'OrderQuantity',
          description: 'This column has a value getter and is not sortable.',
          
          width: 200,
          
        },
        
        {
            field:'action',
            headerName:"Action",
            width:150,
            renderCell:(params)=>{
                return(
                    <div>
                        <Link to={"/admin/orderDetail/"+params.row.order_id}>
                        <button className="userListEdit">View</button>
                        </Link>
                        
                    </div>
                );
            }
        }
      ];
    const [orders, setorders] = useState([]);
    useEffect(()=>{
      let isMounted=true
        let config={
            method:'get',
            url:'/admin/get-all-orders',
            headers:{
                'Authorization':`Bearer ${Auth.getToken()}`
            }
        }
        axios(config).then(_res=>{
           if (isMounted) setorders(_res.data);
        }).catch(_err=>{
            console.log(_err)
        });
        return (()=>{isMounted=false})
    },[orders]);
  return (
    <div className='userList'>
            <div className="productTitleContainer">
                <h1>Orders</h1>
            </div>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
        getRowId={orders=>orders.order_id}
          rows={orders}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div> 
      <h2>Orders</h2>
      <Chart/>       
        </div>
  )
}
export default OrdersList;