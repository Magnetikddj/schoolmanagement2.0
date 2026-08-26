Build a complete, production-quality School/College Management System using:

FRONTEND:
- React
- Tailwind CSS
- React Router
- Axios
- Modern component-based architecture
- Responsive design for desktop, tablet and mobile

BACKEND:
- Django
- Django REST Framework
- JWT authentication
- PostgreSQL
- Django Admin
- Role-based permissions

The application should look like a real modern educational platform, not a simple demo project.

==================================================
1. DESIGN SYSTEM
==================================================

Create a modern, clean and professional UI suitable for students aged 14–25.

Use:
- Modern typography
- Rounded cards
- Subtle shadows
- Good spacing
- Responsive layouts
- Professional icons
- Smooth hover states
- Loading skeletons
- Empty states
- Error states
- Toast notifications
- Confirmation dialogs

Use a consistent color system throughout the application.

Suggested palette:
- Primary: #2563EB
- Secondary: #7C3AED
- Background: #F8FAFC
- Dark sidebar: #0F172A
- Card: #FFFFFF
- Success: #16A34A
- Warning: #F59E0B
- Danger: #DC2626
- Text: #0F172A
- Secondary text: #64748B

Do not overuse gradients or bright colors.
The interface should feel modern, trustworthy and academic.

==================================================
2. AUTHENTICATION / LOGIN
==================================================

Create a proper professional login system.

Login page should contain:
- School/college logo
- School name
- Welcome message
- Student ID / username field
- Password field
- Show/hide password
- Remember me
- Forgot password
- Login button
- Loading state
- Error message
- Contact administrator option

Do not create a fake login.

Authentication must connect to Django REST API.

Use JWT authentication.

After login:
- Student → Student Dashboard
- Teacher → Teacher Dashboard
- Admin → Admin Dashboard

Protect all private routes.

Unauthenticated users must not be able to access dashboards.

==================================================
3. STUDENT HOME / DASHBOARD
==================================================

Create a detailed student dashboard.

Top section:
- Student profile picture
- Student name
- Student ID
- Class/section
- Academic year
- Current semester
- Notification icon
- Profile menu

Main dashboard should contain:

A. Student ID Card

Display a digital student ID card containing:
- Student photo
- Full name
- Student ID
- Class
- Section
- Roll number
- Academic year
- School logo
- Unique student QR code

The QR code must be unique for each student.

Add:
- View ID card
- Download ID card
- Print ID card

B. Attendance Summary

Show:
- Overall attendance percentage
- Total classes
- Classes attended
- Classes absent
- Today's attendance status

Use a visual progress indicator.

Example:
Attendance: 87%

C. Subject Overview

Display all subjects as cards.

Each subject card should show:
- Subject name
- Subject code
- Teacher name
- Total classes
- Attended classes
- Absent classes
- Attendance percentage
- Progress bar

Example:

Mathematics
Teacher: Mr. Sharma

Attendance
32 / 38 classes

84.2%

Clicking the subject must open the detailed subject page.

D. Upcoming Assignments

Show:
- Assignment title
- Subject
- Due date
- Submission status
- Priority
- Remaining days

E. Recent Notifications

Show recent:
- School announcements
- Assignment notifications
- Attendance notifications
- Exam notifications

==================================================
4. SIDEBAR NAVIGATION
==================================================

Create a professional collapsible sidebar.

Navigation:

Dashboard
My Subjects
Attendance
Assignments
QR Attendance
ID Card
Notifications
Absence Tickets
Profile
Settings
Logout

On mobile, convert sidebar into a responsive drawer.

Show active page clearly.

==================================================
5. SUBJECT PAGE
==================================================

Create a "My Subjects" page.

Display all enrolled subjects.

Each subject should have:
- Subject name
- Code
- Teacher
- Attendance percentage
- Class progress
- Assignment count
- Next class

Clicking a subject opens:

/subjects/:subjectId

Subject detail page should contain:

Header:
- Subject name
- Subject code
- Teacher
- Class schedule

Attendance:
- Total classes
- Attended
- Absent
- Attendance percentage
- Progress chart

Class progress:
- Classes completed
- Classes remaining
- Course progress percentage

Assignment section:
- Assignment title
- Description
- Assigned date
- Due date
- Marks
- Submission status
- Submitted date

==================================================
6. SUBJECT ASSIGNMENT PAGE
==================================================

When the student opens an assignment:

Show:

- Assignment title
- Subject
- Teacher
- Description
- Instructions
- Attached files
- Assigned date
- Due date
- Maximum marks
- Submission status

Submission section at the bottom:

- Upload file
- Drag and drop
- Add comment
- Submit assignment button

After submission:
- Show submitted file
- Submission date
- Submission status
- Allow resubmission if teacher permits

Show:
Submitted
Late
Pending
Graded

with appropriate status indicators.

