# Micro Service - Node JS

This Project is a micro service using nodeJS, ExpressJS and the api [Movie Database Api](https://www.themoviedb.org/documentation/api)

### Folder Structure

```
src
    └── controllers
    │   └── movie.controller.js
    │   └── search.controller.js
    └── routes
    │   └── movie.js
    │   └── search.js
    └── services
    │   └── defaultSetting.js
    │   └── movieService.js
    └── app.js
    └── index.js
```

### Routes

Run the proyect in your localhost port `4000`

```sh
localhost:4000
```

| Name   | URL                    | Response            |
| ------ | ---------------------- | ------------------- |
| Movies | `/api/movies`          | List of movies      |
| Movie  | `/api/movies/:id`      | Single Movie        |
| Search | `/api/search?q=string` | Find movie by title |

## License

MIT
