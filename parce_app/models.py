from django.db import models

# Create your models here.
class Usuario(models.Model):
    idusuario = models.IntegerField(db_column='idUsuario', primary_key=True)  # Field name made lowercase.
    nombresapellidosusuarios = models.CharField(db_column='nombresApellidosUsuarios', max_length=70)  # Field name made lowercase.
    emailusuario = models.CharField(db_column='emailUsuario', max_length=45)  # Field name made lowercase.
    contrasenausuario = models.CharField(db_column='contrasenaUsuario', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'usuario'

    def __str__(self):
        return self.nombresapellidosusuarios
    

class Rol(models.Model):
    idrol = models.AutoField(db_column='idRol', primary_key=True)  # Field name made lowercase.
    nombrerol = models.CharField(db_column='nombreRol', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'rol'

    def __str__(self):
        return self.nombrerol
    

# class UsuarioRol(models.Model):
#     id_usuario_rol = models.AutoField(db_column='id_usuario_rol', primary_key=True)
#     usuario_idusuario = models.ForeignKey(Usuario, models.DO_NOTHING, db_column='Usuario_idUsuario')  # Field name made lowercase. The composite primary key (Usuario_idUsuario, Rol_idRol) found, that is not supported. The first column is selected.
#     rol_idrol = models.ForeignKey(Rol, models.DO_NOTHING, db_column='Rol_idRol')  # Field name made lowercase.

#     class Meta:
#         managed = False
#         db_table = 'usuario-rol'
#         unique_together = (('id_usuario_rol', 'usuario_idusuario', 'rol_idrol'),)

#     def __str__(self):
#         return f"{self.usuario_idusuario}" + " - " f"{self.rol_idrol}"
    
class UsuarioRol(models.Model):
    usuario_idusuario = models.OneToOneField(Usuario, models.DO_NOTHING, db_column='Usuario_idUsuario', primary_key=True)  # Field name made lowercase. The composite primary key (Usuario_idUsuario, Rol_idRol) found, that is not supported. The first column is selected.
    rol_idrol = models.ForeignKey(Rol, models.DO_NOTHING, db_column='Rol_idRol')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'usuario-rol'
        unique_together = (('usuario_idusuario', 'rol_idrol'),)

    def __str__(self):
        return f"{self.usuario_idusuario}" + " - " f"{self.rol_idrol}"


class Dispositivo(models.Model):
    iddispositivo = models.AutoField(db_column='idDispositivo', primary_key=True)  # Field name made lowercase.
    nombredispositivo = models.CharField(db_column='nombreDispositivo', max_length=45)  # Field name made lowercase.
    referenciadispositivo = models.CharField(db_column='referenciaDispositivo', max_length=45)  # Field name made lowercase.
   
    class Meta:
        managed = False
        db_table = 'dispositivo'

    def __str__(self):
        return self.nombredispositivo
    

class UsuariosDispositivo(models.Model):
    idusuarios_dispositivo = models.AutoField(db_column='idUsuarios-dispositivo', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. The composite primary key (idUsuarios-dispositivo, Usuario_idUsuario, Dispositivo_idDispositivo) found, that is not supported. The first column is selected.
    usuario_idusuario = models.ForeignKey(Usuario, models.DO_NOTHING, db_column='Usuario_idUsuario')  # Field name made lowercase.
    dispositivo_iddispositivo = models.ForeignKey(Dispositivo, models.DO_NOTHING, db_column='Dispositivo_idDispositivo')  # Field name made lowercase.
    nombreusuariodispositivo = models.CharField(db_column='nombreUsuarioDispositivo', max_length=45)  # Field name made lowercase.
    estado_dispositivo = models.BooleanField(db_column='estado_dispositivo', default=True)  # Field name made lowercase.


    class Meta:
        managed = False
        db_table = 'usuarios-dispositivo'
        unique_together = (('idusuarios_dispositivo', 'usuario_idusuario', 'dispositivo_iddispositivo', 'estado_dispositivo'),)

    def __str__(self):
        # return self.nombreusuariodispositivo
        return f"{self.nombreusuariodispositivo}" + " - " f"{self.usuario_idusuario}"
    
    
class Metricas(models.Model):
    idmetricas = models.AutoField(db_column='idMetricas', primary_key=True)  # Field name made lowercase. The composite primary key (idMetricas, Dispositivo_idDispositivo) found, that is not supported. The first column is selected.
    dispositivo_iddispositivo = models.ForeignKey(Dispositivo, models.DO_NOTHING, db_column='Dispositivo_idDispositivo')  # Field name made lowercase.
    nombremetrica = models.CharField(db_column='nombreMetrica', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'metricas'
        unique_together = (('idmetricas', 'dispositivo_iddispositivo'),)

    def __str__(self):
        return self.nombremetrica
    
    
class MetricasDispositivo(models.Model):
    usuarios_dispositivo_idusuarios_dispositivo = models.OneToOneField('UsuariosDispositivo', models.DO_NOTHING, db_column='Usuarios-dispositivo_idUsuarios-dispositivo', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. The composite primary key (Usuarios-dispositivo_idUsuarios-dispositivo, Metricas_idMetricas) found, that is not supported. The first column is selected.
    metricas_idmetricas = models.ForeignKey(Metricas, models.DO_NOTHING, db_column='Metricas_idMetricas')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'metricas-dispositivo'
        unique_together = (('usuarios_dispositivo_idusuarios_dispositivo', 'metricas_idmetricas'),)

    def __str__(self):
        return f"{self.metricas_idmetricas}" + " - " f"{self.usuarios_dispositivo_idusuarios_dispositivo}"