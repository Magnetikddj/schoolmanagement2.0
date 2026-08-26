import { RouterProvider, createBrowserRouter, Outlet, NavLink, Link, useLocation, useNavigate, Navigate } from 'react-router';
import { 
  LayoutDashboard, 
  BookOpen, 
  CalendarCheck, 
  FileText, 
  QrCode, 
  CreditCard, 
  Bell, 
  Ticket, 
  User, 
  Settings, 
  LogOut,
  Menu,
  Sun,
  Moon
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- MOCK DATA ---
const STUDENT = {
  name: "John Doe",
  id: "STU-1024",
  avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%232563EB'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='80'%3EJD%3C/text%3E%3C/svg%3E",
  class: "10th Grade",
  section: "Section A",
  academicYear: "2023-2024",
  semester: "Fall",
  attendance: 87
};

const SUBJECTS = [
  { id: 1, name: "Mathematics", code: "MAT-101", teacher: "Mr. Sharma", attended: 32, total: 38 },
  { id: 2, name: "Physics", code: "PHY-101", teacher: "Mrs. Davis", attended: 28, total: 30 },
  { id: 3, name: "Computer Science", code: "CS-101", teacher: "Dr. Alan", attended: 40, total: 40 },
  { id: 4, name: "English Literature", code: "ENG-101", teacher: "Ms. Smith", attended: 25, total: 32 }
];

const ASSIGNMENTS = [
  { id: 1, title: "Algebra Worksheet", subject: "Mathematics", dueDate: "2024-05-15", status: "Pending", priority: "High", daysLeft: 2 },
  { id: 2, title: "Physics Lab Report", subject: "Physics", dueDate: "2024-05-18", status: "Submitted", priority: "Medium", daysLeft: 5 },
];

const NOTIFICATIONS = [
  { id: 1, title: "Mid-term Exams Schedule Released", type: "Exam", time: "2 hours ago" },
  { id: 2, title: "Math Assignment Graded", type: "Assignment", time: "1 day ago" },
  { id: 3, title: "School Holiday Announcement", type: "Announcement", time: "2 days ago" },
  { id: 4, title: "Library Due Date Reminder", type: "System", time: "3 days ago" },
];

// --- HOOKS ---
function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return { isDark, toggleDark: () => setIsDark(!isDark) };
}

