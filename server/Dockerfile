FROM python:3.10-slim

# Pinpoint poetry version
RUN pip install poetry==1.7.1

# disable virtualenv creation
ENV POETRY_VIRTUALENVS_CREATE=false

# set work directory
WORKDIR /app

# copy only required files
COPY pyproject.toml ./
COPY rpihomekit ./rpihomekit
# complains about missing readme.md (?), create fake one
RUN touch README.md


# install with poetry, only production dependencies
RUN poetry install --without dev && pip install gunicorn

EXPOSE 4200
CMD ["gunicorn", "-w", "1", "-t", "2", "-b", "0.0.0.0:4200", "rpihomekit.app:create_app()" ]