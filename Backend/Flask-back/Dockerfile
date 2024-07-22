FROM python:3.8.10
WORKDIR Flask-back
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
ENTRYPOINT [ "python", "-m", "flask", "--app", "app.py", "run", "--host=0.0.0.0", "--port=8000" ]
