import { combineReducers } from 'redux';
import authReducer from './authReducer';
import machineLevelReducer from './machineLevelReducer';
import userRecordReducer from './userRecordReducer';
import vsModeReducer from './vsModeReducer';
import opponentReducer from './opponentReducer';
import availableUsersReducers from './availableUsersReducers';

const rootReducer = combineReducers({
  user: authReducer,
  userRecords: userRecordReducer,
  machineLevel: machineLevelReducer,
  vsMode: vsModeReducer,
  opponent: opponentReducer,
  availableUsers: availableUsersReducers,
});

export default rootReducer;