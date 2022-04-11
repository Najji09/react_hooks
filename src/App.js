import './App.css';
import UseState from './components/UseState';
import UseInput from './components/UseInput';
import UseTabs from './components/UseTabs';
import UseTitle from './components/UseTitle';
import UseClick from './components/UseClick';
import UseConfirm from './components/UseConfirm';
function App() {
  return (
    <div className="App">
      <UseState />
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
    </div>
  );
}

export default App;
