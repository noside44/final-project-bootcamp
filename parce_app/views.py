from rest_framework import viewsets
from .serializer import UserSerializer, DeviceSerializer, RolSerializer, MetricasSerializer, UsuarioRolSerializer, UsuariosDispositivoSerializer
from .models import Usuario, Dispositivo, Rol, Metricas, UsuarioRol, UsuariosDispositivo

# Create your views here.
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = Usuario.objects.all()

class DispositivoView(viewsets.ModelViewSet):
    serializer_class = DeviceSerializer
    queryset = Dispositivo.objects.all()

class RolView(viewsets.ModelViewSet):
    serializer_class = RolSerializer
    queryset = Rol.objects.all()

class MetricasView(viewsets.ModelViewSet):
    serializer_class = MetricasSerializer
    queryset = Metricas.objects.all()

class UsuarioRolView(viewsets.ModelViewSet):
    serializer_class = UsuarioRolSerializer
    queryset = UsuarioRol.objects.all()
    
class UsuariosDispositivoView(viewsets.ModelViewSet):
    serializer_class = UsuariosDispositivoSerializer
    queryset = UsuariosDispositivo.objects.all()



