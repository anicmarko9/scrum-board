
import { useState } from 'react';

export default function Issue({ onClose }: { onClose: () => void }): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ title, description, priority });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black overflow-auto bg-opacity-50 flex items-center justify-center">
      <div className="bg-white lg:w-2/5 sm:w-4/5 w-4/5 p-6 rounded shadow-lg z-10" role="dialog" aria-modal="true">
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <label htmlFor="title" className="font-semibold">Title:</label>
          <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />

          <label htmlFor="description" className='font-semibold'>Description:</label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary' />

          <label htmlFor="priority" className="font-semibold">Priority:</label>
          <select id="priority" value={priority} onChange={e => setPriority(e.target.value)} className='block w-full px-4 py-2 mt-1 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button type="submit" className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md shadow-sm hover:bg-lighterBG hover:text-secondary border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'>Create Issue</button>
          <button type="button" onClick={onClose} className='inline-flex justify-center px-4 py-2 text-sm font-medium text-secondary bg-lighterBG rounded-md shadow-sm hover:bg-lighterBG hover:text-secondary border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

