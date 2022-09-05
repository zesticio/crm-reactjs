import React from "react"
import * as container from "../container/index";
import { Navigate } from "react-router-dom";
import * as Component from "../component/index";
import * as constant from "../common/route.constant";

export const route = [
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.dashboard,
    element: (
      <Component.Layout>
        <container.Dashboard />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.contacts,
    element: (
      <Component.Layout>
        <container.Contacts />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.organization,
    element: (
      <Component.Layout>
        <container.Organization />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.customers,
    element: (
      <Component.Layout>
        <container.Customers />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.vendor,
    element: (
      <Component.Layout>
        <container.Vendor />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.employee,
    element: (
      <Component.Layout>
        <container.Employee />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.order,
    element: (
      <Component.Layout>
        <container.Order />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.task,
    element: (
      <Component.Layout>
        <container.Task />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.countries,
    element: (
      <Component.Layout>
        <container.Task />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.state,
    element: (
      <Component.Layout>
        <container.State />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.cities,
    element: (
      <Component.Layout>
        <container.Cities />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.tiers,
    element: (
      <Component.Layout>
        <container.Tiers />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.warehouses,
    element: (
      <Component.Layout>
        <container.Warehouses />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.profile,
    element: (
      <Component.Layout>
        <container.Profile />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.RESTRICTED_ROUTE.login,
    element: <container.Login />,
    type: constant.ROUTE_TYPE.restricted,
  },
  {
    exact: true,
    path: constant.RESTRICTED_ROUTE.otp,
    element: <container.OtpPage />,
    type: constant.ROUTE_TYPE.restricted,
  },
  {
    exact: true,
    path: constant.PULBIC_ROUTE.other,
    element: <Navigate to={constant.PRIVATE_ROUTE.dashboard} />,
    type: constant.ROUTE_TYPE.public,
  },
];