==================================================
7. ATTENDANCE PAGE
==================================================

Create a dedicated Attendance page.

Show:

Overall attendance:
- Total classes
- Present
- Absent
- Late
- Attendance percentage

Subject-wise attendance table:

Subject | Total | Present | Absent | Percentage

Also include a calendar.

Calendar should display attendance by date.

Example:
Green = Present
Red = Absent
Yellow = Late
Gray = No class

Clicking a date should display:

Date
Subject
Class time
Teacher
Attendance status
Reason if absent

Allow filtering:
- Month
- Subject
- Attendance status

==================================================
8. QR ATTENDANCE SYSTEM
==================================================

Create a dedicated QR Attendance page.

Each student receives a unique QR code.

The QR must NOT simply contain sensitive student information.

Use a secure unique identifier/token.

Student page:
- Display personal QR code
- QR code refresh/security mechanism
- Student name
- Student ID
- Current attendance status

Teacher scanner page:
- Camera scanner
- Scan QR
- Identify student
- Verify student
- Select subject/class
- Mark attendance

After successful scan:

Student:
John Doe
ID: STU-1024

Subject:
Mathematics

Status:
Present

Time:
10:32 AM

Prevent:
- Duplicate attendance
- Invalid QR
- Expired QR
- Unauthorized user

Record:
- Student
- Subject
- Class
- Teacher
- Date
- Time
- Attendance status
- QR/session information

==================================================
9. ASSIGNMENTS PAGE
==================================================

Create a complete assignment management page.

Filters:
- All
- Pending
- Submitted
- Graded
- Late

Each assignment card should show:
- Title
- Subject
- Teacher
- Due date
- Status
- Marks

Click assignment to open detailed assignment page.

==================================================
10. NOTIFICATION SYSTEM
==================================================

Create a dedicated Notifications page.

Notification types:

- Assignment
- Attendance
- Exam
- School announcement
- System notification

Each notification:
- Title
- Description
- Date
- Time
- Type
- Read/unread status

Allow:
- Mark as read
- Mark all as read
- Delete notification if permitted

Notification badge should appear in navbar.

==================================================
11. ABSENCE TICKET SYSTEM
==================================================

Create an "Absence Ticket" page.

Students can submit a request when they are absent.

Form:

- Date
- Subject
- Reason
- Description
- Supporting document
- Submit request

Ticket status:

Pending
Approved
Rejected

Student should be able to see:

Ticket ID
Date
Subject
Reason
Submitted date
Status
Admin/teacher response

Admin/teacher can approve or reject tickets.

If approved, attendance should be updated according to the configured school policy.

Keep a complete audit trail.

==================================================
12. STUDENT PROFILE
==================================================

Create a detailed profile page.

Show:

Personal information:
- Full name
- Student ID
- Date of birth
- Gender
- Email
- Phone number
- Address
- Profile picture

Academic information:
- Course
- Class
- Section
- Roll number
- Academic year
- Semester

Guardian information:
- Guardian name
- Guardian phone
- Emergency contact

Allow students to edit only fields that administrators permit.

Sensitive academic information must be read-only for students.

==================================================
13. ADMIN DASHBOARD
==================================================

Create a completely separate professional Admin Dashboard.

Admin should see:

- Total students
- Total teachers
- Total classes
- Total subjects
- Today's attendance
- Pending assignments
- Pending absence tickets
- Recent registrations

Dashboard charts:
- Attendance trends
- Student distribution
- Subject performance
- Assignment submission statistics

==================================================
14. ADMIN DATA MANAGEMENT
==================================================

The backend must provide proper CRUD functionality.

Admin should be able to:

STUDENTS:
- Create student
- View student
- Update student
- Delete/deactivate student
- Change student phone number
- Change email
- Change guardian contact
- Change class
- Change section
- Change roll number
- Reset password
- Upload/change profile photo
- Generate/regenerate QR
- Generate ID card

TEACHERS:
- Create
- Update
- Delete/deactivate
- Assign subjects
- Assign classes

SUBJECTS:
- Create
- Update
- Delete
- Assign teacher
- Assign students/classes

CLASSES:
- Create
- Update
- Delete
- Assign students
- Assign subjects
- Assign teacher

ASSIGNMENTS:
- Create
- Update
- Delete
- Set deadline
- Attach files
- Grade submissions

ATTENDANCE:
- View
- Filter
- Correct attendance according to permissions
- Export attendance
- View attendance history

NOTIFICATIONS:
- Create
- Send
- Schedule
- Delete
- Mark important

ABSENCE TICKETS:
- View
- Approve
- Reject
- Add response
- View supporting documents

==================================================
15. DJANGO ADMIN PANEL
==================================================

Configure Django Admin professionally.

Create organized admin sections:

