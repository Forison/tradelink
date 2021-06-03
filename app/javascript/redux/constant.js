const initialState = {
	user: {
		username: '',
    email: '',
    isLogin: false,
    token: ''
  },
  opponent: {
		username: '',
    email: '',
  },
  userRecords: [],
  availableUsers: [],
  machineLevel: 'Easy',
  vsMode: 'Machine'
};
export {initialState}