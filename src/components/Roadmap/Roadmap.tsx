import { FaCheck } from 'react-icons/fa';
import Task from './Task';

const Roadmap = () => {
  return (
    <div className='mt-4 p-4'>
      <h1 className='mb-6 text-center text-4xl font-semibold'>
        Roadmap status
      </h1>
      <div className='container'>
        <div className='flex grid-cols-12 flex-col text-gray-50 md:grid'>
          <Task status='working' date='30 october' />
          <Task status='working' date='30 october' />
          <Task status='working' date='30 october' />
          <Task status='working' date='30 october' />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
