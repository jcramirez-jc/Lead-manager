
from .models import Lead
from rest_framework import viewsets, permissions, generics
from .serializers import LeadSerializer
# from django.contrib.auth.models import User


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()
    

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    


class LeadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = [permissions.AllowAny]

