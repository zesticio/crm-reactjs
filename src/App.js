import React from "react";
import { Routes, Route } from "react-router-dom";
import * as routes from "./route/index";
import * as type from "./route/index";
import * as constant from "./common/route.constant"

function App() {
  return (
    <React.Fragment>
      <Routes>
        {Array.isArray(routes.route) &&
          routes.route.map((view, index) => {
            return (
              <Route
                exact={view.exact}
                path={view.path}
                element={
                  view.type === constant.ROUTE_TYPE.private ? (
                    <type.PrivateRoute>{view.element}</type.PrivateRoute>
                  ) : view.type === constant.ROUTE_TYPE.restricted ? (
                    <type.RestrictedRoute>{view.element}</type.RestrictedRoute>
                  ) : (
                    view.element
                  )
                }
                key={index}
              />
            );
          })}
      </Routes>
    </React.Fragment>
  );
}

export default App;
