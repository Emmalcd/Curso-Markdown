# Curso - Markdown

## Encabezados

# Head 1

## Head 2

### Head 3

#### Head 4

##### Head 5

###### Head 6

## Párrafos

Para crear un párrafo solo damos enter, por ejemplo, este es un párrafo. Y mientras esta oración sigue siendo parte del mismo párrafo, el siguiente ya no

Esto es un segundo párrafo.

## Textos y formato

_Cursiva_

**Negrita**

~~Tachado~~

**_Cursiva y negrita_**

_~~Cursiva y tachado~~_

**~~Negrita y tachado~~**

**~~_Cursiva negrita y tachado_~~**

## Enlaces

[Mi Git](https://github.com/Emmalcd)

[Timer Pomodoro](https://pomofocus.io/)

[Spotify](https://open.spotify.com/intl-es)

[Udemy](https://udemy.com)

[YouTube](https://youtube.com)

[Inicio](#curso---markdown)

## Imagenes

![Imagen Markdown](https://i0.wp.com/kirkstrobeck.github.io/whatismarkdown.com/img/markdown.png)

![Imagen 2 Markdown](img/md-img.png)

## Divisiones

Un bloque de contenido

---

Otro bloque de contenido

## Listas ordenada

1. Elemento 1
1. Elemento 2
1. Elemento 3

## Listas desaordenadas

- Elemento
- Elemento
- Elemento
- Elemento

## Listas anidadas

- Elemento
  - Subelemento 1
  - Subelemento 2
- Elemento
- Elemento
  1. Subelemento 1
  1. Subelemento 2
- Elemento

1. Elemento 1
   - Sublemento 1
1. Elemento 2
   1. Subelemento 1
1. Elemento 3
1. Elemento 4

## Citas

> Esto es un texto citado
>
> -Emmanuel

## Tablas

| Nombre                           | Edad |                   Correo |
| :------------------------------- | :--: | -----------------------: |
| José Emmanuel De La Cruz Estrada |  24  | joselemmanuel9@gmail.com |
| Juan Perez Paz                   |  33  |          juan@correo.com |
| Sandra Sanchéz León              |  73  |         Sandy@correo.com |

## Códigos

Este es un ejemplo de párrafo en el que enmedio tiene una palabra reservada como lo es `main` para que podamos visualizar cómo es que podemos ingresar codigo en una línea

```js
function sumar(a, b) {
  return a + b;
}
```

<form>
    <label for="q"> Buscar: </label>
    <input type="search" name="q" id="q">
</form>

<!-- Esto es un comentario -->

## Escape de caracteres

Para poder poner una palabra como negrita, en markdown, tu nececitas escribirla entre 4 asteriscos.

De esta forma \*\*negrita\*\* se podrá ver como **negrita**

La forma de poder escapar los caracteres especiales en Markdown es anteponiendo la barra invertida `\` al caracter especial.