// --- COMPONENTS ---
function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const navigate = useNavigate();
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'My Subjects', path: '/subjects', icon: <BookOpen size={20} /> },
    { name: 'Attendance', path: '/attendance', icon: <CalendarCheck size={20} /> },
    { name: 'Assignments', path: '/assignments', icon: <FileText size={20} /> },
    { name: 'QR Attendance', path: '/qr-attendance', icon: <QrCode size={20} /> },
    { name: 'ID Card', path: '/id-card', icon: <CreditCard size={20} /> },
    { name: 'Notifications', path: '/notifications', icon: <Bell size={20} /> },
    { name: 'Absence Tickets', path: '/absence-tickets', icon: <Ticket size={20} /> },
    { name: 'Profile', path: '/profile', icon: <User size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-sidebar text-white transform transition-transform duration-200 ease-in-out flex flex-col shadow-xl lg:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-16 flex items-center px-6 font-bold text-xl tracking-tight border-b border-white/10 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center mr-3 shadow-sm">
            <BookOpen size={18} />
          </div>
          EduPlatform
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center px-4 py-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-primary text-white font-medium shadow-md shadow-primary/20' 
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'}
              `}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </div>
        
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-3 text-slate-400 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

function Topbar({ 
  setSidebarOpen, 
  isDark, 
  toggleDark 
}: { 
  setSidebarOpen: (val: boolean) => void,
  isDark: boolean,
  toggleDark: () => void
}) {
  const location = useLocation();
  const getPageTitle = () => {
    const path = location.pathname.split('/')[1] || 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');
  };

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-8 shrink-0 shadow-sm z-30 transition-colors">
      <div className="flex items-center">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 mr-3 -ml-2 text-foreground rounded-md hover:bg-muted/10 transition-colors"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-foreground hidden sm:block">
          {getPageTitle()}
        </h1>
      </div>
      
      <div className="flex items-center space-x-3 lg:space-x-5">
        <button 
          onClick={toggleDark}
          className="p-2 text-muted hover:text-foreground hover:bg-muted/10 rounded-full transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="relative p-2 text-muted hover:text-foreground hover:bg-muted/10 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full ring-2 ring-card"></span>
        </button>
        
        <div className="flex items-center border-l border-border pl-4 lg:pl-6 ml-2">
          <div className="hidden md:block text-right mr-3">
            <div className="text-sm font-medium text-foreground">{STUDENT.name}</div>
            <div className="text-xs text-muted">{STUDENT.id}</div>
          </div>
          <img 
            src={STUDENT.avatar} 
            alt={STUDENT.name} 
            className="w-10 h-10 rounded-full border-2 border-border object-cover"
          />
        </div>
      </div>
    </header>
  );
}

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDark, toggleDark } = useTheme();
  
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground transition-colors">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar setSidebarOpen={setSidebarOpen} isDark={isDark} toggleDark={toggleDark} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

// --- PAGES ---

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isDark } = useTheme(); // just to initialize theme if needed

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4 transition-colors">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-xl shadow-black/5 border border-border p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5 shadow-lg shadow-primary/30">
            <BookOpen size={32} />
          </div>
          <h1 className="text-2xl font-bold text-foreground text-center">EduPlatform</h1>
          <p className="text-muted text-sm mt-2 text-center">Welcome back! Please login to your account.</p>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Student ID</label>
            <input 
              type="text" 
              placeholder="e.g. STU-1024" 
              required
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-medium text-foreground">Password</label>
              <a href="#" className="text-xs font-medium text-primary hover:underline">Forgot password?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 rounded border-border text-primary focus:ring-primary/50" 
            />
            <label htmlFor="remember" className="ml-2 text-sm text-foreground">Remember me</label>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-2.5 mt-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex justify-center items-center shadow-md shadow-primary/20"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              'Login to Dashboard'
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center text-xs text-muted">
          Need help? <a href="#" className="text-primary font-medium hover:underline">Contact Administrator</a>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Top Welcome Banner */}
      <div className="bg-primary rounded-xl p-6 lg:p-8 text-white flex flex-col md:flex-row items-center md:justify-between shadow-lg shadow-primary/20 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-y-1/2"></div>
        <div className="relative z-10 flex items-center w-full md:w-auto mb-6 md:mb-0">
          <img 
            src={STUDENT.avatar} 
            alt="Profile" 
            className="w-20 h-20 rounded-full border-4 border-white/20 object-cover mr-6 shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold mb-1">Welcome back, {STUDENT.name}!</h2>
            <p className="text-primary-foreground/80 flex items-center">
              <span className="font-medium mr-2">{STUDENT.class} • {STUDENT.section}</span>
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-medium backdrop-blur-sm">AY {STUDENT.academicYear}</span>
            </p>
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-4 w-full md:w-auto">
          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-sm text-primary-foreground/70 mb-1">Attendance</div>
            <div className="text-2xl font-bold">{STUDENT.attendance}%</div>
          </div>
          <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-sm text-primary-foreground/70 mb-1">Assignments</div>
            <div className="text-2xl font-bold">2 Due</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left Column - Subjects */}
        <div className="lg:col-span-2 space-y-6 overflow-y-auto pr-2 pb-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-foreground">Current Subjects</h3>
            <Link to="/subjects" className="text-sm font-medium text-primary hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SUBJECTS.map(subject => {
              const percent = Math.round((subject.attended / subject.total) * 100);
              return (
                <Link to={`/subjects/${subject.id}`} key={subject.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{subject.name}</h4>
                      <p className="text-xs text-muted mt-0.5">{subject.code} • {subject.teacher}</p>
                    </div>
                    <div className={`text-xs font-medium px-2 py-1 rounded-md ${
                      percent >= 85 ? 'bg-success/10 text-success' : 
                      percent >= 75 ? 'bg-warning/10 text-warning' : 'bg-danger/10 text-danger'
                    }`}>
                      {percent}%
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-muted mb-2">
                      <span>Attendance</span>
                      <span className="font-medium text-foreground">{subject.attended} / {subject.total} classes</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ease-out ${
                          percent >= 85 ? 'bg-success' : 
                          percent >= 75 ? 'bg-warning' : 'bg-danger'
                        }`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Right Column - Upcoming & Notifications (flex-col and flex-1 so it stretches in the last space) */}
        <div className="flex flex-col space-y-6 overflow-hidden">
          {/* Assignments */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-6 shrink-0 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Upcoming Assignments</h3>
              <Link to="/assignments" className="text-xs font-medium text-primary hover:underline">See All</Link>
            </div>
            
            <div className="space-y-4">
              {ASSIGNMENTS.map(a => (
                <div key={a.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-sm text-foreground">{a.title}</h4>
                      <p className="text-xs text-muted mt-0.5">{a.subject}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
                      a.status === 'Pending' ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                    }`}>
                      {a.status}
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center text-xs text-muted">
                    <CalendarCheck size={14} className="mr-1.5" />
                    Due: {new Date(a.dueDate).toLocaleDateString()}
                    {a.status === 'Pending' && (
                      <span className="ml-auto text-danger font-medium">{a.daysLeft} days left</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Notifications - flex-1 allows it to take up the remaining vertical space */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex-1 flex flex-col min-h-0 transition-colors">
            <div className="flex items-center justify-between mb-4 shrink-0">
              <h3 className="font-semibold text-foreground">Recent Notifications</h3>
              <Link to="/notifications" className="text-xs font-medium text-primary hover:underline">Mark all read</Link>
            </div>
            <div className="space-y-4 overflow-y-auto pr-2 pb-2">
              {NOTIFICATIONS.map(n => (
                <div key={n.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/5 transition-colors cursor-pointer border border-transparent hover:border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Bell size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{n.title}</h4>
                    <p className="text-xs text-muted mt-1">{n.time} • {n.type}</p>
                  </div>
                </div>
              ))}
              
              {/* Added extra mock notifications to demonstrate the scroll/flex-1 behavior clearly */}
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/5 transition-colors cursor-pointer border border-transparent hover:border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Bell size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">Science Fair Registration Open</h4>
                    <p className="text-xs text-muted mt-1">4 days ago • Announcement</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center border-2 border-dashed border-border rounded-xl p-8 bg-card/50 transition-colors">
      <div className="w-16 h-16 bg-muted/20 text-muted rounded-full flex items-center justify-center mb-4">
        <LayoutDashboard size={32} />
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">{title} Page</h2>
      <p className="text-muted max-w-md">
        This is a placeholder for the {title} module. In a fully implemented system, this would fetch data from the Django backend APIs and display specialized UI.
      </p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "subjects", element: <PlaceholderPage title="Subjects" /> },
      { path: "subjects/:id", element: <PlaceholderPage title="Subject Detail" /> },
      { path: "attendance", element: <PlaceholderPage title="Attendance" /> },
      { path: "assignments", element: <PlaceholderPage title="Assignments" /> },
      { path: "qr-attendance", element: <PlaceholderPage title="QR Attendance" /> },
      { path: "id-card", element: <PlaceholderPage title="ID Card" /> },
      { path: "notifications", element: <PlaceholderPage title="Notifications" /> },
      { path: "absence-tickets", element: <PlaceholderPage title="Absence Tickets" /> },
      { path: "profile", element: <PlaceholderPage title="Profile" /> },
      { path: "settings", element: <PlaceholderPage title="Settings" /> },
      { path: "*", element: <PlaceholderPage title="Not Found" /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
