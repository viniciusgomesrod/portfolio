import React from 'react';

const coursesData = [
  { name: 'Artificial Intelligence', hours: 95, modality: 'Hybrid', grade: 9.5, status: 'Passed' },
  { name: 'Data Structures', hours: 80, modality: 'Hybrid', grade: 9.2, status: 'Passed' },
  { name: 'Web Development', hours: 95, modality: 'Online', grade: 9.8, status: 'Passed' },
  { name: 'Algorithms', hours: 80, modality: 'Hybrid', grade: 9.0, status: 'Passed' },
];

const SemesterCard = ({ semesterNumber }) => (
  <div className="semester-card">
    <h3>{semesterNumber}º Semestre</h3>
    <table>
      <thead>
        <tr>
          <th>Matéria</th>
          <th>C.H.</th>
          <th>Modalidade</th>
          <th>Nota</th>
          <th>Avaliação</th>
        </tr>
      </thead>
      <tbody>
        {coursesData.map((course, index) => (
          <tr key={index}>
            <td>{course.name}</td>
            <td>{course.hours}h</td>
            <td>{course.modality}</td>
            <td>{course.grade.toFixed(1)}</td>
            <td>{course.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="semester-average">
      Média: 9.4/10.0
    </div>
  </div>
);

const DegreeDetails = ({ onBack }) => {
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="degree-details-container">
      
      <main className="degree-main-content">
        <div className="degree-intro">
          <h2>VISÃO GERAL</h2>
          <h1>Engenharia de Software</h1>
          <p>Uma lista detalhada de todas as matérias e notas da graduação em Engenharia de Software na PUC Minas, mostrando meu progresso de aprendizado e experiência em vários domínios técnicos.</p>
        </div>
        <div className="semesters-grid">
          {semesters.map(semester => (
            <SemesterCard key={semester} semesterNumber={semester} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DegreeDetails;