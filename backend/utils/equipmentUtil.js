"use strict";
const uuid = require("uuid");
var addYears = require("date-fns/addYears");

const createEquipment = ({
  id = uuid.v1(),
  address = "N/A",
  contractStartDate = new Date().getTime(),
  // By default add devices with 2 year contract
  contractEndDate = addYears(new Date().getTime(), 2).getTime(),
  status = "Running"
} = {}) => {
  return {
    id,
    address,
    contractStartDate,
    contractEndDate,
    status
  };
};

const populateEquipments = (amount = 10) => {
  return new Array(amount).fill(null).map(() => createEquipment({}));
};

module.exports.createEquipment = createEquipment;
module.exports.populateEquipments = populateEquipments;
