export default function counter(state = 0, {type, data}) {
  switch(type) {
    case "increment": return state + 1

    default: return state
  }
}
