import { Trash2 } from "lucide-react";

const TaskCard = ({
  task,
  onDelete,
  onStatusChange,
}) => {
  return (
    <div className="card hover:shadow-md">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-slate-900">
            {task.title}
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            {task.description}
          </p>
        </div>

        {/* Delete */}
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Status */}
      <div className="mt-4">
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(
              task._id,
              e.target.value
            )
          }
          className="input"
        >
          <option value="todo">
            Todo
          </option>

          <option value="in-progress">
            In Progress
          </option>

          <option value="done">
            Done
          </option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;

