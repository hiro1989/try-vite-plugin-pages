import { StrictMode, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, useRoutes } from "react-router-dom"

import routes from "~react-pages"

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
