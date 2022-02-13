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
  // TODO: check jurisdiction_id exists
  // TODO: check owner exists
  // TO CONFIRM: check wallet address not already in use??

  // set data values
  newEntity.id        = allEntities.length + 1;
  newEntity.type      = 'LLC'; // hard coded until multiple types
  newEntity.timestamp = Date.now();

  // add new entity to database
  allEntities.push(newEntity)

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


// ===========================================
// ===               RULES                 ===
// ===========================================


// ===========================================
// ===             COMPLIANCE              ===
// ===========================================

module.exports = { allEntities, getEntityDetailsByID, getEntitiesForOwner, addNewEntity, allOwners , getOwnerDetailsByID };

