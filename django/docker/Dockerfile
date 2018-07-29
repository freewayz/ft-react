FROM python:3.6-alpine3.6
MAINTAINER Edache Peter

ENV DOCKYARD_HOME=/src
ENV DOCKYARD_SRC=/src/webapp/finetune
ENV DJANGO_SETTINGS_MODULE=question.settings

WORKDIR $DOCKYARD_HOME

COPY assignment-0.0.1.tar.gz $DOCKYARD_SRC/


RUN pip install $DOCKYARD_SRC/assignment-0.0.1.tar.gz
EXPOSE 8000

WORKDIR $DOCKYARD_SRC
COPY ./entrypoint.sh /
ENTRYPOINT ["django-admin migrate", "&&", "gunicorn", "question.wsgi:application","--bind=0.0.0.0:8000"]
