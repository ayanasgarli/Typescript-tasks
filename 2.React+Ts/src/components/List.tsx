import React, { useState } from 'react';

interface ListProps {
  onSubmit: (data: ListData) => void;
}

interface ListData {
  name: string;
  surname: string;
  age: number;
  role: string;
  groupName?: string;
  gpa?: number;
  hobbies?: string;
  salary?: number;
  skills?: string;
  jobs?: string;
}

const List: React.FC<ListProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ListData>({
    name: '',
    surname: '',
    age: 0,
    role: 'Human',
  });

  const [submittedData, setSubmittedData] = useState<ListData[]>([]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof ListData
  ) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.name && formData.surname && formData.age) {
      setSubmittedData([...submittedData, formData]);
      onSubmit(formData);
      setFormData({
        name: '',
        surname: '',
        age: 0,
        role: 'Human',
      });
    } else {
      alert('fill required ones ');
    }
  };

  const renderSubmittedData = () => {
    return submittedData.map((data, index) => (
      <li key={index}>
        {data.name} {data.surname} {data.age} {data.role}
        {data.role === 'Student' && (
          <>
            {data.groupName} {data.gpa} {data.hobbies}
          </>
        )}
        {data.role === 'Employee' && (
          <>
            {data.salary} {data.skills} {data.jobs}
          </>
        )}
      </li>
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              value={formData.name}
              onChange={(e) => handleInputChange(e, 'name')}
              required
            />
            <input
              type="text"
              placeholder="surname"
              value={formData.surname}
              onChange={(e) => handleInputChange(e, 'surname')}
              required
            />
            <input
              type="number"
              placeholder="age"
              value={formData.age}
              onChange={(e) => handleInputChange(e, 'age')}
              required
            />
            <select
              value={formData.role}
              onChange={(e) => handleInputChange(e, 'role')}
            >
              <option value="Human" disabled>
                Human
              </option>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
            </select>
       
        {formData.role === 'Student' && (
          <>
            <div>
                <input
                  type="text"
                  placeholder="group name"
                  value={formData.groupName || ''}
                  onChange={(e) => handleInputChange(e, 'groupName')}
                  required
                />
                <input
                  type="number"
                  placeholder="gpa"
                  value={formData.gpa || 0}
                  onChange={(e) => handleInputChange(e, 'gpa')}
                  required
                />
                <input
                  type="text"
                  placeholder="hobbies"
                  value={formData.hobbies || ''}
                  onChange={(e) => handleInputChange(e, 'hobbies')}
                />
              </div>
          </>
        )}
        {formData.role === 'Employee' && (
          <>
            <div>
                <input
                  type="number"
                  placeholder="salary"
                  value={formData.salary || 0}
                  onChange={(e) => handleInputChange(e, 'salary')}
                  required
                />
                <input
                  type="text"
                  placeholder="skills"
                  value={formData.skills || ''}
                  onChange={(e) => handleInputChange(e, 'skills')}
                  required
                />
                <select
                  value={formData.jobs || ''}
                  onChange={(e) => handleInputChange(e, 'jobs')}
                >
                  <option value="dev">dev</option>
                  <option value="designer">designer</option>
                  <option value="marketing">marketing</option>
                  <option value="smm">smm</option>
                  <option value="ceo">ceo</option>
                </select>
            </div>
          </>
        )}
        <div>
          <button type="submit">add</button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                name: '',
                surname: '',
                age: 0,
                role: 'Human',
              })
            }
          >
            cancel
          </button>
        </div>
      </form>
      <ul>{renderSubmittedData()}</ul>
    </div>
  );
};

export default List;
