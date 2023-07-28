import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/dashboards`}
          component={lazy(() => import(`./dashboards`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/users/dashboards`}
          component={lazy(() => import(`./components/Userdash`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/admin/reporting`}
          component={lazy(() => import(`./components/Reporting`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/users/askquestion`}
          component={lazy(() => import(`./components/AskQuestion`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/users/patrimoine`}
          component={lazy(() => import(`./components/Patrimoine`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/users/profil`}
          component={lazy(() => import(`./components/Profil`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/request`}
          component={lazy(() => import(`./components/Requetes`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/requestdetails`}
          component={lazy(() => import(`./dashboards/DetailsRequetes`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/structure`}
          component={lazy(() => import(`./components/Structure`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/fonction`}
          component={lazy(() => import(`./components/Fonction`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/categorie`}
          component={lazy(() => import(`./components/Categorie`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/materiel`}
          component={lazy(() => import(`./components/Materiel`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/addmateriel`}
          component={lazy(() => import(`./components/AddMeteriel`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/pieces`}
          component={lazy(() => import(`./components/Pieces`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/addpieces`}
          component={lazy(() => import(`./components/AddPieces`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/utilisateur`}
          component={lazy(() => import(`./components/Utilisateur`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/admin/fournisseur`}
          component={lazy(() => import(`./components/Fournisseur`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/users/notification`}
          component={lazy(() => import(`./components/Notification`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}/apps`}
          component={lazy(() => import(`./apps`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/components`}
          component={lazy(() => import(`./components`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/pages`}
          component={lazy(() => import(`./pages`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/maps`}
          component={lazy(() => import(`./maps`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/charts`}
          component={lazy(() => import(`./charts`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/docs`}
          component={lazy(() => import(`./docs`))}
        />
        <Redirect
          from={`${APP_PREFIX_PATH}`}
          to={`${APP_PREFIX_PATH}/dashboards`}
        />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
