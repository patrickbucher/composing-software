# Composing Software

## Notes

- _compose operator_: $(f \circ g)(x) = f(g(x))$ means "f composed with g" or "f after g"
- _point free style_: writing functions without mentioning of the arguments
  - This reduces intermediary variables, which frees up the programmer's working memory—and reduces the surface for bugs.
- _functor_: a container you can `map` over its items
- _Abstraction_: _Generalization_ (finding similarities) and _Specialization_ (supply the differences)
- _data last_: take the specializing parameters first and the data parameters last
- _functor_: something _mappable_, preserving this property
- _monad_: something _flat mappable_, preserving this property
  - Monads are about the composition of _lifting_ functions.
  - The context, in which the values have been lifted into (e.g. an array) must be unwrapped afterwards, which is done by `flatMap`.

## Quotes

- Mutation hides change.
- Logic is thought. Effects are action.
- A list expressed over time is a stream.
