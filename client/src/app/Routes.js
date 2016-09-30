import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'app/store';

import App from 'app/App';
import DemoPage from 'app/demo/components-demo-page';

import MainLayout from 'app/main/main-layout';
import MainHomePage from 'app/main/main-home/main-home-page';
import MainSignUpPage from 'app/main/main-signup/main-signup-page';
import MainRecoverPasswordPage from 'app/main/main-recover-password/main-recover-password-page';

import DashboardLayout from 'app/main/dashboard/dashboard-layout';
import DashboardListTicketsPage from 'app/main/dashboard/dashboard-list-tickets/dashboard-list-tickets-page';
import DashboardListArticlesPage from 'app/main/dashboard/dashboard-list-articles/dashboard-list-articles-page';
import DashboardCreateTicketPage from 'app/main/dashboard/dashboard-create-ticket/dashboard-create-ticket-page';
import DashboardEditProfilePage from 'app/main/dashboard/dashboard-edit-profile/dashboard-edit-profile-page';
import DashboardArticlePage from 'app/main/dashboard/dashboard-article/dashboard-article-page';
import DashboardTicketPage from 'app/main/dashboard/dashboard-ticket/dashboard-ticket-page';

// ADMIN PANEL
import AdminLoginPage from 'app/admin/admin-login-page';
import AdminPanelLayout from 'app/admin/panel/admin-panel-layout';

import AdminPanelStats from 'app/admin/panel/dashboard/admin-panel-stats';
import AdminPanelActivity from 'app/admin/panel/dashboard/admin-panel-activity';
import AdminPanelMyAccount from 'app/admin/panel/dashboard/admin-panel-my-account';

import AdminPanelMyTickets from 'app/admin/panel/tickets/admin-panel-my-tickets';
import AdminPanelNewTickets from 'app/admin/panel/tickets/admin-panel-new-tickets';
import AdminPanelAllTickets from 'app/admin/panel/tickets/admin-panel-all-tickets';
import AdminPanelViewTicket from 'app/admin/panel/tickets/admin-panel-view-ticket';
import AdminPanelCustomResponses from 'app/admin/panel/tickets/admin-panel-custom-responses';

import AdminPanelListUsers from 'app/admin/panel/users/admin-panel-list-users';
import AdminPanelViewUser from 'app/admin/panel/users/admin-panel-view-user';
import AdminPanelBanUsers from 'app/admin/panel/users/admin-panel-ban-users';

import AdminPanelListArticles from 'app/admin/panel/articles/admin-panel-list-articles';
import AdminPanelViewArticle from 'app/admin/panel/articles/admin-panel-view-article';

import AdminPanelStaffMembers from 'app/admin/panel/staff/admin-panel-staff-members';
import AdminPanelDepartments from 'app/admin/panel/staff/admin-panel-departments';
import AdminPanelViewStaff from 'app/admin/panel/staff/admin-panel-view-staff';

import AdminPanelSystemPreferences from 'app/admin/panel/settings/admin-panel-system-preferences';
import AdminPanelUserSystem from 'app/admin/panel/settings/admin-panel-user-system';
import AdminPanelEmailTemplates from 'app/admin/panel/settings/admin-panel-email-templates';
import AdminPanelCustomFields from 'app/admin/panel/settings/admin-panel-custom-fields';

const history = syncHistoryWithStore(browserHistory, store);

export default (
    <Router history={history}>
        <Route component={App}>
            <Route path='/' component={MainLayout}>
                <IndexRoute component={MainHomePage} />
                <Route path='signup' component={MainSignUpPage}/>
                <Route path='recover-password' component={MainRecoverPasswordPage}/>
                <Route path='dashboard' component={DashboardLayout}>
                    <IndexRoute component={DashboardListTicketsPage} />
                    <Route path='articles' component={DashboardListArticlesPage}/>

                    <Route path='create-ticket' component={DashboardCreateTicketPage}/>
                    <Route path='edit-profile' component={DashboardEditProfilePage}/>

                    <Route path='article' component={DashboardArticlePage}/>
                    <Route path='ticket/:ticketNumber' component={DashboardTicketPage}/>
                </Route>
            </Route>
            <Route path="admin">
                <IndexRoute component={AdminLoginPage} />
                <Route path="panel" component={AdminPanelLayout}>
                    <IndexRedirect to="stats" />
                    <Route path="stats" component={AdminPanelStats} />
                    <Route path="activity" component={AdminPanelActivity} />
                    <Route path="my-account" component={AdminPanelMyAccount} />

                    <Route path="tickets">
                        <IndexRedirect to="my-tickets" />
                        <Route path="my-tickets" component={AdminPanelMyTickets} />
                        <Route path="new-tickets" component={AdminPanelNewTickets} />
                        <Route path="all-tickets" component={AdminPanelAllTickets} />
                        <Route path="custom-responses" component={AdminPanelCustomResponses} />
                        <Route path="view-ticket" component={AdminPanelViewTicket} />
                    </Route>

                    <Route path="users">
                        <IndexRedirect to="list-users" />
                        <Route path="list-users" component={AdminPanelListUsers} />
                        <Route path="view-user" component={AdminPanelViewUser} />
                        <Route path="ban-users" component={AdminPanelBanUsers} />
                    </Route>

                    <Route path="articles">
                        <IndexRedirect to="list-articles" />
                        <Route path="list-articles" component={AdminPanelListArticles} />
                        <Route path="view-article" component={AdminPanelViewArticle} />
                    </Route>

                    <Route path="staff">
                        <IndexRedirect to="staff-members" />
                        <Route path="staff-members" component={AdminPanelStaffMembers} />
                        <Route path="view-staff" component={AdminPanelViewStaff} />
                        <Route path="departments" component={AdminPanelDepartments} />
                    </Route>

                    <Route path="settings">
                        <IndexRedirect to="system-preferences" />
                        <Route path="system-preferences" component={AdminPanelSystemPreferences} />
                        <Route path="user-system" component={AdminPanelUserSystem} />
                        <Route path="email-templates" component={AdminPanelEmailTemplates} />
                        <Route path="custom-fields" component={AdminPanelCustomFields} />
                    </Route>
                </Route>
            </Route>

            <Route name='Demo' path='demo' component={DemoPage} />
        </Route>
    </Router>
);
