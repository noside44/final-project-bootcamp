# Generated by Django 5.0.1 on 2024-01-18 05:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parce_app', '0003_delete_libro_alter_usuario_table'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dispositivo',
            fields=[
                ('iddispositivo', models.AutoField(db_column='idDispositivo', primary_key=True, serialize=False)),
                ('nombredispositivo', models.CharField(db_column='nombreDispositivo', max_length=45)),
                ('referenciadispositivo', models.CharField(db_column='referenciaDispositivo', max_length=45)),
                ('estado_dispositivo', models.BooleanField(db_column='estado_dispositivo', default=True)),
            ],
            options={
                'db_table': 'dispositivo',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Rol',
            fields=[
                ('idrol', models.AutoField(db_column='idRol', primary_key=True, serialize=False)),
                ('nombrerol', models.CharField(db_column='nombreRol', max_length=45)),
            ],
            options={
                'db_table': 'rol',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='UsuarioRol',
            fields=[
                ('usuario_idusuario', models.OneToOneField(db_column='Usuario_idUsuario', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='parce_app.usuario')),
            ],
            options={
                'db_table': 'usuario_rol',
                'managed': False,
            },
        ),
    ]
