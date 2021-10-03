from rest_framework import serializers
from .models import Lead
from django.contrib.auth.models import User

class LeadSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    # leads = serializers.PrimaryKeyRelatedField(many=True, queryset=Lead.objects.all())
    class Meta:
        model = Lead
        fields = ('id','name', 'email', 'message', 'owner')

