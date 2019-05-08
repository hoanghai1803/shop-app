import React from "react";
import Switch from "@material-ui/core/Switch";
import RadioButtons from "./RadioButtons";

const SwitchSort = props => {
  const { checkedSort, onChangeSwitch, selectedValue, onChangeSort } = props;

  return (
    <React.Fragment>
      <strong>Sort by Price</strong>
      <Switch
        checked={checkedSort}
        onChange={onChangeSwitch}
        value="checkedSort"
      />
      {/* If sorting switch is actived, this will render radio 
      buttons so that user can choose type of sort */}
      {checkedSort && (
        <RadioButtons
          selectedValue={selectedValue}
          onChangeSort={onChangeSort}
        />
      )}
    </React.Fragment>
  );
};

export default SwitchSort;
