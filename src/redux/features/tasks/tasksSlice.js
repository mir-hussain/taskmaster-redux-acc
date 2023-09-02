import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: 1,
      status: 'pending',
      title: 'Remove Button',
      description:
        'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
      date: '2023-08-28',
      assignedTo: 'Mir Hussain',
      priority: 'high',
    },
  ],
  userSpecificTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: 'pending', ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: 'pending',
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) =>
          item.assignedTo === payload &&
          (item.status === 'pending' || item.status === 'running')
      );
    },
  },
});

export const { addTask, updateStatus, removeTask, userTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
