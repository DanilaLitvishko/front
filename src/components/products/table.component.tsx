import React, { useState, useEffect } from "react";
import { DataGrid, GridRowId } from "@material-ui/data-grid";

import DialogError from "../dialog-error/dialog-error.component";
import axios from "axios";
import DialogProducts from "../dialog-products/dialog-products.component";
import { SaveButton } from "../complete-profile/complete-profile.styles";
import { useStyles } from "./products.styles";
import { useSelector } from "react-redux";
import { selectRole } from "../../redux/user/user.selectors";
import { OptionalInformation } from "../../interfaces/optional-information.interface";

const ControlledSelectionGrid = ({ rows }: { rows: OptionalInformation[] }) => {
  const classes = useStyles();

  const isAdmin = useSelector(selectRole);

  const columns = [
    {
      field: "name",
      headerName: "name",
      width: 150,
      editable: isAdmin,
    },
    {
      field: "description",
      headerName: "description",
      width: 250,
      editable: isAdmin,
    },
    {
      field: "price",
      headerName: "price",
      type: "number",
      width: 110,
      editable: isAdmin,
    },
  ];

  const [selectionModel, setSelectionModel] = useState<GridRowId[]>();
  const [openDialogError, setOpenDialogError] = useState(false);
  const [openDialogProducts, setOpenDialogProducts] = useState(false);
  const [price, setPrice] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    if (openDialogProducts) {
      setOpenDialogProducts(false);
    }
    if (openDialogError) {
      setOpenDialogError(false);
    }
  };

  useEffect(() => {
    if (selectionModel) {
      let cost = 0;
      selectionModel.map((productId) => {
        const product = rows.find((item) => item.id === productId);
        if (product?.price) {
          cost += product.price;
        }
      });
      setPrice(cost);
    }
  }, [selectionModel]);

  const handleBuyClick = async (e: Event) => {
    e.preventDefault();
    let products: OptionalInformation[] = [];
    if (selectionModel) {
      selectionModel.map((productId) => {
        const product = rows.find((item) => item.id === productId);
        if (product) {
          products.push(product);
        }
      });
      try {
        const { data } = await axios.post(
          "http://localhost:3001/products/buy",
          products
        );
        setOpenDialogProducts(true);
      } catch (error) {
        setError(error.response?.data.message);
        setOpenDialogError(true);
      }
    }
  };

  return (
    <div className={classes.table}>
      {
        <DataGrid
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          rows={rows}
          columns={columns}
        />
      }
      <SaveButton onClick={handleBuyClick}>Buy</SaveButton>
      {error ? (
        <DialogError
          open={openDialogError}
          close={handleClose}
          message={error}
        />
      ) : null}
      {openDialogProducts ? (
        <DialogProducts
          open={openDialogProducts}
          close={handleClose}
          price={price}
        />
      ) : null}
    </div>
  );
};

export default ControlledSelectionGrid;
