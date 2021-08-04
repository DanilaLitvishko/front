import React, { useState, useEffect } from "react";
import { DataGrid, GridRowId } from "@material-ui/data-grid";
import TabPanel from "../tab-panel/tab-panel.component";

import { AntTab, AntTabs } from "../auth/auth.styles";
import { Window } from "./products.styles";
import { useInfoFromBackend } from "../../hooks/useInfoFromBackend.hook";
import ControlledSelectionGrid from "./table.component";
import { OptionalInformation } from "../../interfaces/optional-information.interface";

const Products = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const loadProducts = useInfoFromBackend("http://localhost:3001/products");

  const [forSubscribersProducts, setForSubscribersProducts] = useState<
    OptionalInformation[]
  >([]);
  const [forAllProducts, setForAllProducts] = useState<OptionalInformation[]>(
    []
  );

  useEffect(() => {
    if (loadProducts.data) {
      const fsp: OptionalInformation[] = [];
      const fap: OptionalInformation[] = [];
      loadProducts.data.map((item) => {
        if (item.forSubscribers) {
          fsp.push(item);
        } else {
          fap.push(item);
        }
      });
      setForSubscribersProducts(fsp);
      setForAllProducts(fap);
    }
  }, [loadProducts.data]);

  return (
    <div>
      {loadProducts.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Window>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
            centered
          >
            <AntTab label="Products for subscribers" />
            <AntTab label="Products for all customers" />
          </AntTabs>
          <TabPanel value={value} index={0}>
            <ControlledSelectionGrid rows={forSubscribersProducts} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ControlledSelectionGrid rows={forAllProducts} />
          </TabPanel>
        </Window>
      )}
    </div>
  );
};

export default Products;
