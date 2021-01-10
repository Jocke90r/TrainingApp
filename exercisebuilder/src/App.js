import Layout from './components/Layout/Layout.js'
import ExerciseBuilder from './containers/ExerciseBuilder/ExerciseBuilder'
import ExerciseList from './components/Layout/Exercise/ExerciseList/ExerciseList'

function App() {
  return (
    <div>
     <Layout>
       
       <ExerciseList/>
       <ExerciseBuilder/>
     </Layout>
     
    </div>
  );
}

export default App;