Users
Students
Teachers
Guardians
Classes
Subjects
Enrollments
Attendance
Assignments
Submissions
Notifications
Absence Tickets
ID Cards
QR Sessions
Academic Years

Use:
- Search
- Filters
- Sorting
- Pagination
- Bulk actions
- Inline relationships

Example:

StudentAdmin:
- Search by student ID, name, email, phone
- Filter by class, section, academic year
- Edit student information
- Manage enrollment
- View attendance
- View assignments
- View tickets

==================================================
16. DATABASE DESIGN
==================================================

Use PostgreSQL.

Create properly normalized Django models.

Important models:

User
Student
Teacher
Guardian
AcademicYear
Class
Section
Subject
Enrollment
ClassSchedule
AttendanceSession
AttendanceRecord
Assignment
AssignmentSubmission
Notification
AbsenceTicket
StudentQRCode
StudentIDCard

Use proper:
- ForeignKey
- OneToOneField
- ManyToManyField
- Unique constraints
- Database indexes
- Created/updated timestamps

Student ID must be unique.

Student QR identifier must be unique.

Attendance must prevent duplicate records for the same student, subject, class session and date.

==================================================
17. API STRUCTURE
==================================================

Create clean REST APIs.

Example:

/api/auth/login/
/api/auth/refresh/

/api/students/
/api/students/me/

/api/subjects/
/api/subjects/:id/

/api/attendance/
/api/attendance/calendar/

/api/attendance/summary/

/api/qr/generate/
/api/qr/scan/

/api/assignments/
/api/assignments/:id/
/api/assignments/:id/submit/

/api/notifications/
/api/absence-tickets/

/api/profile/

Use serializers and ViewSets where appropriate.

Implement:
- Authentication
- Authorization
- Pagination
- Filtering
- Searching
- Validation
- Proper HTTP status codes
- Consistent error responses

==================================================
18. SECURITY
==================================================

Implement proper security.

- JWT authentication
- Password hashing
- Role-based permissions
- Object-level permissions
- CSRF protection where applicable
- Input validation
- File upload validation
- File size limits
- Secure QR tokens
- Expiring attendance sessions
- Prevent duplicate attendance
- Prevent students from modifying other students
- Prevent students from changing grades
- Prevent unauthorized API access

Never expose passwords or sensitive information through APIs.

==================================================
19. RESPONSIVE DESIGN
==================================================

The website must work properly on:

Desktop
Laptop
Tablet
Mobile

Desktop:
- Sidebar
- Dashboard
- Multiple cards

Mobile:
- Bottom navigation or hamburger menu
- Stacked cards
- Responsive tables
- Touch-friendly buttons
- Responsive QR scanner

==================================================
20. USER EXPERIENCE
==================================================

Add:

- Loading states
- Skeleton loaders
- Empty states
- Error states
- Confirmation dialogs
- Toast messages
- Form validation
- Search
- Filtering
- Pagination
- Breadcrumbs
- Tooltips
- Responsive modals

Do not use browser alert() for normal UI interactions.

==================================================
21. IMPORTANT DATA RULES
==================================================

Students can:
- View their own information
- View their own attendance
- View their own subjects
- Submit assignments
- View their notifications
- Submit absence tickets

Students cannot:
- Change attendance
- Change grades
- View another student's private information
- Delete academic records
- Access admin APIs

Teachers can:
- View assigned classes
- Manage attendance for assigned classes
- Create assignments
- Grade submissions
- Review absence tickets if authorized

Admins can:
- Manage all users
- Manage academic data
- Manage attendance
- Manage subjects
- Manage assignments
- Manage notifications
- Manage absence tickets
- Manage system settings

==================================================
22. OVERALL UI STRUCTURE
==================================================

Create the following frontend routes:

/login
/dashboard
/subjects
/subjects/:id
/attendance
/attendance/calendar
/assignments
/assignments/:id
/qr-attendance
/id-card
/notifications
/absence-tickets
/profile
/settings

Admin:

/admin/dashboard
/admin/students
/admin/students/:id
/admin/teachers
/admin/classes
/admin/subjects
/admin/attendance
/admin/assignments
/admin/submissions
/admin/notifications
/admin/absence-tickets
/admin/settings

==================================================
23. FINAL QUALITY REQUIREMENT
==================================================

The result should look like a real commercial School Management System.

Do NOT create:
- Generic templates
- Empty placeholder cards
- Fake buttons
- Fake login
- Static attendance numbers
- Hardcoded students
- Hardcoded subjects
- Fake QR scanning
- Frontend-only data

All important data must come from the Django REST API and PostgreSQL database.

Use realistic sample/seed data during development so the interface can be demonstrated.

The frontend and backend must be designed to work together cleanly.

Prioritize:
1. Security
2. Data integrity
3. User experience
4. Responsive design
5. Maintainable code
6. Proper database relationships
7. Clean API architecture
8. Professional visual design