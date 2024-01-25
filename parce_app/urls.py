from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from parce_app import views

router = routers.DefaultRouter()
router.register(r'usuario', views.UsuarioView, 'usuario')
router.register(r'dispositivo', views.DispositivoView, 'dispositivo')
router.register(r'rol', views.RolView, 'rol')
router.register(r'metricas', views.MetricasView, 'metricas')
router.register(r'usuariorol', views.UsuarioRolView, 'usuariorol')
router.register(r'usuariodis', views.UsuariosDispositivoView, 'usuariodis')

urlpatterns = [
    path('api/', include(router.urls)),
    path('docs/', include_docs_urls(title='API'))
]

# http://localhost:8000/usuario/api/usuario/  esta sería la ruta creada de usuario
# http://localhost:8000/usuario/docs/ para la documentación

# http://localhost:8000/dispositivo/api/dispositivo/  esta sería la ruta creada de dispositivo
# http://localhost:8000/rol/api/rol/  esta sería la ruta creada de dispositivo
# http://localhost:8000/metricas/api/metricas/  esta sería la ruta creada de dispositivo
# http://localhost:8000/usuariorol/api/usuariorol/  esta sería la ruta creada de dispositivo
# http://localhost:8000/usuariodis/api/usuariodis/  esta sería la ruta creada de dispositivo
