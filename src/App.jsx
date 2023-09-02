import './App.css';
import UseMemo from './useMemo/UseMemo';
import ReactMemo from './React Memo/ParentComponent';
//import UseCallback from './useCallback/ParentComponent';
import UseTransition from './useTransition/UseTransition';
import UseDeferredValue from './useDeferredValue/UseDeferredValue';
import Spinner from './assets/icons8-spinner.gif'
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyLoading/LazyComponent'));

function App() {
    return (
        <>
            {/* <UseMemo /> */}
            {/* <ReactMemo /> */}
            {/* <UseCallback /> */}
            {/* <UseTransition /> */}
            {/* <UseDeferredValue /> */}

            {/* Lazy loading */}
            {/* <Suspense fallback={<h1>Caricamento...</h1>}>
                <LazyComponent />
            </Suspense> */}

            {/* <Suspense fallback={<div className='fallback'>
                <img src={Spinner} alt='loading...' />
                <a href="https://icons8.com/">Icons8 Copyright</a>
            </div>}>
                <LazyComponent />
            </Suspense> */}
        </>
    );
}

export default App;
