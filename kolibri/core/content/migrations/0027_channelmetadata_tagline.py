# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-06-15 10:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("content", "0026_contentnode_options"),
    ]

    operations = [
        migrations.AddField(
            model_name="channelmetadata",
            name="tagline",
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
