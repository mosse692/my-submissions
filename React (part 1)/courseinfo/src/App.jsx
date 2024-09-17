const Header = (props) => {
  return <p>{props.course.name}</p>;
};

const Part = (props) => {
  return <p>{props.part}  {props.exercises}</p>;
};

const Content = (props) => {
  return (
    <div>{props.parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises}/>)
      
      
      }
    </div>
  );
};

const Total = (props) => {
  return <p>{props.parts.reduce((a,b) => a = a + b.exercises, 0 )}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
