import Task from './Task';

export default function Roadmap(): JSX.Element {
  return (
    <section className='flex w-full flex-col items-center justify-center space-y-4 px-12 py-8 text-secondary'>
      <h1 className='flex justify-center text-4xl font-bold'>Roadmap status</h1>
      <div className='flex grid-cols-12 flex-col text-gray-50 md:grid'>
        <Task status='working' date='2024-01-03' />
        <Task status='working' date='2024-01-07' />
        <Task status='working' date='2024-01-11' />
        <Task status='working' date='2024-01-14' />
      </div>
    </section>
  );
}
