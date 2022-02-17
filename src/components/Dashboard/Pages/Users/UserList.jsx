import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from "react-router-dom"
import Auth from '../../../../Auth';
import axios from 'axios';
import ModalB from '../../../ModalBoxes/Modal';
export const UserList = () => {
  const auth = Auth
  const [row, setRow] = useState([]);
  const [modal, setmodal] = useState(false);
  const [current, setCurrent] = useState(0);
  const [refresh,setRefresh]=useState(0);
  const handleDelete = (e) => {


    var config = {
      method: 'get',
      url: `/admin/delete-user/${e}`,
      headers: {
        'Authorization': `Bearer ${auth.getToken()}`,
      }
    };

    axios(config)
      .then(function (response) {
        setmodal(false);
        setRefresh(refresh=>refresh+1);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  useEffect(() => {

    let isMounted=true
    var config = {

      method: 'get',
      url: '/admin/get-all-users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.getToken()}`,

      }
    };
    axios(config).then(response => {
    if(isMounted)  setRow(response.data);
    }).catch(response => { })
    return (()=>{isMounted=false})
  }, [refresh]);
  const columns = [
    { field: 'user_id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'UserName', width: 150, },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'joinDate',
      headerName: 'JoinDate',
      width: 200,
    },
    {
      field: 'lastLogin',
      headerName: 'LastLogin',
      description: 'This column has a value getter and is not sortable.',

      width: 160,

    },
    {
      field: 'accountTypes',
      headerName: 'AccountType',
      description: 'This column has a value getter and is not sortable.',

      width: 160,

    },
    {
      field: 'action',
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/admin/users/" + params.row.user_id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className='userListDelete' onClick={() => {
              setCurrent(params.row.user_id)
              setmodal(!modal);
            }} />
          </div>
        );
      }
    }
  ];



  return (
    <div className='userList'>
      <h1>Users</h1>
      <div style={{ height: 400, width: '100%' }}>
        <ModalB
          show={modal}
          title={"Delete user"}
          body={"Are you sure you want to complete ? this action is irreversible"}
          handleYes={() => handleDelete(current)}
          handleClose={() => setmodal(false)}
        />
        <DataGrid
          getRowId={row => row.user_id}
          rows={row}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}
