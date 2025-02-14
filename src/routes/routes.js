/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React, { lazy } from 'react';

const LoginPage = lazy(() => import('containers/LoginPage'));

const WelcomePage = lazy(() => import('containers/WelcomePage'));
const DashboardPage = lazy(() => import('containers/Dashboard'));
const AudiencePage = lazy(() => import('containers/AudiencePage'));
const RevenuePage = lazy(() => import('containers/RevenuePage'));
const BehaviorPage = lazy(() => import('containers/Behavior'));

const SubscriptionPage = lazy(() => import('containers/SubscriptionPage'));
const MemberRolesPage = lazy(() => import('containers/MemberRolesPage'));
const DataStreamPage = lazy(() => import('containers/DataStreamPage'));
const RegionCountryPage = lazy(() => import('containers/RegionCountryPage'));
const SettingPage = lazy(() => import('containers/SettingPage'));
const HelpCenterPage = lazy(() => import('containers/HelpCenterPage'));

const ProfilePage = lazy(() => import('containers/ProfilePage'));

const authRoutes = [
  {
    path: '/login',
    exact: true,
    main: () => <LoginPage />,
  },
];

const mainRoutes = [
  {
    path: ['/data-:domain', '/'],
    exact: true,
    main: () => <DashboardPage />,
  },
  {
    path: '/data-:domain/audience/overview',
    exact: true,
    main: () => <AudiencePage />,
  },
  { path: '/data-:domain/revenue', exact: true, main: () => <RevenuePage /> },
  {
    path: [
      '/data-:domain/behavior/overview',
      '/data-:domain/behavior/click-anchor',
      '/data-:domain/behavior/utm-tracking',
      '/data-:domain/behavior/events',
    ],
    exact: true,
    main: () => <BehaviorPage />,
  },
  {
    path: '/data-:domain/subscription',
    exact: true,
    main: () => <SubscriptionPage />,
  },
  {
    path: '/data-:domain/member-roles',
    exact: true,
    main: () => <MemberRolesPage />,
  },
  {
    path: '/data-:domain/data-stream',
    exact: true,
    main: () => <DataStreamPage />,
  },
  {
    path: ['/setting', '/setting/configuration'],
    exact: true,
    main: () => <SettingPage />,
  },
  {
    path: '/region-country',
    exact: true,
    main: () => <RegionCountryPage />,
  },
  {
    path: '/help-center',
    exact: true,
    main: () => <HelpCenterPage />,
  },
];

const settingRoutes = [
  {
    path: '/profile',
    exact: false,
    main: ({ match, location }) => <ProfilePage match={match} location={location} />,
  },
  {
    path: '/welcome',
    exact: true,
    main: () => <WelcomePage />,
  },
];

export { authRoutes, mainRoutes, settingRoutes };
