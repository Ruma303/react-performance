import './App.css';
import UseMemo from './useMemo/UseMemo';
import ReactMemo from './React Memo/ParentComponent';
//import UseCallback from './useCallback/ParentComponent';
import UseTransition from './useTransition/UseTransition';
import UseDeferredValue from './useDeferredValue/UseDeferredValue';

function App() {
  return (
    <>
        {/* <UseMemo /> */}
        {/* <ReactMemo /> */}
        {/* <UseCallback /> */}
        {/* <UseTransition /> */}
        <UseDeferredValue />
    </>
  );
}

export default App;
