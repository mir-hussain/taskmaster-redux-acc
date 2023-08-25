import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MyTasks from '../components/tasks/MyTasks';
import TaskCard from '../components/tasks/TaskCard';

const Tasks = () => {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-9 px-10 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Tasks</h1>
          </div>
          <div className="flex gap-5">
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="btn btn-primary">Add Task</button>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">
              <TaskCard />
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">
              <TaskCard />
              <TaskCard />
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">
              <TaskCard />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-10">
        <div>
          <h1 className="text-xl">Members</h1>
          <div className="flex gap-3 mt-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;
