import React, {useState} from "react";
import Task from "../../types/Task";

interface FormProps {
    onSubmit: (formData: FormData) => void;
    task?: Task | null;
    userId?: string;
}

interface FormData {
    _id?: string | null;
    userId: string;
    name: string;
    detail: string;
    finished: boolean;
    createdAt: Date;
}

const TaskForm = ({onSubmit, task, userId}: FormProps) => {
    const [formData, setFormData] = useState<FormData>({
        _id: task ? task._id : null,
        userId: userId ?? '',
        name: task && task.name ? task.name : '',
        detail: task && task.detail ? task.detail : '',
        finished: task && task.finished ? task.finished : false,
        createdAt: task && task.createdAt ? new Date(task.createdAt) : new Date(),
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        // Traitement de l'input ciblé
        switch (event.target.name) {
            // S'il s'agit de 'finished' alors on attribue au formData son 'checked' au lieu de son 'value'
            case 'finished':
                setFormData({...formData, finished: event.target.checked});
                break;

            // S'il s'agit de 'createdAt' alors on attribue au formData sa 'value' convertie en Date
            case 'createdAt':
                setFormData({...formData, createdAt: new Date(value)});
                break;

            // Le reste des cas passent normalement
            default:
                setFormData({...formData, [name]: value});
                break;
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({
            userId: '',
            name: '',
            detail: '',
            finished: false,
            createdAt: new Date(),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>

            <label>
                Détail :
                <input
                    type="text"
                    name="detail"
                    value={formData.detail}
                    onChange={handleChange}
                />
            </label>

            <label>
                Terminée :
                <input
                    type="checkbox"
                    name="finished"
                    onChange={handleChange}
                    defaultChecked={formData.finished}
                />
            </label>

            <label>
                Date de création :
                {/*
                    Conversion de la date en string format 'YYYY-MM-DD' :
                        - toISOString() : convertie au format 'YYYY-MM-DDTHH:mm:ss.sssZ'
                        - split('T') : sépare la chaîne au niveau du 'T' : ['YYYY-MM-DD', 'YYYY-MM-DDZ']
                        - [0] : récupère le premier élément du tableau : 'YYYY-MM-DD'
                */}
                <input
                    type="date"
                    name="createdAt"
                    value={formData.createdAt.toISOString().split("T")[0]}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Envoyer</button>
        </form>
    );
}

export default TaskForm;