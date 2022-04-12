import './App.css';
import UseState from './components/UseState';
import UseInput from './components/UseInput';
import UseTabs from './components/UseTabs';
import UseTitle from './components/UseTitle';
import UseClick from './components/UseClick';
import UseConfirm from './components/UseConfirm';
import UsePreventLeave from './components/UsePreventLeave';
import UseFadeIn from './components/UseFadeIn';
import UseNetwork from './components/UseNetwork';
import UseScroll from './components/UseScroll';
import UseFullscreen from './components/UseFullscreen';
import UseNotification from './components/UseNotification';
import UseAxios from './components/UseAxios';
function App() {
  return (
    <div className="App">
      <UseState />
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
      <UseFadeIn />
      <UseNetwork />
      <UseScroll />
      <UseFullscreen />
      <UseNotification />
      <UseAxios />
    </div>
  );
}

export default App;
