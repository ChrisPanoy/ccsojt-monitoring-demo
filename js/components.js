const components = {
    getSidebar(activePage = 'dashboard') {
        const pathPrefix = window.location.pathname.includes('admin') || window.location.pathname.includes('student') || window.location.pathname.includes('teacher') ? '../' : '';
        const userType = localStorage.getItem('userType') || 'Student';
        if (userType === 'Student' && (window.location.pathname.includes('student'))) return ''; 

        let sidebarContent = `
            <ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center bg-gradient-primary justify-content-center" href="${pathPrefix}index.html">
                    <div class="sidebar-brand-icon">
                        <img src="${pathPrefix}img/logo/src-logo.jpg">
                    </div>
                    <div class="sidebar-brand-text mx-3">SRC OJT-MS</div>
                </a>
                <hr class="sidebar-divider my-0">
                <li class="nav-item ${activePage === 'dashboard' ? 'active' : ''}">
                    <a class="nav-link" href="dashboard.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <hr class="sidebar-divider">
        `;

        if (userType === 'Admin') {
            sidebarContent += `
                <div class="sidebar-heading">Admin Management</div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAdmin">
                        <i class="fas fa-user-shield"></i>
                        <span>Manage Admin</span>
                    </a>
                    <div id="collapseAdmin" class="collapse" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Admin Actions</h6>
                            <a class="collapse-item" href="createAdmin.html">Create Admin Account</a>
                            <a class="collapse-item" href="auditLogs.html">Audit Logs</a>
                        </div>
                    </div>
                </li>
                <hr class="sidebar-divider">
                <div class="sidebar-heading">Class Section(s)</div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCourse">
                        <i class="fas fa-chalkboard"></i>
                        <span>Manage Course</span>
                    </a>
                    <div id="collapseCourse" class="collapse" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Manage Course</h6>
                            <a class="collapse-item" href="createClass.html">Add New Course and Section</a>
                            <a class="collapse-item" href="createClassArms.html">Add New Section</a>
                        </div>
                    </div>
                </li>
                <hr class="sidebar-divider">
                <div class="sidebar-heading">DTR(s)</div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseDTR">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <span>Weekly Time Entries</span>
                    </a>
                    <div id="collapseDTR" class="collapse" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Student Time</h6>
                            <a class="collapse-item" href="approval.html">Submission Approval</a>
                            <a class="collapse-item" href="otApproval.html">OT Approval</a>
                            <a class="collapse-item" href="viewtime.html">Time Table</a>
                            <a class="collapse-item" href="archiveOtApproval.html">Archived OtApproval</a>
                            <a class="collapse-item" href="archiveApproval.html">Archived Approval</a>
                            <a class="collapse-item" href="setSubmissionDay.html">Set Day of Submission</a>
                        </div>
                    </div>
                </li>
                <hr class="sidebar-divider">
                <div class="sidebar-heading">Students</div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseStudents">
                        <i class="fas fa-user-graduate"></i>
                        <span>Manage Students</span>
                    </a>
                    <div id="collapseStudents" class="collapse" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Manage Students</h6>
                            <a class="collapse-item" href="students.html">Add/Manage Student</a>
                            <a class="collapse-item" href="archiveStudents.html">Archive Students</a>
                        </div>
                    </div>
                </li>
                <hr class="sidebar-divider">
                <div class="sidebar-heading">Company(s)</div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCompany">
                        <i class="fas fa-building"></i>
                        <span>Manage Company</span>
                    </a>
                    <div id="collapseCompany" class="collapse" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Manage Company</h6>
                            <a class="collapse-item" href="createCompany.html">Add New Company</a>
                        </div>
                    </div>
                </li>
                <hr class="sidebar-divider">
                <div class="sidebar-heading">Session & Term</div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSession">
                        <i class="fa fa-calendar-alt"></i>
                        <span>Manage Session & Term</span>
                    </a>
                    <div id="collapseSession" class="collapse" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Contribution</h6>
                            <a class="collapse-item" href="createSessionTerm.html">Create Session and Term</a>
                        </div>
                    </div>
                </li>
                <hr class="sidebar-divider">
                <div class="sidebar-heading">Messages/Announcement</div>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMessages">
                        <i class="fas fa-inbox"></i>
                        <span>Messages/Announcement</span>
                    </a>
                    <div id="collapseMessages" class="collapse" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Message Actions</h6>
                            <a class="collapse-item" href="inbox.html">Inbox</a>
                            <a class="collapse-item" href="createAn.html">Create Announcement</a>
                            <a class="collapse-item" href="archiveMessage.html">Archived Messages</a>
                            <a class="collapse-item" href="archiveAnnouncement.html">Archived Announcements</a>
                        </div>
                    </div>
                </li>
            `;
        }

        sidebarContent += `
                <hr class="sidebar-divider">
                <div class="version" id="version-ruangadmin">Version 1.2 (Static Parity)</div>
            </ul>
        `;
        return sidebarContent;
    },

    getTopbar() {
        const pathPrefix = window.location.pathname.includes('admin') || window.location.pathname.includes('student') || window.location.pathname.includes('teacher') ? '../' : '';
        const userName = localStorage.getItem('userName') || 'Demo User';
        const userType = localStorage.getItem('userType') || 'Student';
        
        let navItems = `
            <li class="nav-item dropdown no-arrow mx-1">
                <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown">
                    <i class="fas fa-bell fa-fw"></i>
                    <span class="badge badge-danger badge-counter">2</span>
                </a>
                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in">
                    <h6 class="dropdown-header">Notifications</h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                                <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div class="small text-gray-500">March 22, 2026</div>
                            <span class="font-weight-bold">DTR for Week 3 has been approved.</span>
                        </div>
                    </a>
                    <a class="dropdown-item text-center small text-gray-500" href="inbox.html">Show All Notifications</a>
                </div>
            </li>
        `;

        let homeLink = userType === 'Student' ? `
            <a href="dashboard.html" class="nav-link text-white">
                <i class="fas fa-home mr-1"></i> Home
            </a>
        ` : '';

        return `
            <nav class="navbar navbar-expand navbar-light bg-gradient-primary topbar mb-4 static-top">
                ${userType !== 'Student' ? `
                <button id="sidebarToggleTop" class="btn btn-link rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>
                ` : homeLink}
                <ul class="navbar-nav ml-auto">
                    ${navItems}
                    <div class="topbar-divider d-none d-sm-block"></div>
                    <li class="nav-item dropdown no-arrow">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown">
                            <img class="img-profile rounded-circle" src="${pathPrefix}img/user-icn.png" style="max-width: 60px">
                            <span class="ml-2 d-none d-lg-inline text-white small"><b>Welcome ${userName}</b></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in">
                            <a class="dropdown-item" href="${pathPrefix}login.html">
                                <i class="fas fa-power-off fa-fw mr-2 text-danger"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        `;
    },

    getSpeedDial() {
        const userType = localStorage.getItem('userType');
        if (userType !== 'Student') return '';

        return `
            <div class="fixed bottom-6 right-6 z-50">
                <div id="speed-dial-menu-dropdown" class="flex flex-col hidden items-center mb-4 space-y-2 bg-white shadow-2xl rounded-xl border border-gray-200 overflow-hidden">
                    <ul class="text-sm text-gray-600 p-4 w-48">
                        <li class="mb-3">
                            <a href="dtr.html" class="flex items-center hover:text-indigo-600 transition-colors">
                                <i class="fas fa-clock mr-3 text-indigo-500"></i>
                                <span class="font-medium">Submit Time</span>
                            </a>
                        </li>
                        <li class="mb-3">
                            <a href="reports.html" class="flex items-center hover:text-indigo-600 transition-colors">
                                <i class="fas fa-envelope mr-3 text-indigo-500"></i>
                                <span class="font-medium">Compose Message</span>
                            </a>
                        </li>
                        <li class="mb-3">
                            <a href="inbox.html" class="flex items-center hover:text-indigo-600 transition-colors">
                                <i class="fas fa-inbox mr-3 text-indigo-500"></i>
                                <span class="font-medium">Inbox</span>
                            </a>
                        </li>
                        <li>
                            <a href="changepass.html" class="flex items-center hover:text-indigo-600 transition-colors">
                                <i class="fas fa-key mr-3 text-indigo-500"></i>
                                <span class="font-medium">Change Password</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <button type="button" id="speed-dial-button" class="flex items-center justify-center text-white bg-indigo-600 rounded-full w-16 h-16 hover:bg-indigo-700 shadow-xl focus:outline-none ml-auto transition-transform hover:scale-110">
                    <i class="fas fa-plus text-xl transition-transform" id="plus-icon"></i>
                </button>
            </div>
        `;
    },

    getFooter() {
        return `
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto font-weight-bold">
                        <span>copyright &copy; 2026 - developed by
                            <b><a href="#" target="_blank">Antigravity</a></b>
                        </span>
                    </div>
                </div>
            </footer>
        `;
    },

    init() {
        const sidebarContainer = document.getElementById('sidebar-container');
        const topbarContainer = document.getElementById('topbar-container');
        const footerContainer = document.getElementById('footer-container');
        const speedDialContainer = document.getElementById('speed-dial-container') || document.body;

        if (sidebarContainer) sidebarContainer.innerHTML = this.getSidebar();
        if (topbarContainer) topbarContainer.innerHTML = this.getTopbar();
        if (footerContainer) footerContainer.innerHTML = this.getFooter();
        
        // Inject Speed Dial if it's a student page
        if (localStorage.getItem('userType') === 'Student') {
            const sdDiv = document.createElement('div');
            sdDiv.id = 'speed-dial-container';
            sdDiv.innerHTML = this.getSpeedDial();
            document.body.appendChild(sdDiv);
            
            // Speed Dial Logic
            $('#speed-dial-button').on('click', function(e) {
                e.stopPropagation();
                $('#speed-dial-menu-dropdown').toggleClass('hidden');
                $('#plus-icon').toggleClass('rotate-45');
            });
            
            $(document).on('click', function() {
                $('#speed-dial-menu-dropdown').addClass('hidden');
                $('#plus-icon').removeClass('rotate-45');
            });
        }

        // Sidebar toggle for Admin/Teacher
        $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
            $("body").toggleClass("sidebar-toggled");
            $(".sidebar").toggleClass("toggled");
            if ($(".sidebar").hasClass("toggled")) {
              $('.sidebar .collapse').collapse('hide');
            };
        });
    }
};

window.onload = () => components.init();
