// ===================== NOTES =====================
// stubbing out backend data to just focus on forms
// would mock API if this was an existing code base and use axios
// =================================================


// ===========================================
// ===              ENTITIES               ===
// ===========================================

const allEntities = require('./entities.json');

const getEntityDetailsByID = (entityID) => {
  return allEntities.find(entity => entity.id === entityID)
};

const getEntitiesForOwner = (owner) => {
  return allEntities.filter(entity => entity.owner === owner)
};

const addNewEntity = (newEntity) => {
  
  // check for duplicate entity names, also done on front-end UI
  if (allEntities.find(entity => entity.name === newEntity.name)){
    // throw error
    return false
  }
  // TODO: check jurisdiction_id exists?
  // TODO: check owner exists?
  // CONFIRM: check wallet address not already in use??

  // set data values and push to database
  newEntity.id        = allEntities.length + 1;
  newEntity.type      = 'LLC'; // hard coded until multiple types
  newEntity.timestamp = Date.now();
  allEntities.push(newEntity);

  // TODO:CONFIRM: add associated compliance??

  // return newEntity with updated ID and fields
  return newEntity;
};

// ===========================================
// ===               OWNERS                ===
// ===========================================
const allOwners = require('./owners.json')

const getOwnerDetailsByID = (ownerID) => {
  return allOwners.find(owner => owner.owner === ownerID)
};


// ===========================================
// ===            JURISDICTIONS            ===
// ===========================================
const allJurisdictions = require('./jurisdictions.json');


// ===========================================
// ===               RULES                 ===
// ===========================================
const allRules = require('./rules.json');

const getRulesByJurisdictionID = (id) => {
  return allRules.filter(rule => rule.jurisdictionID === id);
}

// ===========================================
// ===             COMPLIANCE              ===
// ===========================================
const allCompliance = require('./compliance.json');

const getComplianceByEntityID = (id) => {
  return allCompliance.filter(compliance => compliance.entityID === id);
}

const addCompliance = (compliance) => {
  // set values and push to database
  compliance.id        = allCompliance.length + 1;
  compliance.timestamp = Date.now();
  compliance.active    = true;
  allCompliance.push(compliance);
  // return compliance with updated ID and fields
  return compliance;
}


module.exports = { 
  allEntities, getEntityDetailsByID, getEntitiesForOwner, addNewEntity, 
  allOwners , getOwnerDetailsByID, 
  allJurisdictions, 
  allRules, getRulesByJurisdictionID, 
  allCompliance, getComplianceByEntityID, addCompliance 
};

