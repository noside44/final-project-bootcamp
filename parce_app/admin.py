from django.contrib import admin
from .models import Usuario, Rol, UsuarioRol, Dispositivo, UsuariosDispositivo, Metricas, MetricasDispositivo

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Rol)
admin.site.register(UsuarioRol)
admin.site.register(Dispositivo)
admin.site.register(UsuariosDispositivo)
admin.site.register(Metricas)
admin.site.register(MetricasDispositivo)