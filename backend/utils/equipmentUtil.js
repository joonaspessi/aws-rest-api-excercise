'use strict';
const uuid = require('uuid');
const addYears = require('date-fns/addYears');
const Joi = require('@hapi/joi');

const equipmentSchema = Joi.object({
  id: Joi.string()
    .min(1)
    .required(),
  address: Joi.string()
    .min(1)
    .required(),
  contractStartDate: Joi.date()
    .timestamp()
    .raw()
    .required(),
  contractEndDate: Joi.date()
    .timestamp()
    .raw()
    .required(),
  status: Joi.string().valid('Running', 'Stopped')
});

const generateIpv4Address = () =>
  Math.floor(Math.random() * 255) +
  1 +
  '.' +
  (Math.floor(Math.random() * 255) + 0) +
  '.' +
  (Math.floor(Math.random() * 255) + 0) +
  '.' +
  (Math.floor(Math.random() * 255) + 0);

const createEquipment = equipment => {
  Joi.assert(equipment, equipmentSchema);
  return equipment;
};

const generateEquipment = ({
  id = uuid.v1(),
  address = generateIpv4Address(),
  contractStartDate = new Date().getTime(),
  contractEndDate = addYears(
    new Date().getTime(),
    parseInt(1 + 10 * Math.random())
  ).getTime(),
  status = 'Running'
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
  return new Array(amount).fill(null).map(() => generateEquipment({}));
};

module.exports.createEquipment = createEquipment;
module.exports.populateEquipments = populateEquipments;
