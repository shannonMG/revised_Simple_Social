import Circle from '../models/Circle';
import CircleUser from '../models/CircleUser';
export const seedCircle = async () => {
try{
  const circles=await Circle.bulkCreate([
    { name: 'Snoop', permission_Key: '123' },
    {name: 'Bootcamp', permission_Key: '222'}
  ]);
  await CircleUser.bulkCreate([
    { user_id: 1, circle_id: circles[0].id },
    {user_id: 1, circle_id: circles[1].id},
  ]);
} catch(error) {
    console.log('Error seeding data:', error)
}
};
