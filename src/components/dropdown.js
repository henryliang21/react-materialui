import { useState } from "react";
import { Select, MenuItem, FormControl } from "@material-ui/core";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  return (
    <FormControl>
      <div>Select value: {selectedValue}</div>
      <Select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <MenuItem value="0" selected="true">
          0
        </MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
