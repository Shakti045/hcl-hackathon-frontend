import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './providers/querryClient.ts'
import { Provider } from "react-redux";
import { store } from './providers/redux/store.ts'
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
     <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
            <Toaster/>
        </Provider>
     </QueryClientProvider>
   </BrowserRouter>
)
