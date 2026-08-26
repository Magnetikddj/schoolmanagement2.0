# EduPlatform Backend

This directory contains the Django backend for the School Management System.

## Architecture
- **Django**: The core web framework.
- **Django REST Framework (DRF)**: Powers the REST APIs under `/api/`.
- **PostgreSQL**: Configured via `settings.py` (you will need to provide your database URL).

## Models Included
- `User`: Extended Django Auth model with Role-based access (Admin, Teacher, Student).
- `StudentProfile`: Contains academic information and unique QR tokens.
- `Subject`: Links teachers to enrolled students.
- `Assignment`: Contains assignment details and due dates.
- `Attendance`: Tracks daily subject-level attendance.

## Setup Instructions

Since this Figma Make environment is optimized for the React frontend, you will need to set up the backend locally or in a Python environment:

1. Install Python 3.9+ and PostgreSQL.
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install django djangorestframework djangorestframework-simplejwt psycopg2-binary django-cors-headers
   ```
4. Run migrations:
   ```bash
   python manage.py makemigrations api
   python manage.py migrate
   ```
5. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```
6. Start the server:
   ```bash
   python manage.py runserver
   ```

The APIs are structured at `/api/students/`, `/api/subjects/`, `/api/assignments/`, and `/api/attendance/`.
