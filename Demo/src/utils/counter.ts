let currentId = 0; // Inicializamos el ID en 0

export function generateId(): number {
  currentId += 1; // Incrementamos en 1 cada vez que se llama
  return currentId;
}