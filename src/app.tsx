import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import "./styles/tailwind.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          {/* <Title>SolidStart - Basic</Title> */}
          <div class="mb-1 bg-gray-200 px-1">
            <a href="/">Index</a>
            <a href="/about">About</a>
          </div>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
