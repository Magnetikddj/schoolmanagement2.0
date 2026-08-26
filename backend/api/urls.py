from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentProfileViewSet, SubjectViewSet, AssignmentViewSet, AttendanceViewSet

router = DefaultRouter()
router.register(r'students', StudentProfileViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'assignments', AssignmentViewSet)
router.register(r'attendance', AttendanceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
