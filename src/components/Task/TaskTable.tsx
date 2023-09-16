import { FC } from 'react';
import { Link } from 'react-router-dom';
import Task from '../../types/Task';
import User from '../../types/User';
import TaskDeleteButton from './TaskDeleteButton';
import TaskUpdateButton from './TaskUpdateButton';
import '../../assets/css/TaskTable.css'; // Import your CSS file for styling

interface Props {
  tasks: Task[];
  users: User[];
}

const TaskTable: FC<Props> = ({ tasks, users }: Props) => {
  // Affichage s'il n'y a aucune tâches
  if (!tasks || tasks.length === 0) {
    return <h1>Aucune tâches</h1>;
  }

  // Retour du tableau de tâches
  return (
    <div className="task-table-container">
      <table className="task-table">
        
        <thead>
          <tr>
            <th>Utilisateur</th>
            <th>Nom</th>
            <th>Détail</th>
            <th>Terminée</th>
            <th>Date de création</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* Lignes du tableau */}
          {tasks?.map((task, key) => {
            // Recherche de l'utilisateur correspondant à la tâche
            const user = users.find((user) => user._id === task.userId);
            return (
              <tr key={key}>
                {/* Lien vers la liste des tâches pour l'utilisateur */}
                <td>
                  <Link to={'/users/' + user?._id + '/tasks'}>
                    {user?.email}
                  </Link>
                </td>

                {/* Nom de la tâche */}
                <td>{task.name}</td>

                {/* Détail de la tâche */}
                <td>{task.detail}</td>

                {/* Tâche terminée ? */}
                <td>
                  <input
                    type="checkbox"
                    checked={task.finished}
                    readOnly={true}
                  />
                </td>

                {/* Date de création de la tâche */}
                <td>{task.createdAt.toString().split('T')[0]}</td>

                {/* Actions de la tâche */}
                <td>
                  <TaskUpdateButton task={task} />
                  <TaskDeleteButton task={task} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  );
};

export default TaskTable;
