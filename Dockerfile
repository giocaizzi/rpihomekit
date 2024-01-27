FROM python:3.10-slim

# Pinpoint poetry version
RUN pip install poetry==1.7.1

# set work directory
WORKDIR /app

# copy only required files
COPY pyproject.toml ./
COPY rpihomekit ./rpihomekit
# complains about missing readme.md (?), create fake one
RUN touch README.md


# install with poetry, only production dependencies
RUN poetry install --without dev

EXPOSE 5000

ENTRYPOINT ["poetry", "run", "python", "-m", "rpihomekit.app"]