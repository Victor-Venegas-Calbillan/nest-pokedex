<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. tener Nest CLI intalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5.  Clonar el archivo **.env.tamplate** y renombrar la copia **.env**

6.  Llenar las variables de entorno definidas en el `.env`

7.  Ejecutar la apliacion en dev:

```
yarn start:dev
```

8. Reconstruir la base de datos con la semmilla

```
localhost:3000/api/v2/seed
```

# Build de produccion

1. crear el archivo `.env.prod`
2. Llenar las variables de entorno de prod
3. Crear nueva imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

4. **(Opcional)** Ejecutar de manera desenlazada

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```

## Stack usado

- MongoDB
- Nest
