import User  from '../models/User.js';
export const seedUsers = async () => {
  await User.bulkCreate([
    { email: 'snoop@dawg.com', password: 'password', location:'New Hampshire', time_zone:'America-New York' },
    { email: 'test@test.com', password: 'password', location:'California', time_zone:'Europe-London'},
  ], { individualHooks: true });
};
