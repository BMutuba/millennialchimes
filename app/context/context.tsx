//create context for loading screen 

import { createContext } from "vm";

const LoadingScreenContext = createContext({ showLoadingScreen: false, setShowLoadingScreen: (show: boolean) => {
    
 } })


export default LoadingScreenContext;
