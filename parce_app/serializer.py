from rest_framework import serializers
from .models import Usuario, Dispositivo, Rol, Metricas, UsuarioRol, UsuariosDispositivo

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dispositivo
        fields = '__all__'

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'

class MetricasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metricas
        fields = '__all__'

class UsuarioRolSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioRol
        fields = '__all__'

class UsuariosDispositivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuariosDispositivo
        fields = '__all__'