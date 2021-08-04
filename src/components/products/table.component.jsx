import React, {useState, useEffect} from 'react'
import { DataGrid, GridRowId } from '@material-ui/data-grid';

import DialogError from '../dialog-error/dialog-error.component'
import axios from 'axios';
import DialogProducts from '../dialog-products/dialog-products.component';
import { SaveButton} from '../complete-profile/complete-profile.styles'
import { useSelector } from 'react-redux';
import { selectRole } from '../../redux/user/user.selectors';


const ControlledSelectionGrid = ({rows}) => {

    let editableRows = rows;

    const isAdmin = useSelector(selectRole);

    const columns = [
        {
          field: 'name',
          headerName: 'name',
          width: 150,
          editable: isAdmin,
        },
        {
          field: 'description',
          headerName: 'description',
          width: 250,
          editable: isAdmin,
        },
        {
          field: 'price',
          headerName: 'price',
          type: 'number',
          width: 110,
          editable: isAdmin,
        },
      ];

    const [selectionModel, setSelectionModel] = useState();
    const [openDialogError, setOpenDialogError] = useState(false);
    const [openDialogProducts, setOpenDialogProducts] = useState(false);
    const [price, setPrice] = useState(0)
    const [error, setError] = useState(null)
    const [editRowsModel, setEditRowsModel] = React.useState({});

      const handleEditCellChangeCommitted = (params) => console.log(params)

    // const handleEditCellChangeCommitted = React.useCallback(
    //     (props) => {
    //         console.log(props)
    //       if (field === 'fullName') {
    //         const data = props; // Fix eslint value is missing in prop-types for JS files
    //         const [firstName, lastName] = data.value.toString().split(' ');
    //         const updatedRows = rows.map((row) => {
    //           if (row.id === id) {
    //             return { ...row, firstName, lastName };
    //           }
    //           return row;
    //         });
    //         setRows(updatedRows);
    //       }
    //     },
    //     [rows],
    //   );

    const handleClose = () => {
        if(open){
            setOpenDialogError(false);
        }
        if(openDialogProducts){
            setOpenDialogProducts(false);
        }
	};

    useEffect(() => {
        if(selectionModel){
            let cost = 0
            selectionModel.map((productId) => {
                const product = rows.find((item) => item.id === productId)
                cost += product.price;
            })
            setPrice(cost)
        }
    }, [selectionModel])

    const handleBuyClick = async (e) => {
        e.preventDefault();
        let products = [];
        selectionModel.map((productId) => {
            const product = rows.find((item) => item.id === productId)
            products.push(product)
        })
        try{
            const {data} = await axios.post('http://localhost:3001/products/buy', products)
            setOpenDialogProducts(true);
        }catch(error){
            setError(error.response?.data.message)
            setOpenDialogError(true)
        }
    }

    return (
      <div style={{ height: 600, width: '100%', marginTop:'50px' }}>
        {
                <DataGrid
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => {
                        setSelectionModel(newSelectionModel)
                    }}
                    selectionModel={selectionModel}
                    rows={rows}
                    columns={columns}
                    onEditCellChangeCommitted={handleEditCellChangeCommitted}
                />
        }
            <SaveButton onClick={handleBuyClick}>Buy</SaveButton>
        {
			error?<DialogError open={open} close={handleClose} message={error}/>
			:null
		}
        {
            openDialogProducts?<DialogProducts open={open} close={handleClose} price={price}/>
            :null
        }
      </div>
      
    );
  }

  export default ControlledSelectionGrid;