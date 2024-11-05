import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCircle } from '../api/circleAPI';
import { CircleData } from '../interfaces/CircleData';
import { UserData } from '../interfaces/UserData';
import { retrieveUsers } from '../api/userApi';

const CreateCircle = () => {
  const [newCircle, setNewCircle] = useState<CircleData | undefined>(
    {
      id: 0,
      name: '',
     
    }
  );

  const navigate = useNavigate();

  const [users, setUsers] = useState<UserData[] | undefined>([]);

  const getAllUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error('Failed to retrieve user info', err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newCircle){
      const data = await createCircle(newCircle);
      console.log(data);
      navigate('/');
    }
  }

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCircle((prev: any) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCircle((prev: any) => (prev ? { ...prev, [name]: value } : undefined));
  }

  const handleUserChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCircle((prev: any) => (prev ? { ...prev, [name]: value } : undefined));
  }

  return (
    <>
      <div className='container'>
        <form className='form' onSubmit=
        {handleSubmit}>
          <h1>Create Circle</h1>
          <label htmlFor='cName'>Circle Name</label>
          <textarea 
            id='cName'
            name='name'
            value={newCircle?.name || ''}
            onChange={handleTextAreaChange}
            />
          )
          }
          </select>
          <button type='submit' onSubmit={handleSubmit}>Submit New Circle</button>
        </form>
      </div>
    </>
  )
};

export default CreateCircle;
